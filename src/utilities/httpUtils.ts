import { error } from 'console';
import http from 'http';
import https from 'https';

/*export function readUrl(url: string, callback: (data: string) => any) {
    const transporter = (url.startsWith('https')? https : http);
    transporter.get(url, (res) => {
        console.log(res.statusCode);
        let myStr = '';
        const readerCallback = (d: Buffer) => {
                myStr += d.toString();
        }
        res.on('data', readerCallback);
        res.on('end', () => {
            return callback(myStr);
        })
    })
}*/

export function readUrl(url: string): Promise<string> {
    const transporter = (url.startsWith('https')? https : http);
    return  new Promise((resolve, reject) => {
        try {
            transporter.get(url, (res) => {
                let myStr = '';
                const readerCallback = (d: Buffer) => {
                        myStr += d.toString();
                }
                res.on('data', readerCallback);
                res.on('end', () => {
                    return resolve(myStr);
                });
                res.on('error', reject);
            })
        }
        catch (err) {
            reject(err);
        }
    });
}