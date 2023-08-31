//* Fixed Vector SoundFile crash door oudere versie van p5 te gebruiken!
//*   npm uninstall @types/p5
//*   npm install @types/p5@1.4.0

//  variables
let running: boolean;
let defaultSettingsJSON: any;
let backgroundColor: RGB;
let storageValue: number[] = [];
let w = window.innerWidth;
let h = window.innerHeight;

//  objects
let display: {
  totalStr: string;
  min: number;
  sec: number;
  milisec: number;
  minStr: string;
  secStr: string;
  milisecStr: string;
};
let settings: {
  size: number;
  letterColorType: colorTypes;
  secColor: Color;
  minColor: Color;
  milisecColor: Color;
};
let defaultSettings: {
  size: number;
  letterColorType: colorTypes;
  secColor: Color;
  minColor: Color;
  milisecColor: Color;
  startMin: number;
  startSec: number;
  startMilisec: number;
};

//  typescript types
type extraNumber = number | null;
type extraString = string | null;
type extraBoolean = boolean | null;
type extraBigint = bigint | null;
//* color
type RGB = `rgb(${number},${number},${number})`;
type RGBA = `rgba(${number},${number},${number},${number})`;
type HEX = `#${string}`;
type colorTypes = "RGB" | "RGBA" | "HEX";
type Color = RGB | RGBA | HEX;

function timerPreload() {
  defaultSettingsJSON = loadJSON("instellingen.json");
}

function timerSetup() {
  defaultSettings = {
    size: defaultSettingsJSON["grootte"],
    letterColorType: defaultSettingsJSON["Kleuren"]["KleurType"],
    startMin: defaultSettingsJSON["stopwatchBeginWaardes"]["minuut"],
    startSec: defaultSettingsJSON["stopwatchBeginWaardes"]["seconde"],
    startMilisec: defaultSettingsJSON["stopwatchBeginWaardes"]["miliseconde"],
    secColor: rgb(
      defaultSettingsJSON["Kleuren"]["secondeKleur"]["r"],
      defaultSettingsJSON["Kleuren"]["secondeKleur"]["g"],
      defaultSettingsJSON["Kleuren"]["secondeKleur"]["b"]
    ),
    minColor: rgb(
      defaultSettingsJSON["Kleuren"]["minuutKleur"]["r"],
      defaultSettingsJSON["Kleuren"]["minuutKleur"]["g"],
      defaultSettingsJSON["Kleuren"]["minuutKleur"]["b"]
    ),
    milisecColor: rgb(
      defaultSettingsJSON["Kleuren"]["milisecondeKleur"]["r"],
      defaultSettingsJSON["Kleuren"]["milisecondeKleur"]["g"],
      defaultSettingsJSON["Kleuren"]["milisecondeKleur"]["b"]
    ),
  };
  display = {
    totalStr: "loading",
    min: defaultSettings.startMin,
    sec: defaultSettings.startSec,
    milisec: defaultSettings.startMilisec,
    minStr: "0" + defaultSettings.startMin.toString(),
    secStr: "0" + defaultSettings.startSec.toString(),
    milisecStr: "0" + defaultSettings.startMilisec.toString(),
  };
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  //  background
  backgroundColor = rgb(181, 121, 16);
  let decodedBackgroundColorObject = rgbDecode(backgroundColor);
  background(
    decodedBackgroundColorObject.r,
    decodedBackgroundColorObject.g,
    decodedBackgroundColorObject.b
  );
  settings = defaultSettings;
}

function timerDraw() {
  const canvas = {
    centerX: w / 2,
    centerY: h / 2,
  };
  if (isButtonEnabled("Start/Pause")) {
    running = true;
  } else {
    running = false;
  }
  if (isButtonEnabled("Reset")) {
    resetSplits();
    running = false;
    display = {
      totalStr: "0:0:0",
      min: 0,
      sec: 0,
      milisec: 0,
      minStr: "00",
      secStr: "00",
      milisecStr: "00",
    };
    disableButton("Reset");
  }

  if (running == true) {
    if (
      display.milisec >= 0 &&
      display.milisec < 10 &&
      display.milisec.toString().length == 1
    ) {
      display.milisecStr = "0" + display.milisec.toString();
    } else {
      display.milisecStr = display.milisec.toString();
    }
    display.milisec++;
    if (display.milisec > 99) {
      display.sec++;
      display.milisec = 0;
    }
    if (
      display.sec >= 0 &&
      display.sec < 10 &&
      display.sec.toString().length == 1
    ) {
      display.secStr = "0" + display.sec.toString();
    } else {
      display.secStr = display.sec.toString();
    }
    if (display.sec > 59) {
      display.min++;
      display.sec = 0;
    }
    if (
      display.min >= 0 &&
      display.min < 10 &&
      display.min.toString().length == 1
    ) {
      display.minStr = "0" + display.min.toString();
    } else {
      display.minStr = display.min.toString();
    }
    if (display.min > 98) {
      display.min = 99;
      throw new Error("Overflow Error");
    }
  }
  clear(0, 0, 0, 0);
  let decodedBackgroundColorObject = rgbDecode(backgroundColor);
  background(
    decodedBackgroundColorObject.r,
    decodedBackgroundColorObject.g,
    decodedBackgroundColorObject.b
  );
  let timerOffset: number =
    w * 0.091145833333333333333333333333333333333333333333333333;
  display.totalStr =
    display.min.toString() +
    ":" +
    display.sec.toString() +
    ":" +
    display.milisec.toString();
  textSize(settings.size);
  textAlign(CENTER);
  let textColorAll = rgbDecode(settings.secColor);
  if (
    settings.milisecColor == settings.minColor &&
    settings.minColor == settings.secColor
  ) {
    fill(
      rgbDecode(settings.secColor).r,
      rgbDecode(settings.secColor).g,
      rgbDecode(settings.secColor).b
    );
    text(display.totalStr, canvas.centerX, canvas.centerY);
  } else {
    fill(
      rgbDecode(settings.minColor).r,
      rgbDecode(settings.minColor).g,
      rgbDecode(settings.minColor).b
    );
    text(display.minStr + ":", canvas.centerX - timerOffset, canvas.centerY);
    fill(
      rgbDecode(settings.secColor).r,
      rgbDecode(settings.secColor).g,
      rgbDecode(settings.secColor).b
    );
    text(
      "          " + display.secStr + ":",
      canvas.centerX - timerOffset,
      canvas.centerY
    );
    fill(
      rgbDecode(settings.milisecColor).r,
      rgbDecode(settings.milisecColor).g,
      rgbDecode(settings.milisecColor).b
    );
    text(
      "                   " + display.milisecStr,
      canvas.centerX - timerOffset,
      canvas.centerY
    );
  }
  textSize(20);
  textAlign(CENTER, CENTER);
  for (const button of buttons) {
    fill(button.isEnabled ? color(14, 153, 25) : color(173, 29, 16));
    rect(button.x, button.y, button.w, button.h);
    fill(0);
    text(button.label, button.x + button.w / 2, button.y + button.h / 2);
  }
}

function rgb(r: number, g: number, b: number): RGB {
  return `rgb(${r},${g},${b})`;
}

function rgbDecode(input: string): {
  r: number;
  g: number;
  b: number;
} {
  const matches = input.match(/^rgb\(([\d.]+),([\d.]+),([\d.]+)\)$/);
  if (!matches) {
    throw new Error(
      "Oepsie de input van RGBdecode is niet helemaal goed, gebruik rgbDecode() wel goed A.U.B!"
    );
  }
  return {
    r: parseFloat(matches[1]),
    g: parseFloat(matches[2]),
    b: parseFloat(matches[3]),
  };
}

function storeValue(value: number, tag: string): void {
  storageValue[convertStringToNumber(tag)] = value;
  console.log(
    'Stored the value "' +
      value +
      '" with tag "' +
      tag +
      '" succesfully in array "storageValue" on location "' +
      convertStringToNumber(tag) +
      '".'
  );
}

function getValue(tag: string): number {
  if (storageValue[convertStringToNumber(tag)] == undefined) {
    throw new Error(
      'getValue() function failed because the item with tag "' +
        tag +
        '" did not exist, and is never defined with the storeValue() function'
    );
  } else {
    return storageValue[convertStringToNumber(tag)];
  }
}

function convertStringToNumber(inputString: string): number {
  let result = 0;
  const stringLength = inputString.length;
  for (let i = 0; i < stringLength; i++) {
    const charCode = inputString.charCodeAt(i) - 96;
    result += charCode * Math.pow(26, stringLength - i - 1);
  }
  return result;
}

function convertNumberToString(inputNumber: number): string {
  let result = "";
  let remainingValue = inputNumber - 1;
  while (remainingValue >= 0) {
    const charCode = (remainingValue % 26) + 97;
    result = String.fromCharCode(charCode) + result;
    remainingValue = Math.floor(remainingValue / 26) - 1;
  }
  return result;
}
