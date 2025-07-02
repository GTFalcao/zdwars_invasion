#!/usr/bin/env node

const filesToInclude = [
  'acs/',
  'actors/',
  'maps/',
  'CMPGNINF.txt',
  'DECORATE.dec',
  'LOADACS.txt',
  'MAPINFO.mapinfo'
];

const outputDir = 'dist';
const outputFilename = 'zdwinv-current.pk3';

// ----------------------- /
// ----------------------- /

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, outputFilename);

// Create a file to stream archive data to
const output = fs.createWriteStream(outputPath);
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
    console.log(`✅ Package created successfully: ${outputPath}`);
    console.log(`📦 Total size: ${archive.pointer()} bytes`);
});

// Good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
        console.warn('Warning:', err.message);
    } else {
        throw err;
    }
});

// Good practice to catch this error explicitly
archive.on('error', function(err) {
    throw err;
});

// Pipe archive data to the file
archive.pipe(output);

console.log('📁 Packaging Doom mod files...');

filesToInclude.forEach(item => {
    const itemPath = path.join(__dirname, item);
    
    if (fs.existsSync(itemPath)) {
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
            console.log(`📂 Adding directory: ${item}`);
            archive.directory(itemPath, item);
        } else {
            console.log(`📄 Adding file: ${item}`);
            archive.file(itemPath, { name: item });
        }
    } else {
        console.warn(`⚠️  Warning: ${item} not found, skipping...`);
    }
});

// Finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize(); 
