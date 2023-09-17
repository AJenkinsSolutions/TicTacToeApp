import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    
     <!-- //String intrepolation -->
     <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
    
  `,
  styles: [ 'button {width: 100%; height: 100%; font-size: 5em !important; margin: 0; padding: 0; border: none; }'
  ]
})
export class SquareComponent {
  
  @Input() value: 'X' | 'O';
}
