import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  itemsArr: any = [
    { name: 'items-a', id: 1 },
    { name: 'items-b', id: 2 },
    { name: 'items-c', id: 3 },
    { name: 'items-d', id: 4 },
  ];

  passElementToParent(newId: any) {
    this.itemsArr.push({
      name: newId,
      id: Math.round(Math.random() * 1000000),
    });
    console.log(this.itemsArr);
    console.log(newId);
  }

  deleteIyem(xId: any) {
    this.itemsArr = this.itemsArr.filter((ele: any) => {
      return ele.id != xId;
    });
  }
}
