export function paragraphsLines(text) {
    const lines = text.trim().split('\n');
    const textTitle = {
        titleText: lines[0],
        titleData: {
            titleWordCount: lines[0].split(' ').length,
            titleCharacterLength: lines[0].length
        }
    };

    const paragraphs = [];
    let paragraph = {
        paragraphIndex: 0,
        paragraphData: {
            paragraphLineCount: 0,
            paragraphWordCount: 0,
            paragraphCharacterLength: 0
        },
        paragraphLines: []
    };

    let textLineCount = 0;
    let textWordCount = 0;
    let textCharacterLength = 0;

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (i === 1 && line.trim() === '') continue; // Skip the empty line after the title

        textLineCount++;
        textWordCount += line.split(' ').length;
        textCharacterLength += line.length;

        if (line.trim() === '') {
            if (paragraph.paragraphLines.length > 0) {
                paragraphs.push(paragraph);
                paragraph = {
                    paragraphIndex: paragraphs.length,
                    paragraphData: {
                        paragraphLineCount: 0,
                        paragraphWordCount: 0,
                        paragraphCharacterLength: 0
                    },
                    paragraphLines: []
                };
            }
            paragraph.paragraphLines.push({
                lineIndex: textLineCount - 1,
                lineText: null,
                lineData: {
                    lineWordCount: 0,
                    lineCharacterLength: 0
                }
            });
            paragraph.paragraphData.paragraphLineCount++;
        } else {
            paragraph.paragraphLines.push({
                lineIndex: textLineCount - 1,
                lineText: line,
                lineData: {
                    lineWordCount: line.split(' ').length,
                    lineCharacterLength: line.length
                }
            });
            paragraph.paragraphData.paragraphLineCount++;
            paragraph.paragraphData.paragraphWordCount += line.split(' ').length;
            paragraph.paragraphData.paragraphCharacterLength += line.length;
        }
    }
    if (paragraph.paragraphLines.length > 0) {
        paragraphs.push(paragraph);
    }

    return {
        textTitle: textTitle,
        textLineCount: textLineCount,
        textWordCount: textWordCount,
        textCharacterLength: textCharacterLength,
        textParagraphs: paragraphs
    };
}
