import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  template: `
    <button mat-icon-button aria-label="Button to open menu" [matMenuTriggerFor]="menu">
      <mat-icon>menu</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item *ngIf="!isAuthenticated" (click)="login()">
        <mat-icon>login</mat-icon> <span>Login</span>
      </button>
      <button mat-menu-item *ngIf="isAuthenticated" (click)="logout()">
        <mat-icon>logout</mat-icon> <span>Logout</span>
      </button>
    </mat-menu>
  `
})

// https://developer.okta.com/blog/2021/12/08/angular-dynamic-components
export class MenuComponent implements OnInit, OnDestroy {
  public isAuthenticated = false;
  private _destroySub$ = new Subject<void>();

  constructor(
    private _oktaAuth: OktaAuth,
    private _authStateService: OktaAuthStateService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
   this._authStateService.authState$.pipe(
     filter((s: AuthState) => !!s),
     map((s: AuthState) => s.isAuthenticated ?? false),
     distinctUntilChanged(),
     takeUntil(this._destroySub$)
   ).subscribe(
     (authenticated: boolean) => this.isAuthenticated = authenticated
   );
  }

  public ngOnDestroy(): void {
    this._destroySub.next();
  }

  public async login(): Promise<void> {
    await this._oktaAuth.signInWithRedirect().then(
      _ => this._router.navigate(['/protected'])
    );
  }

  public async logout(): Promise<void> {
    await this._oktaAuth.signOut();
  }
}
