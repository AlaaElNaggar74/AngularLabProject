import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-child',
  templateUrl: './display-child.component.html',
  styleUrls: ['./display-child.component.css'],
})
export class DisplayChildComponent {
  bool: any = true;

  specId:any;
  @Input() eleItems: any;
  @Output() deleteElem=new EventEmitter();
  @Output() changElem=new EventEmitter();


  changex(ele:any) {

    this.changElem.emit(ele);


    // this.bool = !this.bool;
    // this.bool = this.bool ? this.bool : !this.bool;

        // this.specId =ele;

    // console.log();
    // ele.target.classList.add(["btn", "btn-secondary"]);
    // ele.target.classList.remove("btn btn-warning");
    
  }


  deletex(deletId:any){
    this.deleteElem.emit(deletId);
    // this.specId =deletId;
  }
}
