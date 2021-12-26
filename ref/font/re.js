function generateFigTextLine(txt, figChars, opts) {
    // var charIndex, figChar, overlap = 0, row, outputFigText = [], len=opts.height;
    var charIndex, figChar, overlap = 0, row, outputFigText = [], len=11;
    for (row = 0; row < len; row++) {
        outputFigText[row] = "";
    }
    len=txt.length
    for (charIndex = 0; charIndex < len; charIndex++) {
        figChar = figChars[txt.substr(charIndex,1).charCodeAt(0)];
        if (figChar) {
            if (opts.fittingRules.hLayout !== FULL_WIDTH) {
                overlap = 10000;// a value too high to be the overlap
                for (row = 0; row < opts.height; row++) {
                    overlap = Math.min(overlap, getHorizontalSmushLength(outputFigText[row], figChar[row], opts));
                }
                overlap = (overlap === 10000) ? 0 : overlap;
            }
            outputFigText = horizontalSmush(outputFigText, figChar, overlap, opts);
        }
    }
    // remove hardblanks
    len = outputFigText.length;
    for (row = 0; row < len; row++) {
        outputFigText[row] = outputFigText[row].replace(new RegExp("\\"+opts.hardBlank,"g")," ")
    }
    return outputFigText;
}

generateFigTextLine('a')