import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  showPrivateOffice = true;
  showVIRTUALOFFICE = true;
  showCUSTOMIZEDOFFICE = true;
  showCUSTOMIZEDFLOOR = true;
  constructor() { }

  ngOnInit(): void {
  }



  alterDescriptionText1() {
    this.showPrivateOffice = !this.showPrivateOffice;
  }
  alterDescriptionText2() {

    this.showVIRTUALOFFICE = !this.showVIRTUALOFFICE;

  }
  alterDescriptionText3() {

    this.showCUSTOMIZEDOFFICE = !this.showCUSTOMIZEDOFFICE;
  }
  alterDescriptionText4() {

    this.showCUSTOMIZEDFLOOR = !this.showCUSTOMIZEDFLOOR;
  }

}
