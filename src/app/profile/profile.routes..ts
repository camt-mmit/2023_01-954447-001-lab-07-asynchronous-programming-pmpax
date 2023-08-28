import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileViewPageComponent } from './profile-view-page/profile-view-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    childent: [
      {path: '', redirectTo: 'view' , pathMatch: 'full'},
      {path: 'view' , component:ProfileViewPageComponent}
    ]
  }
]
