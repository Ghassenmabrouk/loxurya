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
      title: 'Transfert & Provision',
      description: 'Transfert and pickup at your preferred location'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Full Organization of Your Stay & Events',
     description: 'Seamless arrangements for every travel detail'

    },
    {
      icon: 'fas fa-car-side', // Updated to symbolize a professional welcome
title: 'Professional Welcome In Your Luxury Limousine',
description: 'Enjoy a warm, courteous reception and impeccable service as you step into your elegant ride.'

    },
    {
      icon: 'fas fa-shield-alt', 
title: 'Unmatched Security & Absolute Discretion',
description: 'Experience unparalleled safety and confidentiality, ensuring every journey is private and secure.'


    },
    {
      icon: 'fas fa-hotel', 
title: 'Hotels & Residences',
description: 'Experience unparalleled safety and confidentiality, ensuring every journey is private and secure.'


    },
    {
      icon: 'fas fa-utensils', // Symbolizing restaurants and dining
title: 'Restaurants & Lounge',
description: 'Indulge in exquisite dining and relaxing lounges, offering a blend of culinary delights and refined ambiance.'
    },
  ];
}
