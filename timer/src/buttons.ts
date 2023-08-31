type Button = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  isEnabled: boolean;
};

const buttons: Button[] = [];

function buttonSetup() {
  // for (let i = 0; i < 10; i++) {
  //   const button: Button = {
  //     x: 20,
  //     y: 40 * i + 20,
  //     w: 100,
  //     h: 30,
  //     label: `Button ${i + 1}`,
  //     isEnabled: true,
  //   };
  //   buttons.push(button);
  // }
  const start: Button = {
    x: 20,
    y: 40,
    w: 150,
    h: 30,
    label: "Start/Pause",
    isEnabled: false,
  };
  buttons.push(start);
  const reset: Button = {
    x: 20,
    y: 80,
    w: 150,
    h: 30,
    label: "Reset",
    isEnabled: false,
  };
  buttons.push(reset);
  const split: Button = {
    x: 20,
    y: 120,
    w: 150,
    h: 30,
    label: "Split",
    isEnabled: false,
  };
  buttons.push(split);
  //* const newButton.x = 'lastButton' + 40
}

function isButtonEnabled(label: string): boolean {
  const button = buttons.find((button) => button.label === label);
  if (button) {
    return button.isEnabled;
  }
  return false;
}

function enableButton(label: string) {
  const button = buttons.find((button) => button.label === label);
  if (button) {
    button.isEnabled = true;
  }
}

function disableButton(label: string) {
  const button = buttons.find((button) => button.label === label);
  if (button) {
    button.isEnabled = false;
  }
}

function buttonMousePressed() {
  for (const button of buttons) {
    if (
      mouseX >= button.x &&
      mouseX <= button.x + button.w &&
      mouseY >= button.y &&
      mouseY <= button.y + button.h
    ) {
      button.isEnabled = !button.isEnabled;
    }
  }
}
