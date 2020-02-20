import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    if (isNaN(parseInt(value)) || parseInt(value) > 99 || parseInt(value) < 0) {
      this.length = 0;
    } else {
      this.length = parseInt(value);
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const NUMBERS = '0123456789';
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    const SYMBOLS = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += LETTERS;
    }
    if (this.includeNumbers) {
      validChars += NUMBERS;
    }
    if (this.includeSymbols) {
      validChars += SYMBOLS;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
