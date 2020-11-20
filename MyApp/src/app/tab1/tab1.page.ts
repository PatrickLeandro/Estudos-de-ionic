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
   * diariaMotoca função que altera o valor da diaria conforme o dia.
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
   */
  public listarComandas() {
    this.totalTaxas = this.totalTaxas + Number(this.taxa);
    this.total = Number(this.diaria) + Number(this.totalTaxas);
    this.numEntregas++;
    document.getElementById('listEntregas').innerHTML += `<ion-chip >
          <ion-label color="tertiary">${this.comanda}</ion-label>
        </ion-chip>`;
    document.getElementById('fechamentoEntregas').innerHTML = `Total de entregas feitas: ${this.numEntregas} - Valor R$${this.totalTaxas},00`;
    document.getElementById('fechamentoTotal').innerHTML = `Fechamento R$${this.total},00`;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    this.diariaMotoca();
  }
  constructor() {}
}
