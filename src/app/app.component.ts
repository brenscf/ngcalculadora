import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
  <app-teclado></app-teclado>
  <app-sobre></app-sobre>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'NG-CALCULADORA';
}
