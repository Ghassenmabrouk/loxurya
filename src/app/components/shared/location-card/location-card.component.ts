import { Component, Input, OnInit } from '@angular/core';

interface Location {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  @Input() location!: Location;

  ngOnInit(): void {
    // Set the image path dynamically if not provided
    if (!this.location.image) {
      this.location.image = `assets/images/${this.location.name.toLowerCase()}.jpg`;  // Assuming images are named after locations (e.g., paris.jpg)
    }
  }
}
