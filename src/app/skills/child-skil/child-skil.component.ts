import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-skil',
  templateUrl: './child-skil.component.html',
  styleUrls: ['./child-skil.component.css']
})
export class ChildSkilComponent  {


  @Input() sendPaernt:any;
}
