# paragraphs-lines

The goal is to build this out more with some plans I have in mind. At present, this NPM module exports a function that takes a text input `textInput`. 

It is written in ESM format.

Ex:

```js
import { paragraphsLines } from 'paragraphs-lines';

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

please write ESM module format JS script 

it takes text as input and splits it into paragraphs and lines within paragraphs and reformats this data into a JSON object that includes metadata along with the original text.

it takes the first line and uses it for a title object

## Text

thus, if "text input" is,

```txt
They flee from me that sometime did me seek
With naked foot, stalking in my chamber.
I have seen them gentle, tame, and meek,
That now are wild and do not remember
That sometime they put themself in danger
To take bread at my hand; and now they range,
Busily seeking with a continual change.

Thanked be fortune it hath been otherwise
Twenty times better; but once in special,
In thin array after a pleasant guise,
When her loose gown from her shoulders did fall,
And she me caught in her arms long and small;
Therewithall sweetly did me kiss
And softly said, “Dear heart, how like you this?”

It was no dream: I lay broad waking.
But all is turned thorough my gentleness
Into a strange fashion of forsaking;
And I have leave to go of her goodness,
And she also, to use newfangleness.
But since that I so kindly am served
I would fain know what she hath deserved.
```

```json
{
    "text":
    {
        "textTitle":
        {
            "titleText": "They flee from me that sometime did me seek",
            "titleData":
            {
                "titleWordCount": 9,
                "titleCharacterLength": 43
            }
        },
        "textData":
        {
            "textLineCount": 23,
            "textWordCount": 161,
            "textCharacterLength": 836
        },
        "textParagraphs": [
        {
            "paragraphIndex": 0,
            "paragraphData":
            {
                "paragraphLineCount": 7,
                "paragraphWordCount": 55,
                "paragraphCharacterLength": 291
            },
            "paragraphLines": [
            {
                "lineIndex": 0,
                "lineText": "They flee from me that sometime did me seek",
                "lineData":
                {
                    "lineIndex": 0,
                    "lineWordCount": 9,
                    "lineCharacterLength": 43
                }
            },
            {
                "lineIndex": 0,
                "lineText": "With naked foot, stalking in my chamber.",
                "lineData":
                {
                    "lineIndex": 1,
                    "lineWordCount": 7,
                    "lineCharacterLength": 40
                }
            },
            {
                "lineIndex": 2,
                "lineText": "I have seen them gentle, tame, and meek,",
                "lineData":
                {
                    "lineWordCount": 8,
                    "lineCharacterLength": 40
                }
            },
            {
                "lineIndex": 3,
                "lineText": "That now are wild and do not remember",
                "lineData":
                {
                    "lineWordCount": 8,
                    "lineCharacterLength": 37
                }
            },
            {
                "lineIndex": 4,
                "lineText": "That sometime they put themself in danger",
                "lineData":
                {
                    "lineWordCount": 7,
                    "lineCharacterLength": 41
                }
            },
            {
                "lineIndex": 5,
                "lineText": "To take bread at my hand; and now they range,",
                "lineData":
                {
                    "lineWordCount": 10,
                    "lineCharacterLength": 45
                }
            },
            {
                "lineIndex": 6,
                "lineText": "Busily seeking with a continual change.",
                "lineData":
                {
                    "lineWordCount": 6,
                    "lineCharacterLength": 39
                }
            }]
        },
        {
            "paragraphIndex": 1,
            "paragraphData":
            {
                "paragraphLineCount": 7,
                "paragraphWordCount": 54,
                "paragraphCharacterLength": 299
            },
            "paragraphLines": [
            {
                "lineIndex": 0,
                "lineText": "Thanked be fortune it hath been otherwise",
                "lineData":
                {
                    "lineIndex": 0,
                    "lineWordCount": 7,
                    "lineCharacterLength": 41
                }
            },
            {
                "lineIndex": 0,
                "lineText": "Twenty times better; but once in special,",
                "lineData":
                {
                    "lineIndex": 1,
                    "lineWordCount": 7,
                    "lineCharacterLength": 41
                }
            },
            {
                "lineIndex": 2,
                "lineText": "In thin array after a pleasant guise,",
                "lineData":
                {
                    "lineWordCount": 7,
                    "lineCharacterLength": 37
                }
            },
            {
                "lineIndex": 3,
                "lineText": "When her loose gown from her shoulders did fall,",
                "lineData":
                {
                    "lineWordCount": 9,
                    "lineCharacterLength": 48
                }
            },
            {
                "lineIndex": 4,
                "lineText": "And she me caught in her arms long and small;",
                "lineData":
                {
                    "lineWordCount": 10,
                    "lineCharacterLength": 45
                }
            },
            {
                "lineIndex": 5,
                "lineText": "Therewithall sweetly did me kiss",
                "lineData":
                {
                    "lineWordCount": 5,
                    "lineCharacterLength": 32
                }
            },
            {
                "lineIndex": 6,
                "lineText": "And softly said, “Dear heart, how like you this?”",
                "lineData":
                {
                    "lineWordCount": 9,
                    "lineCharacterLength": 49
                }
            }]
        },
        {
            "paragraphIndex": 2,
            "paragraphData":
            {
                "paragraphLineCount": 7,
                "paragraphWordCount": 52,
                "paragraphCharacterLength": 269
            },
            "paragraphLines": [
            {
                "lineIndex": 0,
                "lineText": "It was no dream: I lay broad waking.",
                "lineData":
                {
                    "lineIndex": 0,
                    "lineWordCount": 8,
                    "lineCharacterLength": 36
                }
            },
            {
                "lineIndex": 0,
                "lineText": "But all is turned thorough my gentleness",
                "lineData":
                {
                    "lineIndex": 1,
                    "lineWordCount": 7,
                    "lineCharacterLength": 40
                }
            },
            {
                "lineIndex": 2,
                "lineText": "Into a strange fashion of forsaking;",
                "lineData":
                {
                    "lineWordCount": 6,
                    "lineCharacterLength": 36
                }
            },
            {
                "lineIndex": 3,
                "lineText": "And I have leave to go of her goodness,",
                "lineData":
                {
                    "lineWordCount": 9,
                    "lineCharacterLength": 39
                }
            },
            {
                "lineIndex": 4,
                "lineText": "And she also, to use newfangleness.",
                "lineData":
                {
                    "lineWordCount": 6,
                    "lineCharacterLength": 35
                }
            },
            {
                "lineIndex": 5,
                "lineText": "But since that I so kindly am served",
                "lineData":
                {
                    "lineWordCount": 8,
                    "lineCharacterLength": 36
                }
            },
            {
                "lineIndex": 6,
                "lineText": "I would fain know what she hath deserved.",
                "lineData":
                {
                    "lineWordCount": 8,
                    "lineCharacterLength": 41
                }
            }]
        }]
    }
}
```

## Title

the title will go through the "title process". the "title process" takes the title string and 

it looks for a title in the text input by checking whether there is a single line followed by 2 newlines. we will define this in the context of this conversation as a "standard title". If a "standard title" is present, 

if single line followed by 2 newlines is not present, it takes the first line and puts it as the title, analyzing and returning the data on the title in the same way as it would a single line followed by 2 newlines, but includes this title in the `.textParagraphs` object, so it is in the total word count, counted as a line, etc.

all this is exported as function `paragraphsLines()` from npm module `paragraphs-lines`

