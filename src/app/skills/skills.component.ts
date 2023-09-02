import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  arrSkill: any = [
    { name: 'HTML', per: '75%' },
    { name: 'CSS', per: '55%' },
    { name: 'JSCREIPTE', per: '15%' },
    { name: 'BOOTSTRAP', per: '80%' },
    { name: 'ANGULAR', per: '25%' },
    { name: 'TAILWEND', per: '65%' },
    { name: 'REACT', per: '45%' },
  ];

}
