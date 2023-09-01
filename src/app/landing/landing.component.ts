import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  landImage =
    'https://img.freepik.com/premium-vector/vector-circle-tech-with-light-blue-lamp-bulb-technology-background_43778-515.jpg';

  name: any = 'Alaa El Naggar';
  job: any = 'FrontEnd Web Developer.Web Developer';

}
