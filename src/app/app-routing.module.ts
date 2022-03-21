import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'phone-number',
    pathMatch: 'full'
  },
  {
    path: 'phone-number',
    loadChildren: () => import('./phone-number/phone-number.module').then(m => m.PhoneNumberPageModule)
  },  {
    path: 'orderlist',
    loadChildren: () => import('./orderlist/orderlist.module').then( m => m.OrderlistPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
