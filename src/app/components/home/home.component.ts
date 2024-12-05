import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredCars: any[] = [];
  locations = [
    { name: 'Tunisia', image: 'assets/images/locations/tunisia.jpg', description: 'Luxury car rental in Tunisia' },
    { name: 'Vienna', image: 'assets/images/locations/vienna.jpg', description: 'Premium vehicles in Vienna' }
  ];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadFeaturedCars();
  }

  private loadFeaturedCars(): void {
    // This would typically come from your service
    this.featuredCars = [
      {
        id: 1,
        name: 'Rolls-Royce Phantom',
        image: 'assets/images/cars/rolls-royce-phantom.jpg',
        category: 'Luxury',
        price: 1200
      },
      // Add more featured cars
    ];
  }
}