import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  private birthdate = new Date("1999-11-28");

  constructor() { }

  ngOnInit(): void {
  }

  get age() {
    let timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    return age;
  }

  downloadCV() {
    console.log('ici')
  }
}
