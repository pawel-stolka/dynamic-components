import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  template: `
    <div>menu</div>
  `
})

// https://developer.okta.com/blog/2021/12/08/angular-dynamic-components
export class MenuComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  
}
