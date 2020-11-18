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
  /**
   * teste
   */
  public teste() {
    this.diaria = 0;
  }
  ngOnInit(){
    this.diariaMotoca();
  }
  constructor() {}

}
