#!/usr/bin/env node

/**
 * Wrapper script to generate PDF with optional custom resume JSON file and output path
 * Usage:
 *   node scripts/gen-pdf-with-json.js [--resume-file-path <path>] [--output-path <path>]
 *   node scripts/gen-pdf-with-json.js [<resume-path>] [<output-path>]
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseArgs(args) {
    const result = { resumeFilePath: null, outputPath: null };
    
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--resume-file-path' && i + 1 < args.length) {
            result.resumeFilePath = args[i + 1];
            i++;
        } else if (args[i] === '--output-path' && i + 1 < args.length) {
            result.outputPath = args[i + 1];
            i++;
        } else if (args[i] === '-o' && i + 1 < args.length) {
            result.outputPath = args[i + 1];
            i++;
        } else if (!args[i].startsWith('-') && !result.resumeFilePath) {
            // First positional argument: resume file path
            result.resumeFilePath = args[i];
        } else if (!args[i].startsWith('-') && result.resumeFilePath && !result.outputPath) {
            // Second positional argument: output path
            result.outputPath = args[i];
        }
    }
    
    return result;
}

async function main() {
    const args = process.argv.slice(2);
    const { resumeFilePath, outputPath } = parseArgs(args);
    
    // Build the app first
    console.log('Building the app...');
    await runCommand('yarn', ['build'], {
        NODE_OPTIONS: '--openssl-legacy-provider',
        SKIP_PREFLIGHT_CHECK: 'true'
    });
    
    // Run inline build
    console.log('Running inline build...');
    await runCommand('yarn', ['inline-build'], {
        NODE_OPTIONS: '--openssl-legacy-provider',
        INLINE_RUNTIME_CHUNK: 'false',
        GENERATE_SOURCEMAP: 'false',
        SKIP_PREFLIGHT_CHECK: 'true'
    });
    
    // Generate PDF with optional resume file path and output path
    const env = {
        NODE_OPTIONS: '--openssl-legacy-provider',
        ...(resumeFilePath ? { RESUME_JSON_PATH: resumeFilePath } : {}),
        ...(outputPath ? { PDF_OUTPUT_PATH: outputPath } : {})
    };
    
    if (resumeFilePath) {
        console.log(`Generating PDF with resume data from: ${resumeFilePath}`);
    } else {
        console.log('Generating PDF with default resume data');
    }
    
    if (outputPath) {
        console.log(`PDF output path: ${outputPath}`);
    }
    
    await runCommand('yarn', ['_gen-pdf'], env);
    
    console.log('PDF generation completed successfully!');
}

function runCommand(command, args, env = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            stdio: 'inherit',
            env: { ...process.env, ...env },
            shell: true
        });
        
        child.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command failed with exit code ${code}`));
            }
        });
        
        child.on('error', (error) => {
            reject(error);
        });
    });
}

main().catch((error) => {
    console.error('Error:', error.message);
    process.exit(1);
});
