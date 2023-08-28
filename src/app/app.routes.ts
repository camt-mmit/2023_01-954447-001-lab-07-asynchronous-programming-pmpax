import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'profile' , pathMatch: 'full'},
  {path: 'profile' ,
  loadChildren:()=> import('./profile/profile.routes').then((m) => m.routes),
},
];
