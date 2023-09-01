import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-portfolio',
  templateUrl: './child-portfolio.component.html',
  styleUrls: ['./child-portfolio.component.css']
})
export class ChildPortfolioComponent {



  @Input()  sendPaerntPortFolio:any;


  
}
