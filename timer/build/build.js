"use strict";
var buttons = [];
function buttonSetup() {
    var start = {
        x: 20,
        y: 40,
        w: 150,
        h: 30,
        label: "Start/Pause",
        isEnabled: false,
    };
    buttons.push(start);
    var reset = {
        x: 20,
        y: 80,
        w: 150,
        h: 30,
        label: "Reset",
        isEnabled: false,
    };
    buttons.push(reset);
    var split = {
        x: 20,
        y: 120,
        w: 150,
        h: 30,
        label: "Split",
        isEnabled: false,
    };
    buttons.push(split);
}
function isButtonEnabled(label) {
    var button = buttons.find(function (button) { return button.label === label; });
    if (button) {
        return button.isEnabled;
    }
    return false;
}
function enableButton(label) {
    var button = buttons.find(function (button) { return button.label === label; });
    if (button) {
        button.isEnabled = true;
    }
}
function disableButton(label) {
    var button = buttons.find(function (button) { return button.label === label; });
    if (button) {
        button.isEnabled = false;
    }
}
function buttonMousePressed() {
    for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
        var button = buttons_1[_i];
        if (mouseX >= button.x &&
            mouseX <= button.x + button.w &&
            mouseY >= button.y &&
            mouseY <= button.y + button.h) {
            button.isEnabled = !button.isEnabled;
        }
    }
}
function draw() {
    timerDraw();
    splitDraw();
}
function setup() {
    buttonSetup();
    timerSetup();
    splitSetup();
}
function mousePressed() {
    buttonMousePressed();
}
function preload() {
    timerPreload();
}
var splitOffset = 70;
var currentSplit = 0;
var split1 = { active: false, totalStr: "", offset: 0 };
var split2 = { active: false, totalStr: "", offset: 0 };
var split3 = { active: false, totalStr: "", offset: 0 };
var split4 = { active: false, totalStr: "", offset: 0 };
var split5 = { active: false, totalStr: "", offset: 0 };
var split6 = { active: false, totalStr: "", offset: 0 };
var split7 = { active: false, totalStr: "", offset: 0 };
var split8 = { active: false, totalStr: "", offset: 0 };
var split9 = { active: false, totalStr: "", offset: 0 };
function splitDraw() {
    if (isButtonEnabled("Split")) {
        if (split1.active == false) {
            split1.active = true;
        }
        else if (split2.active == false) {
            split2.active = true;
        }
        else if (split3.active == false) {
            split3.active = true;
        }
        else if (split4.active == false) {
            split4.active = true;
        }
        else if (split5.active == false) {
            split5.active = true;
        }
        else if (split6.active == false) {
            split6.active = true;
        }
        else if (split7.active == false) {
            split7.active = true;
        }
        else if (split8.active == false) {
            split8.active = true;
        }
        else if (split9.active == false) {
            split9.active = true;
        }
        disableButton("Split");
        splitOffset = splitOffset + 35;
        currentSplit++;
    }
    if (split1.active == true) {
        if (split1.totalStr == "") {
            split1.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split1.offset = splitOffset;
        }
        text(split1.totalStr, w / 2, h / 2 - split1.offset);
    }
    if (split2.active == true) {
        if (split2.totalStr == "") {
            split2.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split2.offset = splitOffset;
        }
        text(split2.totalStr, w / 2, h / 2 - split2.offset);
    }
    if (split3.active == true) {
        if (split3.totalStr == "") {
            split3.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split3.offset = splitOffset;
        }
        text(split3.totalStr, w / 2, h / 2 - split3.offset);
    }
    if (split4.active == true) {
        if (split4.totalStr == "") {
            split4.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split4.offset = splitOffset;
        }
        text(split4.totalStr, w / 2, h / 2 - split4.offset);
    }
    if (split5.active == true) {
        if (split5.totalStr == "") {
            split5.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split5.offset = splitOffset;
        }
        text(split5.totalStr, w / 2, h / 2 - split5.offset);
    }
    if (split6.active == true) {
        if (split6.totalStr == "") {
            split6.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split6.offset = splitOffset;
        }
        text(split6.totalStr, w / 2, h / 2 - split6.offset);
    }
    if (split7.active == true) {
        if (split7.totalStr == "") {
            split7.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split7.offset = splitOffset;
        }
        text(split7.totalStr, w / 2, h / 2 - split7.offset);
    }
    if (split8.active == true) {
        if (split8.totalStr == "") {
            split8.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split8.offset = splitOffset;
        }
        text(split8.totalStr, w / 2, h / 2 - split8.offset);
    }
    if (split9.active == true) {
        if (split9.totalStr == "") {
            split9.totalStr = "Split - " + currentSplit + ". " + display.totalStr + " -";
            split9.offset = splitOffset;
        }
        text(split9.totalStr, w / 2, h / 2 - split9.offset);
    }
}
function splitSetup() { }
function resetSplits() {
    split1 = { active: false, totalStr: "", offset: 0 };
    split2 = { active: false, totalStr: "", offset: 0 };
    split3 = { active: false, totalStr: "", offset: 0 };
    split4 = { active: false, totalStr: "", offset: 0 };
    split5 = { active: false, totalStr: "", offset: 0 };
    split6 = { active: false, totalStr: "", offset: 0 };
    split7 = { active: false, totalStr: "", offset: 0 };
    split8 = { active: false, totalStr: "", offset: 0 };
    split9 = { active: false, totalStr: "", offset: 0 };
    currentSplit = 0;
    splitOffset = 70;
}
var running;
var defaultSettingsJSON;
var backgroundColor;
var storageValue = [];
var w = window.innerWidth;
var h = window.innerHeight;
var display;
var settings;
var defaultSettings;
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
        secColor: rgb(defaultSettingsJSON["Kleuren"]["secondeKleur"]["r"], defaultSettingsJSON["Kleuren"]["secondeKleur"]["g"], defaultSettingsJSON["Kleuren"]["secondeKleur"]["b"]),
        minColor: rgb(defaultSettingsJSON["Kleuren"]["minuutKleur"]["r"], defaultSettingsJSON["Kleuren"]["minuutKleur"]["g"], defaultSettingsJSON["Kleuren"]["minuutKleur"]["b"]),
        milisecColor: rgb(defaultSettingsJSON["Kleuren"]["milisecondeKleur"]["r"], defaultSettingsJSON["Kleuren"]["milisecondeKleur"]["g"], defaultSettingsJSON["Kleuren"]["milisecondeKleur"]["b"])
    };
    display = {
        totalStr: "loading",
        min: defaultSettings.startMin,
        sec: defaultSettings.startSec,
        milisec: defaultSettings.startMilisec,
        minStr: "0" + defaultSettings.startMin.toString(),
        secStr: "0" + defaultSettings.startSec.toString(),
        milisecStr: "0" + defaultSettings.startMilisec.toString()
    };
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    backgroundColor = rgb(181, 121, 16);
    var decodedBackgroundColorObject = rgbDecode(backgroundColor);
    background(decodedBackgroundColorObject.r, decodedBackgroundColorObject.g, decodedBackgroundColorObject.b);
    settings = defaultSettings;
}
function timerDraw() {
    var canvas = {
        centerX: w / 2,
        centerY: h / 2
    };
    if (isButtonEnabled("Start/Pause")) {
        running = true;
    }
    else {
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
        if (display.milisec >= 0 && display.milisec < 10 && display.milisec.toString().length == 1) {
            display.milisecStr = "0" + display.milisec.toString();
        }
        else {
            display.milisecStr = display.milisec.toString();
        }
        display.milisec++;
        if (display.milisec > 99) {
            display.sec++;
            display.milisec = 0;
        }
        if (display.sec >= 0 && display.sec < 10 && display.sec.toString().length == 1) {
            display.secStr = "0" + display.sec.toString();
        }
        else {
            display.secStr = display.sec.toString();
        }
        if (display.sec > 59) {
            display.min++;
            display.sec = 0;
        }
        if (display.min >= 0 && display.min < 10 && display.min.toString().length == 1) {
            display.minStr = "0" + display.min.toString();
        }
        else {
            display.minStr = display.min.toString();
        }
        if (display.min > 98) {
            display.min = 99;
            throw new Error('Overflow Error');
        }
    }
    clear(0, 0, 0, 0);
    var decodedBackgroundColorObject = rgbDecode(backgroundColor);
    background(decodedBackgroundColorObject.r, decodedBackgroundColorObject.g, decodedBackgroundColorObject.b);
    var timerOffset = w * 0.091145833333333333333333333333333333333333333333333333;
    display.totalStr = display.min.toString() + ":" + display.sec.toString() + ":" + display.milisec.toString();
    textSize(settings.size);
    textAlign(CENTER);
    var textColorAll = rgbDecode(settings.secColor);
    if (settings.milisecColor == settings.minColor && settings.minColor == settings.secColor) {
        fill(rgbDecode(settings.secColor).r, rgbDecode(settings.secColor).g, rgbDecode(settings.secColor).b);
        text(display.totalStr, canvas.centerX, canvas.centerY);
    }
    else {
        fill(rgbDecode(settings.minColor).r, rgbDecode(settings.minColor).g, rgbDecode(settings.minColor).b);
        text(display.minStr + ":", canvas.centerX - timerOffset, canvas.centerY);
        fill(rgbDecode(settings.secColor).r, rgbDecode(settings.secColor).g, rgbDecode(settings.secColor).b);
        text("          " + display.secStr + ":", canvas.centerX - timerOffset, canvas.centerY);
        fill(rgbDecode(settings.milisecColor).r, rgbDecode(settings.milisecColor).g, rgbDecode(settings.milisecColor).b);
        text("                   " + display.milisecStr, canvas.centerX - timerOffset, canvas.centerY);
    }
    textSize(20);
    textAlign(CENTER, CENTER);
    for (var _i = 0, buttons_2 = buttons; _i < buttons_2.length; _i++) {
        var button = buttons_2[_i];
        fill(button.isEnabled ? color(14, 153, 25) : color(173, 29, 16));
        rect(button.x, button.y, button.w, button.h);
        fill(0);
        text(button.label, button.x + button.w / 2, button.y + button.h / 2);
    }
}
function rgb(r, g, b) {
    return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
}
function rgbDecode(input) {
    var matches = input.match(/^rgb\(([\d.]+),([\d.]+),([\d.]+)\)$/);
    if (!matches) {
        throw new Error('Oepsie de input van RGBdecode is niet helemaal goed, gebruik rgbDecode() wel goed A.U.B!');
    }
    return {
        r: parseFloat(matches[1]),
        g: parseFloat(matches[2]),
        b: parseFloat(matches[3])
    };
}
function storeValue(value, tag) {
    storageValue[convertStringToNumber(tag)] = value;
    console.log('Stored the value "' + value + '" with tag "' + tag +
        '" succesfully in array "storageValue" on location "' + convertStringToNumber(tag) + '".');
}
function getValue(tag) {
    if (storageValue[convertStringToNumber(tag)] == undefined) {
        throw new Error('getValue() function failed because the item with tag "' + tag +
            '" did not exist, and is never defined with the storeValue() function');
    }
    else {
        return storageValue[convertStringToNumber(tag)];
    }
}
function convertStringToNumber(inputString) {
    var result = 0;
    var stringLength = inputString.length;
    for (var i = 0; i < stringLength; i++) {
        var charCode = inputString.charCodeAt(i) - 96;
        result += charCode * Math.pow(26, stringLength - i - 1);
    }
    return result;
}
function convertNumberToString(inputNumber) {
    var result = "";
    var remainingValue = inputNumber - 1;
    while (remainingValue >= 0) {
        var charCode = remainingValue % 26 + 97;
        result = String.fromCharCode(charCode) + result;
        remainingValue = Math.floor(remainingValue / 26) - 1;
    }
    return result;
}
//# sourceMappingURL=build.js.map