import { Component, inject } from '@angular/core'; //responsible for component
import { CommonModule } from '@angular/common'; //responsible for common functionalities
import { ActivatedRoute } from '@angular/router'; // responsible for routing
import { HousingService } from 'src/app/services/housing.service';  // responsible for fetching data
import { HousingLocation } from 'src/app/interfaces/housing-location'; //responsible for housing location data

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img [src]="housingLocation?.photo" alt="Exterior photo of {{housingLocation?.name}}" />
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry ? 'Yes' : 'No'}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi ? 'Yes' : 'No'}}</li>
        </ul>
      </section>  
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <button class="primary">Apply now</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId = 0;
  housingLocation: HousingLocation | undefined; 
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }
}
