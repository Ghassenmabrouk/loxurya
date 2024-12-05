import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-concierge-bell',
      title: '24/7 Concierge',
      description: 'Round-the-clock personal assistance for all your needs'
    },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Door-to-Door Delivery',
      description: 'Vehicle delivery and pickup at your preferred location'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Full Insurance',
      description: 'Comprehensive coverage for worry-free travel'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Professional Chauffeur',
      description: 'Experienced drivers at your service'
    }
  ];
}