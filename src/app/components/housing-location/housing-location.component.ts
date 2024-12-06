import { Component, Input } from '@angular/core'; //import decorators
import { CommonModule } from '@angular/common';   //import module
import { HousingLocation } from '../../interfaces/housing-location'; //import the interface
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: 
  //inline structure
  `
      <section class="listing">
        <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
        <h2 class="listing-heading">{{housingLocation.name}}</h2>
        <p class="listing-location">{{housingLocation.city}}.{{housingLocation.state}} </p>
        <a [routerLink]="['/details', housingLocation.id]">Learn more</a>
      </section>
  `,
  //inline styling
  styleUrls: ['./housing-location.component.css']
})

//functionlality
export class HousingLocationComponent {

  @Input() housingLocation!:HousingLocation;

}

  /** 
   *  @Input() housingLocation!:HousingLocation;
   * we are using two tools here,
   * input property - its job being to pass data into our child component (components/housing-location.component.ts) from the parent component (pages/app.component.ts)
   * interface property - its job being to let the child component (components/housing-location.component.ts) know what what type of data structure/blueprint to expect.
   * so we pass data from the parent component to the child component using the input property. when the child component rececives the data, will reference the interfaces component blueprint as to how to organise & structure and display the data.
   * https://chatgpt.com/c/674a2d0f-22f4-800e-add2-fa1b4d2f94d8#:~:text=the%20above%20refinements%3A-,Input%20Property%20(%40Input())%3A,is%20in%20the%20interfaces%20folder%2C%20ensuring%20centralized%20organization%20of%20data%20models.,-Example%20in%20Action
   */
