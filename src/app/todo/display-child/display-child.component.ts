import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-child',
  templateUrl: './display-child.component.html',
  styleUrls: ['./display-child.component.css'],
})
export class DisplayChildComponent {
  bool: any = false;

  @Input() eleItems: any;
  @Output() deleteElem=new EventEmitter();
  changeItem(ele:any) {
    this.bool = !this.bool;
    // console.log();
    // ele.target.classList.add(["btn", "btn-secondary"]);
    // ele.target.classList.remove("btn btn-warning");
    
  }



  deletex(deletId:any){
    this.deleteElem.emit(deletId);
  }
}
