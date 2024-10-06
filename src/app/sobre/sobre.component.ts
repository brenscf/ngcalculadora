import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  screenSize: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    // Verifica se está no navegador antes de acessar o objeto window
    if (isPlatformBrowser(this.platformId)) {
      this.screenSize = window.innerWidth;  // Inicializa o tamanho da tela
    }
  }

  // Listener para redimensionar apenas se for no navegador
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenSize = window.innerWidth;
    }
  }
}
