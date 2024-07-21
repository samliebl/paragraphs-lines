// paragraphs-lines.js

export function paragraphsLines(textInput) {
    const paragraphs = textInput.trim().split(/\n\s*\n/); // Split into paragraphs

    const title = paragraphs[0].split('\n')[0]; // First line as title
    const titleWordCount = title.split(/\s+/).length;
    const titleCharacterLength = title.length;

    const textData = {
        textLineCount: 0,
        textWordCount: 0,
        textCharacterLength: textInput.replace(/\s/g, '').length
    };

    const textParagraphs = paragraphs.map((paragraph, paragraphIndex) => {
        const lines = paragraph.split('\n').map((line, lineIndex) => {
            const lineWordCount = line.split(/\s+/).length;
            const lineCharacterLength = line.length;

            textData.textLineCount += 1;
            textData.textWordCount += lineWordCount;

            return {
                lineIndex,
                lineText: line,
                lineData: {
                    lineWordCount,
                    lineCharacterLength
                }
            };
        });

        const paragraphData = {
            paragraphLineCount: lines.length,
            paragraphWordCount: lines.reduce((acc, line) => acc + line.lineData.lineWordCount, 0),
            paragraphCharacterLength: lines.reduce((acc, line) => acc + line.lineData.lineCharacterLength, 0)
        };

        return {
            paragraphIndex,
            paragraphData,
            paragraphLines: lines
        };
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
