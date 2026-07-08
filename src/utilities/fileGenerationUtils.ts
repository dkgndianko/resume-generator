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
        console.log(`Generating PDF for ${title} with content length: ${content.length}`)
        console.log(`Base URL: ${baseUrl || 'not provided'}`)
        
        const options = {
            type: "pdf",
            format: "A3",
            base: baseUrl,
            timeout: 60000,
            phantomPath: undefined,
            phantomArgs: [
                '--debug=true',
                '--cookies-file=./build/cookies.cook',
                '--web-security=false',
                '--local-to-remote-url-access=true',
                '--ignore-ssl-errors=true'
            ]
        };
        
        console.log(`PDF options:`, JSON.stringify(options, null, 2));
        
        pdf.create(content, {
            type: "pdf",
            format: "A3",
            base: baseUrl,
            timeout: 60000,
            phantomPath: undefined,
            phantomArgs: [
                '--debug=true',
                '--cookies-file=./build/cookies.cook',
                '--web-security=false',
                '--local-to-remote-url-access=true',
                '--ignore-ssl-errors=true'
            ]
        }).toStream((err, stream) => {
            if (err) {
                console.error(`An error occurred while generating PDF for ${title}:`, err);
                reject(err);
                return;
            }
            console.log(`PDF stream for ${title} generated successfully`);
            resolve(stream);
        });
    });
}
