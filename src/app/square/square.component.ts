import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="still" *ngIf="!value">{{ value }}</button>
    <button class="x" *ngIf="value == 'X'">{{ value }}</button>
    <button class="o" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  

  @Input() value!: string;

}