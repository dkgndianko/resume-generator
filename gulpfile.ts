import fs from 'fs';

import { task, series } from 'gulp';
import taskListing from 'gulp-task-listing';
import {blue, green, red, cyan,} from 'chalk';

import generatePdfStream from './src/utilities/fileGenerationUtils'
import { Stream } from 'stream';

task('resume-pdf-gen', async () => generatePdf('./build/index.html', './build/index.pdf'))
task('help', taskListing);
task('default', series('help'));

async function generatePdf(src: string, dest: string) {
    console.log(blue('Generating PDF of resume .....'));
    fs.readFile(src, (err, input) => {
        if (err) {
            console.error(red(`Error when reading file '${src}': ${err}`));
        }
        else {
            console.log(green(input));
            generatePdfStream('Resume', input.toString())
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
    });
}

export default taskListing