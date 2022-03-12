import {Component, OnInit, ViewChild} from '@angular/core';

declare var executeParticlesBanner: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild('logoMain') logoMain: any;
  @ViewChild('imgBanner') imgBanner: any;
  @ViewChild('bannerTitle') bannerTitle: any;
  @ViewChild('bannerSubtitle') bannerSubtitle: any;

  private observer: any;

  constructor() {
  }

  ngOnInit(): void {
    // executeParticlesBanner();
    this.observer = new IntersectionObserver(this.changeLogoPosition, {
      root: null,
      rootMargin: '50px',
      threshold: 1
    });

  }

  ngAfterViewInit(): void {
    this.scrollObserver();
  }

  scrollObserver() {
    this.observer.observe(this.bannerTitle.nativeElement);
    this.observer.observe(this.bannerSubtitle.nativeElement);
    this.observer.observe(this.imgBanner.nativeElement);
  }

  changeLogoPosition = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }

}
