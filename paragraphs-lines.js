export function paragraphsLines(textInput) {
    // Step 1: Trim the input to remove leading/trailing whitespace and split 
    // into lines
    const lines = textInput.trim().split('\n');

    // Step 2: Initialize variables to find the range of non-empty lines
    let startIndex = 0;
    let endIndex = lines.length - 1;

    // Step 3: Identify the first non-empty line from the start
    while (startIndex < lines.length && lines[startIndex].trim().length === 0) {
        startIndex++;
    }

    // Step 4: Identify the last non-empty line from the end
    while (endIndex >= 0 && lines[endIndex].trim().length === 0) {
        endIndex--;
    }

    // Step 5: Slice the lines array to include only the non-empty lines
    const trimmedLines = lines.slice(startIndex, endIndex + 1);

    // Step 6: The first line is considered the title
    const title = trimmedLines[0];
    const titleWordCount = title.split(/\s+/).length;
    const titleCharacterLength = title.length;

    // Step 7: Initialize text data counters
    const textData = {
        textLineCount: 0,
        textWordCount: 0,
        textCharacterLength: textInput.replace(/\s/g, '').length
        // Count characters excluding whitespace
    };

    // Step 8: Initialize the array to hold paragraph data and current 
    // paragraph content
    const textParagraphs = [];
    let currentParagraph = [];
    let paragraphIndex = 0;

    // Step 9: Iterate through each trimmed line to categorize them into 
    // paragraphs
    trimmedLines.forEach((line, lineIndex) => {
        const lineWordCount = line.trim().length === 0 ? 0 : line.split(/\s+/).length;
        const lineCharacterLength = line.length;

        // Update overall text data counters
        textData.textLineCount += 1;
        textData.textWordCount += lineWordCount;

        // Step 10: Check if the current line is empty
        if (line.trim().length === 0) {
            // If it's empty and there is an ongoing paragraph, push it to 
            // textParagraphs
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

                currentParagraph = []; // Reset current paragraph
                paragraphIndex++; // Increment paragraph index
            }

            // Add an empty line as a separate paragraph
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

            paragraphIndex++; // Increment paragraph index for the empty line
        } else {
            // If the line is not empty, add it to the current paragraph
            currentParagraph.push({
                lineIndex,
                lineText: line,
                lineData: {
                    lineWordCount,
                    lineCharacterLength
                }
            });
        }

        // Step 11: At the end of the loop, if there's any ongoing paragraph, 
        // add it to textParagraphs
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

    // Step 12: Return the final structured data including the title and all 
    // paragraph details
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
