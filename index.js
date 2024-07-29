import { paragraphsLines } from './paragraphs-lines.js';

const textInput = `
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

const result = paragraphsLines(textInput);
console.log(JSON.stringify(result, null, 2));