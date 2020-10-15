import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show = true;
  constructor() { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150) {
      document.getElementById('nvrbk').classList.add('nvrbk');
    } else {
      document.getElementById('nvrbk').classList.remove('nvrbk');
    }
  }
  ngOnInit(): void {
    document.getElementById('nvrbk').classList.remove('nvrbk');
  }
  change() {
    this.show = !this.show;
  }


}
