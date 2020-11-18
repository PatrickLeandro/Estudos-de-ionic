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
          alert('teste');
          break;
        case 1:
          this.diaria = 0;
          alert('teste');
          break;
        case 2:
          this.diaria = 55;
          alert('teste');
          break;
        case 3:
          this.diaria = 55;
          alert('teste');
          break;
        case 4:
          this.diaria = 55;
          alert('teste');
          break;
        case 5:
          this.diaria = 60;
          alert('teste');
          break;
        case 6:
          this.diaria = 60;
          alert('teste');
          break;

        default:
          break;
      }
  }
  ionViewDidLoad(){
    this.diariaMotoca();
  }
  constructor() {}

}
