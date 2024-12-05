import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  locations = [
    {
      name: 'Tunisia',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'Experience luxury in the heart of Tunisia',
      address: 'Tunis, Tunisia',
      phone: '+216 XX XXX XXX'
    },
    {
      name: 'Vienna',
      image: 'assets/images/locations/vienna.jpg',
      description: 'Premium service in the cultural capital',
      address: 'Vienna, Austria',
      phone: '+43 XX XXX XXXX'
    }
  ];
}