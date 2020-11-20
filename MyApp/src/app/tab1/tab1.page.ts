import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public day: string[] = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  public date = new Date();
  public fullDate = this.date.getDay();
  public diaria = 0;
  public comanda: string;
  public taxa: number;
  public totalTaxas = 0;
  public total: number;
  public numEntregas = 0;
  public alterarDiaria = 0;
  /**
   * função que altera o valor da diária conforme o dia.
   */
  public diariaMotoca() {
      switch (this.fullDate) {
        case 0:
          this.diaria = 60;
          break;
        case 1:
          this.diaria = 0;
          break;
        case 2:
          this.diaria = 55;
          break;
        case 3:
          this.diaria = 55;
          break;
        case 4:
          this.diaria = 55;
          break;
        case 5:
          this.diaria = 60;
          break;
        case 6:
          this.diaria = 60;
          break;

        default:
          break;
      }
  }
  /**
   * Função que vai ser chamada ao ser quando o usuário clicar no valor da diaria, para mudar o valor da diária
   * conforme os valores pré definidos 35, 40, 50, 55, e 60.
   * Pretensão para isso ser alterado para um input em um próximo passo do projeto.
   */
  public mudarDiaria() {
    this.alterarDiaria++;
    switch (this.alterarDiaria) {
        case 1:
        this.diaria = 35;
        this.total = Number(this.diaria) + Number(this.totalTaxas);
        document.getElementById('fechamentoTotal').innerHTML = `Fechamento R$${this.total},00`;
        break;
      case 2:
        this.diaria = 40;
        this.total = Number(this.diaria) + Number(this.totalTaxas);
        document.getElementById('fechamentoTotal').innerHTML = `Fechamento R$${this.total},00`;
        break;
      case 3:
        this.diaria = 50;
        this.total = Number(this.diaria) + Number(this.totalTaxas);
        document.getElementById('fechamentoTotal').innerHTML = `Fechamento R$${this.total},00`;
        break;
      case 4:
        this.diaria = 55;
        this.total = Number(this.diaria) + Number(this.totalTaxas);
        document.getElementById('fechamentoTotal').innerHTML = `Fechamento R$${this.total},00`;
        break;
        default:
            this.diaria = 60;
            this.alterarDiaria = 0;
            this.total = Number(this.diaria) + Number(this.totalTaxas);
            document.getElementById('fechamentoTotal').innerHTML = `Fechamento R$${this.total},00`;
            break;
    }
}
  /**
   * Função que vai listar as Comandas dentro de uma div para que o usuário possa ver com facilidade.
   * Função também vai alterar automaticamente o valor das entregas feitas juntamente ao fechamento.
   * Pretensão para um botão de fechamento final ao invés de informar o valor a cada entrega adicionada.
   * O que não é de todo ruim mas a ideia seria aparecer um modal com as informações do fechamento la.
   */
  public listarComandas() {
    this.totalTaxas = this.totalTaxas + Number(this.taxa);
    this.total = Number(this.diaria) + Number(this.totalTaxas);
    this.numEntregas++;
    /* Esta parte da função é onde adicionar um novo elemento de entrega dentro da div listEntregas */
    document.getElementById('listEntregas').innerHTML += `<ion-chip >
          <ion-label color="tertiary">${this.comanda}</ion-label>
        </ion-chip>`;
    /*Altera a frase de total de entregas */
    document.getElementById('fechamentoEntregas').innerHTML = `Total de entregas feitas: ${this.numEntregas} - Valor R$${this.totalTaxas},00`;
    /*Altera o fechamento */
    document.getElementById('fechamentoTotal').innerHTML = `Fechamento R$${this.total},00`;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    this.diariaMotoca();
  }
  constructor() {}
}
