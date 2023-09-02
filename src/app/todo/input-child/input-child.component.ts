import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css'],
})
export class InputChildComponent {
  // inpValue:any;

  val: any;

  @Input() eleId: any;
  @Output() sentElemToParent = new EventEmitter();

  constructor() {}

  passElementToParent(itemId: any) {
    console.log(itemId);
    if (this.val) {
      this.val = '';
      this.sentElemToParent.emit(itemId);
    }
  }

  // lo(){
  //   console.log(this.eleId);

  // }
}
