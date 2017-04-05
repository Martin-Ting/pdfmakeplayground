'use strict';
const path = require('path');
const _ = require('lodash');
const pdfMakerPrinter = require('pdfmake');
const fs = require('fs');

const fontDescriptors = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'afonts/Roboto-Italic.ttf'
  }
};

// create a file in root directory pdfdata.js that exports an object
// with data to export into pdf.
const pdfDoc = require('./pdfdata');

const pdfmake_printer = new pdfMakerPrinter(fontDescriptors);
const docFile = pdfmake_printer.createPdfKitDocument(pdfDoc);
docFile.pipe(fs.createWriteStream('sample.pdf'));
docFile.end();
