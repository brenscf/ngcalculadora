import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent {
  resultado: string = '';
  operacaoAtual: string = '';
  valorAnterior: number | null = null;

  adicionarNumero(numero: string) {
    this.resultado += numero;
  }

  operacao(operador: string) {
    if (this.resultado !== '') {
      this.valorAnterior = parseFloat(this.resultado);
      this.operacaoAtual = operador;
      this.resultado = '';
    }
  }

  calcular() {
    if (this.valorAnterior !== null && this.operacaoAtual !== '' && this.resultado !== '') {
      const valorAtual = parseFloat(this.resultado);
      switch (this.operacaoAtual) {
        case '+':
          this.resultado = (this.valorAnterior + valorAtual).toString();
          break;
        case '-':
          this.resultado = (this.valorAnterior - valorAtual).toString();
          break;
        case '*':
          this.resultado = (this.valorAnterior * valorAtual).toString();
          break;
        case '/':
          this.resultado = (this.valorAnterior / valorAtual).toString();
          break;
      }
      this.valorAnterior = null;
      this.operacaoAtual = '';
    }
  }

  limpar() {
    this.resultado = '';
    this.valorAnterior = null;
    this.operacaoAtual = '';
  }
}
