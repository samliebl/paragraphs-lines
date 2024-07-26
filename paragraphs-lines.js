// paragraphs-lines.js
export function paragraphsLines(textInput) {
    // Trim the input to remove leading/trailing whitespace and split into lines
    const lines = textInput.trim().split('\n');

    // Filter out leading and trailing empty lines
    let startIndex = 0;
    let endIndex = lines.length - 1;
    while (startIndex < lines.length && lines[startIndex].trim().length === 0) {
        startIndex++;
    }
    while (endIndex >= 0 && lines[endIndex].trim().length === 0) {
        endIndex--;
    }

    const trimmedLines = lines.slice(startIndex, endIndex + 1);

    // First line as title
    const title = trimmedLines[0];
    const titleWordCount = title.split(/\s+/).length;
    const titleCharacterLength = title.length;

    const textData = {
        textLineCount: 0,
        textWordCount: 0,
        textCharacterLength: textInput.replace(/\s/g, '').length
    };

    const textParagraphs = [];
    let currentParagraph = [];
    let paragraphIndex = 0;

    trimmedLines.forEach((line, lineIndex) => {
        const lineWordCount = line.trim().length === 0 ? 0 : line.split(/\s+/).length;
        const lineCharacterLength = line.length;

        textData.textLineCount += 1;
        textData.textWordCount += lineWordCount;

        if (line.trim().length === 0) {
            if (currentParagraph.length > 0) {
                const paragraphData = {
                    paragraphLineCount: currentParagraph.length,
                    paragraphWordCount: currentParagraph.reduce((acc, line) => acc + line.lineData.lineWordCount, 0),
                    paragraphCharacterLength: currentParagraph.reduce((acc, line) => acc + line.lineData.lineCharacterLength, 0)
                };

                textParagraphs.push({
                    paragraphIndex,
                    paragraphData,
                    paragraphLines: currentParagraph
                });

                currentParagraph = [];
                paragraphIndex++;
            }

            textParagraphs.push({
                paragraphIndex,
                paragraphData: {
                    paragraphLineCount: 1,
                    paragraphWordCount: 0,
                    paragraphCharacterLength: 0
                },
                paragraphLines: [{
                    lineIndex,
                    lineText: null,
                    lineData: {
                        lineWordCount: 0,
                        lineCharacterLength: 0
                    }
                }]
            });

            paragraphIndex++;
        } else {
            currentParagraph.push({
                lineIndex,
                lineText: line,
                lineData: {
                    lineWordCount,
                    lineCharacterLength
                }
            });
        }

        if (lineIndex === trimmedLines.length - 1 && currentParagraph.length > 0) {
            const paragraphData = {
                paragraphLineCount: currentParagraph.length,
                paragraphWordCount: currentParagraph.reduce((acc, line) => acc + line.lineData.lineWordCount, 0),
                paragraphCharacterLength: currentParagraph.reduce((acc, line) => acc + line.lineData.lineCharacterLength, 0)
            };

            textParagraphs.push({
                paragraphIndex,
                paragraphData,
                paragraphLines: currentParagraph
            });
        }
    });

    return {
        text: {
            textTitle: {
                titleText: title,
                titleData: {
                    titleWordCount,
                    titleCharacterLength
                }
            },
            textData: {
                textLineCount: textData.textLineCount,
                textWordCount: textData.textWordCount,
                textCharacterLength: textData.textCharacterLength
            },
            textParagraphs
        }
    };
}
