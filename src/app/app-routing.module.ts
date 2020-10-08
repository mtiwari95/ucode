import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { TweedComponent } from './tweed/tweed.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'tweed', component: TweedComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: EmptyComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
