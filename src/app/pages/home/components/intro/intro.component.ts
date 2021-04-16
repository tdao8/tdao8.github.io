import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  typewriterText1 = 'I\'m Truong';
  typewriterText2 = 'I\'m A Web Developer';
  typewriterText = this.typewriterText1;
  swap = false;
  typewriterDisplay = '';

  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this);
  }

  typingCallback(that): void {
    const totalLength = that.typewriterText.length;
    const currentLength = that.typewriterDisplay.length;
    if (currentLength < totalLength) {
      that.typewriterDisplay += that.typewriterText[currentLength];
      setTimeout(that.typingCallback, 50, that);
    } else {
      timer(4000).subscribe(x => {
        if (!this.swap) {
          that.typewriterText = that.typewriterText2;
        } else {
          that.typewriterText = that.typewriterText1;
        }

        this.swap = !this.swap;
        that.typingBackspaceCallback(that);
      });
    }
  }

  typingBackspaceCallback(that): void {
    const totalLength = that.typewriterText.length;
    const currentLength = that.typewriterDisplay.length;
    const wave = 2;
    if (currentLength >= wave) {
      that.typewriterDisplay = that.typewriterDisplay.substring(0, currentLength - wave);
      setTimeout(that.typingBackspaceCallback, 35, that);
    } else {
      that.typingCallback(that);
    }
  }

}
