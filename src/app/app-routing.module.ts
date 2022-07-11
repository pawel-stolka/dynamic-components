import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'protected', loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule) },
  { path: 'login/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
