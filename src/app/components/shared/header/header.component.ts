import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    // Add scroll event listener
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLanguage(event: Event): void {
    const select = event.target as HTMLSelectElement;
    if (select) {
      this.translate.use(select.value);
    }
  }

  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}