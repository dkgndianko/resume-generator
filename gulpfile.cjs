const fs = require('fs');
const { task, series, src, dest } = require('gulp');
const taskListing = require('gulp-task-listing');
const chalk = require('chalk');
const { blue, green, red, cyan } = chalk;
const replace = require('gulp-replace');
const inlinesource = require("gulp-inline-source");

// Import the ES module using dynamic import
let generatePdfWithPuppeteer;

task('resume-pdf-gen', async () => {
  if (!generatePdfWithPuppeteer) {
    const module = await import('./src/utilities/puppeteerPdfGenerator.js');
    generatePdfWithPuppeteer = module.default;
  }
  return generatePdfWithPuppeteer('./build/index.html', './build/index.pdf');
});

task("inline-build", inlineBuild);
task('help', taskListing);
task('default', series('help'));

async function inlineBuild() {
  return src("./build/*.html")
    // Replace /resume-generator/ paths with relative paths for inlining
    .pipe(replace('/resume-generator/static/', './static/'))
    .pipe(replace('.js"></script>', '.js" inline></script>'))
    .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
    .pipe(
      inlinesource({
        compress: false,
        ignore: ["png"],
        rootpath: './build'
      })
    )
    // Restore the /resume-generator/ paths after inlining
    .pipe(replace('./static/', '/resume-generator/static/'))
    .pipe(dest("./build"));
}


module.exports.default = taskListing;
