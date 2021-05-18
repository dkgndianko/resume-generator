import pdf from 'html-pdf';
import {Stream} from "stream";

/**
 * Generate a PDF stream
 * @param title: {string} The title of the file
 * @param content: any The content of the PDF
 * @return Promise<Stream>
 */
export default async function generatePdfStream(title: string, content: any): Promise<Stream> {
    return  new Promise((resolve, reject) => {
        pdf.create(content, {type: "pdf"}).toStream((err, stream) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(stream);
        });
    });
}