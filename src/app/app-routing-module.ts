import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharcuteriaProducts } from './charcuteria-products/charcuteria-products';
import { CharcuteriaAbout } from './charcuteria-about/charcuteria-about';

const routes: Routes = [
{
  path: '', 
  redirectTo: 'products',
  pathMatch: 'full'
},
{
  path: 'products', 
  component: CharcuteriaProducts
},
{
  path: 'about',
  component: CharcuteriaAbout
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
