import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  arrSkill: any = [
    { name: 'HTML', per: 'width:75%' },
    { name: 'CSS', per: 'width:55%' },
    { name: 'JSCREIPTE', per: 'width:15%' },
    { name: 'BOOTSTRAP', per: 'width:80%' },
    { name: 'ANGULAR', per: 'width:25%' },
    { name: 'TAILWEND', per: 'width:65%' },
    { name: 'REACT', per: 'width:45%' },
  ];
}
