import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'John Doe',
      location: 'Tunisia',
      comment: 'Exceptional service and stunning vehicles. Made our trip unforgettable.',
      rating: 5
    },
    {
      name: 'Jane Smith',
      location: 'Vienna',
      comment: 'Professional team and luxurious fleet. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Brown',
      location: 'Tunisia',
      comment: 'Perfect experience from start to finish. Will definitely use again.',
      rating: 5
    }
  ];
}