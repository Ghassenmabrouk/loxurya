import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    {
      id: 1,
      name: 'Rolls-Royce Phantom',
      category: 'Luxury',
      price: 1200,
      image: 'assets/images/cars/rolls-royce-phantom.jpg',
      description: 'Experience unparalleled luxury with the Rolls-Royce Phantom',
      features: ['Chauffeur service', 'Mini bar', 'WiFi', 'Massage seats']
    },
    {
      id: 2,
      name: 'Bentley Continental GT',
      category: 'Sport Luxury',
      price: 900,
      image: 'assets/images/cars/bentley-continental.jpg',
      description: 'The perfect blend of luxury and performance',
      features: ['Sport mode', 'Premium audio', 'Heated seats', 'GPS navigation']
    }
  ];

  constructor(private http: HttpClient) {}

  getFeaturedCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCarById(id: number): Observable<Car | undefined> {
    return of(this.cars.find(car => car.id === id));
  }
}