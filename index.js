import { paragraphsLines } from './paragraphs-lines.js';
import fs from 'fs';

// Input text
const textInput = `
After great pain, a formal feeling comes

After great pain, a formal feeling comes –
The Nerves sit ceremonious, like Tombs –
The stiff Heart questions ‘was it He, that bore,’
And ‘Yesterday, or Centuries before’?

The Feet, mechanical, go round –
A Wooden way
Of Ground, or Air, or Ought –
Regardless grown,
A Quartz contentment, like a stone –

This is the Hour of Lead –
Remembered, if outlived,
As Freezing persons, recollect the Snow –
First – Chill – then Stupor – then the letting go –
`;

// Process the text content
const processedContent = paragraphsLines(textInput);

// Structure the JSON output
const result = {
    text: {
        textTitle: processedContent.textTitle,
        textData: {
            textLineCount: processedContent.textLineCount,
            textWordCount: processedContent.textWordCount,
            textCharacterLength: processedContent.textCharacterLength,
        },
        textParagraphs: processedContent.textParagraphs
    }
};

console.log(JSON.stringify(result, null, 2));
