const fs = require('fs');
const { task, series, src, dest } = require('gulp');
const taskListing = require('gulp-task-listing');
const chalk = require('chalk');
const { blue, green, red, cyan } = chalk;
const replace = require('gulp-replace');
const inlinesource = require("gulp-inline-source");

// Import the ES module using dynamic import
let generatePdfWithPuppeteer;

/**
 * Inject resume data from a JSON file into the HTML as a global variable
 * @param {string} htmlContent - The HTML content
 * @param {string} jsonPath - Path to the JSON file
 * @param {string} lang - Optional language override
 * @returns {string} Modified HTML content with injected data
 */
function injectResumeData(htmlContent, jsonPath, lang) {
    if (!jsonPath || !fs.existsSync(jsonPath)) {
        return htmlContent;
    }
    
    try {
        let jsonData = fs.readFileSync(jsonPath, 'utf8');
        
        // If language override is provided, inject it into the JSON
        if (lang) {
            const parsed = JSON.parse(jsonData);
            parsed.lang = lang;
            jsonData = JSON.stringify(parsed);
        }
        
        const scriptTag = `<script>window.__RESUME_DATA__ = ${jsonData};</script>`;
        
        // Inject before the closing </body> tag
        if (htmlContent.includes('</body>')) {
            return htmlContent.replace('</body>', `${scriptTag}</body>`);
        } else {
            // If no </body> tag, append at the end
            return htmlContent + scriptTag;
        }
    } catch (error) {
        console.warn(red(`Warning: Could not inject resume data from ${jsonPath}: ${error.message}`));
        return htmlContent;
    }
}

task('resume-pdf-gen', async () => {
    if (!generatePdfWithPuppeteer) {
        const module = await import('./src/utilities/puppeteerPdfGenerator.js');
        generatePdfWithPuppeteer = module.default;
    }
    
    const htmlPath = './build/index.html';
    const pdfPath = process.env.PDF_OUTPUT_PATH || './build/index.pdf';
    const jsonPath = process.env.RESUME_JSON_PATH;
    const lang = process.env.RESUME_LANG;
    
    // If a JSON file is provided, inject it into the HTML
    if (jsonPath && fs.existsSync(jsonPath)) {
        console.log(cyan(`Injecting resume data from ${jsonPath}`));
        let htmlContent = fs.readFileSync(htmlPath, 'utf8');
        htmlContent = injectResumeData(htmlContent, jsonPath, lang);
        fs.writeFileSync(htmlPath, htmlContent);
        console.log(green('Resume data injected successfully'));
    }
    
    return generatePdfWithPuppeteer(htmlPath, pdfPath);
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
