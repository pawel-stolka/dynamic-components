import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-clawesome',
  template: `
    <p>
      it's clawesome!
    </p>
  `,
  styles: [
  ]
})
export class ClawesomeComponent  implements DynamicComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
