import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  {
    path: 'time-tracking',
    component: TimeTrackingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'protected-route', component: ProtectedComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
