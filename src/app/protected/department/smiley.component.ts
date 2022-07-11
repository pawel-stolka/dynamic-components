import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smiley',
  template: `
    <p>
      and the last - smiley works!
    </p>
  `,
  styles: [
  ]
})
export class SmileyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
