import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  locations = [
    {
      name: 'Bratislava',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'Discover elegance and charm in the capital of Slovakia',
      address: 'Bratislava, Slovakia'
    },
    {
      name: 'Salzburg',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'Immerse yourself in the cultural wonders of Austria',
      address: 'Salzburg, Austria'
    },
    {
      name: 'München',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'Indulge in luxury in the heart of Bavaria',
      address: 'München, Germany'
    },
    {
      name: 'Innsbruck',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'Enjoy breathtaking alpine views and premium services',
      address: 'Innsbruck, Austria'
    },
    {
      name: 'Bregenz',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'A serene retreat on the shores of Lake Constance',
      address: 'Bregenz, Austria'
    },
    {
      name: 'Budapest',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'Explore luxury in the vibrant capital of Hungary',
      address: 'Budapest, Hungary'
    },
    {
      name: 'Brno',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'Enjoy sophistication in the Czech Republic’s second city',
      address: 'Brno, Czech Republic'
    },
    {
      name: 'Lubijana',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'A blend of modern elegance and historic charm',
      address: 'Ljubljana, Slovenia'
    },
    {
      name: 'Prag',
      image: 'assets/images/locations/tunisia.jpg',
      description: 'Luxury amidst the fairytale architecture of Prague',
      address: 'Prague, Czech Republic'
    },
    {
      name: 'Vienna',
      image: 'assets/images/locations/vienna.jpg',
      description: 'Premium services in Austria’s cultural capital',
      address: 'Vienna, Austria'
    }
  ];
}
