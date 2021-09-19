import fs from 'fs';

import { task, series, src, dest } from 'gulp';
import taskListing from 'gulp-task-listing';
import {blue, green, red, cyan,} from 'chalk';
// import inlinesource from 'gulp-inline-source';
import replace from 'gulp-replace';

import generatePdfStream from './src/utilities/fileGenerationUtils'
import { Stream } from 'stream';

task('resume-pdf-gen', async () => generatePdf('./build/index.html', './build/index.pdf'));
task("inline-build", inlineBuild)
task('help', taskListing);
task('default', series('help'));

const inlinesource = require("gulp-inline-source");
async function inlineBuild() {
  return src("./build/*.html")
    .pipe(replace('.js"></script>', '.js" inline></script>'))
    .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
    .pipe(
      inlinesource({
        compress: false,
        ignore: ["png"],
      })
    )
    .pipe(dest("./build"));
};

async function generatePdf(src: string, dest: string) {
    console.log(blue('Generating PDF of resume .....'));
    fs.readFile(src, (err, input) => {
        if (err) {
            console.error(red(`Error when reading file '${src}': ${err}`));
        }
        else {
            return _generatePdfFRomInput(input.toString(), dest);
        }
    });
}

function _generatePdfFRomInput(input: string, dest: string) {
    generatePdfStream('Resume', input)
    .then((stream: Stream) => {
        if (fs.existsSync(dest)) {
            console.log(cyan(`Removing existing file '${dest}'`));
            fs.unlinkSync(dest);
        }
        stream.pipe(fs.createWriteStream(dest));
    })
    .catch((e: Error) => console.error(red(e)));
}

export default taskListing