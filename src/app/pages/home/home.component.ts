import { Component, inject } from '@angular/core'; //Import @component decorator 
import { CommonModule } from '@angular/common'; //Import Module
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component'; //Import child Component
import { HousingLocation } from 'src/app/interfaces/housing-location'; //Import interface component
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
        <section class="search-bar">
          <form>
            <input type="text" placeholder="Filter by city">
            <button class="primary" type="button">Search</button>
          </form>
        </section>
        <section class="results">
          <app-housing-location *ngFor="let eachItem of housingLocationList" [housingLocation]="eachItem"></app-housing-location> 
        </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []; 
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getHousingLocations();
  } 
}
