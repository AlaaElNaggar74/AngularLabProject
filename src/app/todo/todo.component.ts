import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  itemsArr: any = [
    { name: 'Book-A', id: 1, trig: true },
    { name: 'Book-B', id: 2, trig: true },
    { name: 'Item-C', id: 3, trig: true },
    { name: 'Item-D', id: 4, trig: true },
  ];

  passElementToParent(newId: any) {
    this.itemsArr.push({
      name: newId,
      id: Math.round(Math.random() * 1000000),
      trig: true,
    });
    console.log(this.itemsArr);
    console.log(newId);
  }

  deleteIyem(xId: any) {
    this.itemsArr = this.itemsArr.filter((ele: any) => {
      return ele.id != xId;
    });
  }
  changeItem(xId: any) {
    // this.itemsArr = this.itemsArr.map((ele: any) => {
    //   return ele.id != xId;
    // });
    this.itemsArr = this.itemsArr.map((ele: any) => {
      return ele.id == xId ? { ...ele, trig: !ele.trig } : { ...ele };
    });

    // this.itemsArr.forEach((element:any) => {
    //   if (element.id == xId) {
    //     element.trig=!element.trig;
    //   }
    // });
  }
}
