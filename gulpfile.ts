import fs from 'fs';

import { task, series } from 'gulp';
import taskListing from 'gulp-task-listing';
import {blue, green, red, cyan,} from 'chalk';

import generatePdfStream from './src/utilities/fileGenerationUtils'
import {readUrl} from './src/utilities/httpUtils';
import { Stream } from 'stream';
import { error } from 'console';

task('resume-pdf-gen', async () => generatePdf('./build/index.html', './build/index.pdf'));
task('help', taskListing);
task('default', series('help'));
const baseUrl = 'https://dkgndianko.githubde.io/resume-generator/'; // http://localhost:3000/, https://dkgndianko.github.io/resume-generator/

async function generatePdf(src: string, dest: string) {
    console.log(blue('Generating PDF of resume .....'));
    readUrl(baseUrl)
        .then( (data: string) => {
            return _generatePdfFRomInput(data, dest, baseUrl);
        })
        .catch(error => {
            console.log("Mbirr am na de!")
        });
    /*fs.readFile(src, (err, input) => {
        if (err) {
            console.error(red(`Error when reading file '${src}': ${err}`));
        }
        else {
            return _generatePdfFRomInput(input.toString(), dest);
        }
    });*/
}

function _generatePdfFRomInput(input: string, dest: string, baseUrl: string) {
    // console.log(green(input));
    generatePdfStream('Resume', input, baseUrl)
    // generatePdfStream('Resume', '<html><body>testingThis is for </body></html>')
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