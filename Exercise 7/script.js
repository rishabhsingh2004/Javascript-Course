class PasswordGenerator {
  constructor(displayElement, copyMsgElement) {
    this.displayElement = displayElement;
    this.copyMsgElement = copyMsgElement;

    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    this.numbers = "0123456789";
    this.symbols = "!@#$%^&*()_+{}[]<>?";
  }

  generate() {
    const strength = document.getElementById("strength").value;
    let length = 8;
    let chars = this.letters + this.numbers;

    if (strength === "strong") {
      length = 12;
      chars += this.symbols;
    } else if (strength === "super") {
      length = 16;
      chars += this.symbols;
    }

    // Ensure one of each type
    let oneLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
    let oneNumber = this.numbers[Math.floor(Math.random() * this.numbers.length)];
    let oneSymbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];

    let password = oneLetter + oneNumber + oneSymbol;

    for (let i = 3; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    password = this.shuffle(password);
    this.displayElement.textContent = password;
    this.copyMsgElement.textContent = "";
  }

  copy() {
    const password = this.displayElement.textContent;
    navigator.clipboard.writeText(password).then(() => {
      this.copyMsgElement.textContent = " Password copied!";
      setTimeout(() => {
        this.copyMsgElement.textContent = "";
      }, 2000);
    }).catch(() => {
      this.copyMsgElement.textContent = " Failed to copy.";
    });
  }

  shuffle(str) {
    return [...str].sort(() => Math.random() - 0.5).join('');
  }
}

const passwordGenerator = new PasswordGenerator(
  document.getElementById("password"),
  document.getElementById("copyMsg")
);
