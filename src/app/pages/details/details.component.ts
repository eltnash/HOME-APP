import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <section class="listing-description">
        <h2>{{housingLocation?.name}}</h2>
        <p>{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  housingLocation: HousingLocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
} 