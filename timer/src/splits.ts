let splitOffset: number = 70;
let currentSplit: number = 0;
let split1: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
let split2: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
let split3: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
let split4: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
let split5: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
let split6: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
let split7: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
let split8: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
let split9: { active: boolean; totalStr: string; offset: number } = {
  active: false,
  totalStr: "",
  offset: 0,
};
function splitDraw() {
  if (isButtonEnabled("Split")) {
    if (split1.active == false) {
      split1.active = true;
    } else if (split2.active == false) {
      split2.active = true;
    } else if (split3.active == false) {
      split3.active = true;
    } else if (split4.active == false) {
      split4.active = true;
    } else if (split5.active == false) {
      split5.active = true;
    } else if (split6.active == false) {
      split6.active = true;
    } else if (split7.active == false) {
      split7.active = true;
    } else if (split8.active == false) {
      split8.active = true;
    } else if (split9.active == false) {
      split9.active = true;
    }
    disableButton("Split");
    splitOffset = splitOffset + 35;
    currentSplit++;
  }
  if (split1.active == true) {
    if (split1.totalStr == "") {
      split1.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split1.offset = splitOffset;
    }
    text(split1.totalStr, w / 2, h / 2 - split1.offset);
  }
  if (split2.active == true) {
    if (split2.totalStr == "") {
      split2.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split2.offset = splitOffset;
    }
    text(split2.totalStr, w / 2, h / 2 - split2.offset);
  }
  if (split3.active == true) {
    if (split3.totalStr == "") {
      split3.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split3.offset = splitOffset;
    }
    text(split3.totalStr, w / 2, h / 2 - split3.offset);
  }
  if (split4.active == true) {
    if (split4.totalStr == "") {
      split4.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split4.offset = splitOffset;
    }
    text(split4.totalStr, w / 2, h / 2 - split4.offset);
  }
  if (split5.active == true) {
    if (split5.totalStr == "") {
      split5.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split5.offset = splitOffset;
    }
    text(split5.totalStr, w / 2, h / 2 - split5.offset);
  }
  if (split6.active == true) {
    if (split6.totalStr == "") {
      split6.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split6.offset = splitOffset;
    }
    text(split6.totalStr, w / 2, h / 2 - split6.offset);
  }
  if (split7.active == true) {
    if (split7.totalStr == "") {
      split7.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split7.offset = splitOffset;
    }
    text(split7.totalStr, w / 2, h / 2 - split7.offset);
  }
  if (split8.active == true) {
    if (split8.totalStr == "") {
      split8.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split8.offset = splitOffset;
    }
    text(split8.totalStr, w / 2, h / 2 - split8.offset);
  }
  if (split9.active == true) {
    if (split9.totalStr == "") {
      split9.totalStr =
        "Split - " + currentSplit + ". " + display.totalStr + " -";
      split9.offset = splitOffset;
    }
    text(split9.totalStr, w / 2, h / 2 - split9.offset);
  }
}

function splitSetup() {}

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
