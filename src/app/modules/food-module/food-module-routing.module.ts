import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodcardComponent } from './foodcard/foodcard.component';
import { FoodrecipeComponent } from './foodrecipe/foodrecipe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'foodcard',component:FoodcardComponent},
  {path:'foodrecipe',component:FoodrecipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodModuleRoutingModule { }
