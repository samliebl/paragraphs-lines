# paragraphs-lines

The goal is to build this out more with some plans I have in mind. At present, this NPM module exports a function that takes a text input parameter `textInput`.

It takes paramater `textInput` and splits it into paragraphs `$.text.textParagraphs[]` and lines within paragraphs as `$.text.textParagraphs[i].paragraphLines[i].lineText`. They are strings and each "text level" has a corresponding data object that tracks metadata about that text string. Each object within the `$.text.textParagraphs[0]` array, for example, has a `.paragraphData` object that provides such properties as `paragraphLineCount`; each line within each paragraph has a `lineData` object with corresponding properties like `lineWordCount`

It reformats this data into a JSON object that includes metadata along with the original text.

It is written in ESM format.

## Usage

```js
import { paragraphsLines } from 'paragraphs-lines';

// "After great pain, a formal feeling comes – (372)"
// by Emily Dickinson

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
```

returns:

```json
{
  "text": {
    "textTitle": {
      "titleText": "After great pain, a formal feeling comes –",
      "titleData": {
        "titleWordCount": 8,
        "titleCharacterLength": 42
      }
    },
    "textData": {
      "textLineCount": 13,
      "textWordCount": 83,
      "textCharacterLength": 366
    },
    "textParagraphs": [
      {
        "paragraphIndex": 0,
        "paragraphData": {
          "paragraphLineCount": 4,
          "paragraphWordCount": 29,
          "paragraphCharacterLength": 168
        },
        "paragraphLines": [
          {
            "lineIndex": 0,
            "lineText": "After great pain, a formal feeling comes –",
            "lineData": {
              "lineWordCount": 8,
              "lineCharacterLength": 42
            }
          },
          {
            "lineIndex": 1,
            "lineText": "The Nerves sit ceremonious, like Tombs –",
            "lineData": {
              "lineWordCount": 7,
              "lineCharacterLength": 40
            }
          }
          // {...}
        ]
      },
      // { ... },
    ]
  }
}
```

## License

MIT