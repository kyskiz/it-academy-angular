import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  header: string = 'Header from variable!';

  constructor() { }

  ngOnInit(): void {
    const body = document.querySelector('body');
    if (body) {
      body.addEventListener('click', () => {
        console.log('body was clicked');
      });
    }

  }

  handleChildClick(event: string) {
    console.log('child was clicked with text', event);
  }

}
