import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  backgroundImages: string[] = [
    'assets/images/hero1.jpg',
    'assets/images/hero2.jpg',
    'assets/images/hero3.jpg',
    'assets/images/hero4.jpg'
  ];

  currentImageIndex = 0;
  private intervalId: any = null;
  private routerSubscription: Subscription;
  private static lastImageIndex = 0;

  pageContent = {
    home: {
      title: 'Loxurya The Bespoke Excellence',
      description: 'Premium service with exceptional standards'
    },
    fleet: {
      title: 'Our Luxury Fleet',
      description: 'Experience unparalleled comfort and style'
    },
    locations: {
      title: 'Global Destinations',
      description: 'Luxury service across premium locations worldwide'
    },
    services: {
      title: 'Premium Services',
      description: 'Exceptional standards for discerning clients'
    },
    contact: {
      title: 'Get in Touch',
      description: 'Let us elevate your experience'
    }
  };

  currentPage: 'home' | 'fleet' | 'locations' | 'services' | 'contact' = 'home';

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const path = event.urlAfterRedirects.split('/')[1] || 'home';
      this.currentPage = path as keyof typeof this.pageContent;
      this.currentImageIndex = HeroComponent.lastImageIndex;
    });
  }

  ngOnInit() {
    this.currentImageIndex = HeroComponent.lastImageIndex;
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.clearSlideshowInterval();
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private startSlideshow() {
    this.clearSlideshowInterval(); // Ensure no duplicate timers
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  private clearSlideshowInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
    HeroComponent.lastImageIndex = this.currentImageIndex;
  
    // Restart the slideshow
    this.startSlideshow();
  }
  
  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.backgroundImages.length) % this.backgroundImages.length;
    HeroComponent.lastImageIndex = this.currentImageIndex;
  
    // Restart the slideshow
    this.startSlideshow();
  }
  

  selectImage(index: number) {
    this.currentImageIndex = index;
    HeroComponent.lastImageIndex = this.currentImageIndex;

    // Restart the slideshow interval
    this.startSlideshow();
  }

  get backgroundImage(): string {
    return this.backgroundImages[this.currentImageIndex];
  }

  get title(): string {
    return this.pageContent[this.currentPage].title;
  }

  get description(): string {
    return this.pageContent[this.currentPage].description;
  }
}
