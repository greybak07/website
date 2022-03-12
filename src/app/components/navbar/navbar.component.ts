import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

declare var executeParticlesMenu: any;

// declare var hideBannerLogo: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('divLogo') divLogo: any;
  @ViewChild('divIso') divIso: any;
  @ViewChild('socialMedia') socialMedia: any;
  @ViewChild('menuInput') menuInput: any;
  @ViewChild('isoLogoNav') isoLogoNav: any;

  menuIcon: String = "fa-solid fa-bars";
  isOpen: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // hideBannerLogo();
  }

  // ngDoCheck(): void {
  //   this.verifyIsoLogoShow();
  // }

  openCloseMenu = () => {
    this.isOpen = !this.isOpen;
    if (this.isOpen === true) {
      this.menuIcon = "fa-solid fa-xmark";
      this.activeLogoMovement();
      executeParticlesMenu();
    } else {
      this.menuIcon = "fa-solid fa-bars";
      this.deactiveLogoMovement();
    }
  }

  activeLogoMovement() {

    const divLogo = this.divLogo;
    const divIso = this.divIso;
    const socialMedia = this.socialMedia;

    document.onmousemove = function (event) {
      let x = event.clientX * 5 / window.innerWidth + "%";
      let y = event.clientY * 80 / window.innerWidth + "%";

      let x2 = event.clientX * 2 / window.innerWidth + "%";
      let y2 = event.clientY * 50 / window.innerWidth + "%";

      let x3 = event.clientX * 6 / window.innerWidth + "%";
      let y3 = event.clientY * 100 / window.innerWidth + "%";

      divLogo.nativeElement.style.left = x;
      divLogo.nativeElement.style.top = y;
      divLogo.nativeElement.style.transform = `translate(-${x},-${y})`;

      divIso.nativeElement.style.left = x2;
      divIso.nativeElement.style.top = y2;
      divIso.nativeElement.style.transform = `translate(-${x2},-${y2})`;

      socialMedia.nativeElement.style.left = x3;
      socialMedia.nativeElement.style.top = y3;
      socialMedia.nativeElement.style.transform = `translate(-${x3},-${y3})`;

    }
  }

  deactiveLogoMovement() {
    document.onmousemove = function () {
    };
  }

  verifyIsoLogoShow() {
    let isoLogoNav = this.isoLogoNav;
    if (isoLogoNav != undefined && isoLogoNav != null) {
      isoLogoNav = isoLogoNav.nativeElement;
      if (window.pageYOffset === 0) {
        isoLogoNav.classList.add("hidden");
      }
      window.onscroll = function () {
        let currentYOffset = window.pageYOffset;
        if (currentYOffset === 0) {
          isoLogoNav.classList.add('hidden');
        } else {
          isoLogoNav.classList.remove('hidden');
        }
      }
    }
  }

}
