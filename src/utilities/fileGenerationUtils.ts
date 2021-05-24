import pdf from 'html-pdf';
import {Stream} from "stream";

/**
 * Generate a PDF stream
 * @param title: {string} The title of the file
 * @param content: any The content of the PDF
 * @return Promise<Stream>
 */
export default async function generatePdfStream(title: string, content: any, baseUrl?: string): Promise<Stream> {
    return  new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        pdf.create(content, {type: "pdf", base: baseUrl, phantomArgs: ['--debug=true', '--cookies-file=./build/cookies.cook', '--local-to-remote-url-access=true']}).toStream((err, stream) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(stream);
        });
    });
}