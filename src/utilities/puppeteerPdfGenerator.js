import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate a PDF using Puppeteer (modern headless Chrome)
 * @param htmlPath: {string} Path to the HTML file
 * @param pdfPath: {string} Path where the PDF should be saved
 */
export default async function generatePdfWithPuppeteer(htmlPath, pdfPath) {
    console.log(`Generating PDF from ${htmlPath} to ${pdfPath}`);
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        
        // Load the HTML file
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        const baseUrl = `file://${path.resolve(path.dirname(htmlPath))}/`;
        
        console.log(`Loading HTML content (${htmlContent.length} bytes) with base URL: ${baseUrl}`);
        
        await page.setContent(htmlContent, {
            waitUntil: ['networkidle0', 'domcontentloaded'],
            timeout: 30000
        });
        
        // Wait a bit more for React to render
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check if content was rendered
        const rootContent = await page.evaluate(() => {
            const root = document.getElementById('root');
            return root ? root.innerHTML.length : 0;
        });
        
        console.log(`Root element content length: ${rootContent} bytes`);
        
        if (rootContent === 0) {
            console.warn('Warning: Root element appears to be empty. React may not have rendered.');
        }
        
        // Generate PDF
        await page.pdf({
            path: pdfPath,
            format: 'A3',
            printBackground: true,
            margin: {
                top: '20px',
                right: '20px',
                bottom: '20px',
                left: '20px'
            }
        });
        
        console.log(`PDF generated successfully at ${pdfPath}`);
        
        // Check file size
        const stats = fs.statSync(pdfPath);
        console.log(`PDF file size: ${(stats.size / 1024).toFixed(2)} KB`);
        
    } finally {
        await browser.close();
    }
}
