import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleCartComponent } from './single-cart.component';

const routes: Routes = [{ path: '', component: SingleCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleCartRoutingModule { }
