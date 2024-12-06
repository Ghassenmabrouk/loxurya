import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: [`
    .services-section {
      padding: 4rem 0;
      background: linear-gradient(to bottom, #f8f9fa, #ffffff);
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    h1 {
      text-align: center;
      color: #2c3e50;
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 3rem;
      position: relative;
    }

    h1:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: #c5a47e;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .service-card {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #c5a47e;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }

    .service-card:hover::before {
      transform: scaleX(1);
    }

    .service-icon {
      margin-bottom: 1.5rem;
    }

    .service-icon i {
      font-size: 2.8rem;
      color: #c5a47e;
    }

    .service-content h3 {
      color: #2c3e50;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .service-content p {
      color: #6c757d;
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 1200px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }

      h1 {
        font-size: 2rem;
      }
    }
  `]
})



export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-concierge-bell',
      title: '24/7 Concierge',
      description: 'Round-the-clock personal assistance for all your needs',
      details: {
        title: '24/7 Premium Concierge Services',
        features: [
          'Personal dedicated concierge available 24/7',
          'Immediate response to all requests',
          'Tailored solutions for your unique needs',
          'Multilingual support',
          'Priority access to exclusive events and venues'
        ],
        image: 'assets/images/services/hand.jpg'
      }
    },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Transfer & Provision',
      description: 'Transfer and pickup at your preferred location',
      details: {
        title: 'Luxury Transfer & Provision Services',
        features: [
          'Door-to-door luxury transportation',
          'Fleet of premium vehicles',
          'Professional chauffeurs',
          'Real-time flight monitoring',
          'Customized route planning'
        ],
        image: 'assets/images/services/choffeur.jpg'
      }
    },
    {
      icon: 'fas fa-tasks',
      title: 'Full Organization of Your Stay & Events',
      description: 'Seamless arrangements for every travel detail',
      details: {
        title: 'Complete Stay & Event Management',
        features: [
          'End-to-end travel planning',
          'Custom itinerary creation',
          'Event coordination and management',
          'VIP access arrangements',
          'Personal shopping assistance'
        ],
        image: 'assets/events-service.jpg'
      }
    },
    {
      icon: 'fas fa-concierge-bell',
      title: 'Professional Welcome In Your Luxury Limousine',
      description: 'Enjoy a warm, courteous reception and impeccable service as you step into your elegant ride.',
      details: {
        title: 'Premium Limousine Welcome Service',
        features: [
          'Meet & greet at arrival',
          'Luxury vehicle fleet selection',
          'Professional uniformed chauffeurs',
          'Refreshments and amenities onboard',
          'Baggage handling assistance'
        ],
        image: 'assets/limousine-service.jpg'
      }
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Unmatched Security & Absolute Discretion',
      description: 'Experience unparalleled safety and confidentiality, ensuring every journey is private and secure.',
      details: {
        title: 'Elite Security & Privacy Services',
        features: [
          'Professional security personnel',
          'Confidentiality agreements',
          'Secure transportation routes',
          'Privacy protection protocols',
          '24/7 security monitoring'
        ],
        image: 'assets/security-service.jpg'
      }
    },
    {
      icon: 'fas fa-hotel',
      title: 'Hotels & Residences',
      description: 'Experience unparalleled safety and confidentiality, ensuring every journey is private and secure.',
      details: {
        title: 'Luxury Accommodations',
        features: [
          'Premium hotel partnerships',
          'Exclusive private residences',
          'VIP check-in/check-out',
          'Room customization services',
          'Special amenities and upgrades'
        ],
        image: 'assets/hotel-service.jpg'
      }
    },
    {
      icon: 'fas fa-utensils',
      title: 'Restaurants & Lounge',
      description: 'Indulge in exquisite dining and relaxing lounges, offering a blend of culinary delights and refined ambiance.',
      details: {
        title: 'Fine Dining & Entertainment',
        features: [
          'Priority restaurant reservations',
          'Access to exclusive lounges',
          'Private dining arrangements',
          'Personal chef services',
          'Custom menu creation'
        ],
        image: 'assets/restaurant-service.jpg'
      }
    }
  ];

  showServiceDetails(service: any): void {
    const featuresList = service.details.features
      .map(
        (feature: string) =>
          `<li class="swal-feature-item">${feature}</li>`
      )
      .join('');
  
    Swal.fire({
      title: `<strong>${service.details.title}</strong>`,
      html: `
        <div class="swal-service-content">
          <div class="swal-image-container">
            <img 
              src="${service.details.image}" 
              alt="${service.details.title}" 
              class="swal-service-image"
            />
          </div>
          <div class="swal-features-container">
            <ul class="swal-feature-list">
              ${featuresList}
            </ul>
          </div>
        </div>
      `,
      showCloseButton: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonColor: '#c5a47e',
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        confirmButton: 'custom-swal-confirm-button',
      },
      didOpen: () => {
        const style = document.createElement('style');
        style.textContent = `
          .custom-swal-popup {
            max-width: 900px;
            padding: 2.5rem;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border-radius: 20px;
          }
          .custom-swal-title {
            color: #2c3e50;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            font-weight: bold;
          }
          .swal-service-content {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            align-items: center;
          }
          .swal-image-container {
            flex: 1 1 40%;
          }
          .swal-service-image {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
          .swal-features-container {
            flex: 1 1 55%;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: flex-start;
          }
          .swal-feature-list {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 0;
            margin: 0;
            list-style: none;
          }
          .swal-feature-item {
            flex: 1 1 calc(50% - 1rem); /* Two columns */
            background: rgba(255, 255, 255, 0.9);
            padding: 0.8rem 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            color: #34495e;
            font-size: 1rem;
            text-align: left;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .swal-feature-item:before {
            content: '✦';
            color: #c5a47e;
            font-size: 1.2rem;
          }
          .custom-swal-confirm-button {
            padding: 10px 25px;
            font-size: 1rem;
            border-radius: 8px;
          }
          @media (max-width: 768px) {
            .swal-feature-item {
              flex: 1 1 100%; /* Stacks items for smaller screens */
            }
            .swal-service-content {
              flex-direction: column;
              gap: 1.5rem;
            }
            .swal-image-container {
              width: 100%;
            }
          }
        `;
        document.head.appendChild(style);
      },
    });
  }
  
}









