import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor : string = '';
  visorResultado : string = '0';
  operacao! : number;
  valor1! : number;
  valor2! : number;
  ButtonClicked: number = -1;

  constructor() {}

  adicionarNumero(valor : string) {
    if (valor === '.' && this.visorResultado.includes('.')) {
      return;
    }
    if((this.visorResultado.length === 1) && (this.visorResultado === '0') && (valor !== '.')) {
      this.visor += valor;
      this.visorResultado = valor;
    }else{
      this.visor += valor;
      this.visorResultado += valor;
    }
  }

  deletar() {
    this.visorResultado = '0';
    this.visor = '';
    this.ButtonClicked = -1;
  }

  adicionarOperacao(valor : number){
    this.valor1 = +this.visorResultado;
    this.operacao = valor;
    console.log(this.valor1);
    this.visorResultado = '0';
    this.ButtonClicked = -1;
    console.log(valor);
    if(valor === 0) {
      this.visor += '+';
    } else if(valor === 1) {
      this.visor += '-';
    } else if(valor === 2) {
      this.visor += '*';
    } else if(valor === 3) {
      this.visor += '÷';
    }
  }

  calcular() {
    this.valor2 = +this.visorResultado;
    switch(this.operacao) {
      case 0: {
        this.visorResultado = "" + (this.valor1 + this.valor2);
        console.log(this.valor1);
        break;
      }
      case 1: {
        this.visorResultado = "" + (this.valor1 - this.valor2);
        break;
      }
      case 2: {
        this.visorResultado = "" + (this.valor1 * this.valor2);
        break;
      }
      case 3: {
        if(this.valor2 === 0) {
          this.visorResultado = "Erro";
          break;
        }
        this.visorResultado = "" + (this.valor1 / this.valor2);
        break;
      }
      }
    this.operacao = -1;
    this.ButtonClicked = -1;
    }

    porcetagem() {
      if(this.valor1 === undefined){
        this.visor += '%';
        this.valor1 = +this.visorResultado;
        this.visorResultado = "" + (this.valor1 / 100);
        this.valor1 = this.valor1 / 100;
      } else {
        this.visor += '%';
        this.valor2 = +this.visorResultado;
        this.visorResultado = "" + (this.valor2 / 100);
      }
    }

    negativo() {
      console.log(this.valor1)
      if(this.valor1 === undefined){
      this.visor = ' ';
      this.valor1 = +this.visorResultado;
      this.visorResultado = "" + (-this.valor1);
      this.valor1 = -this.valor1;
      this.visor = this.visorResultado;
      console.log(this.valor1)
      } else {
        this.visor = ' ';
        this.valor2 = +this.visorResultado;
        this.visorResultado = "" + (-this.valor2);
        this.visor = this.visor.slice(0,2) + this.visorResultado;
      }
    }

    isClicked(operacao : number) {
      if (this.ButtonClicked === operacao) {
        this.ButtonClicked = -1; 
      } else {
        this.ButtonClicked = operacao;
      }
    }
  
}