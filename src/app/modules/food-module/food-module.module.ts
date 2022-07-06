//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
//Components
import { FoodModuleRoutingModule } from './food-module-routing.module';
import { HomeComponent } from './home/home.component';
import { FoodcardComponent } from './foodcard/foodcard.component';
import { FoodrecipeComponent } from './foodrecipe/foodrecipe.component';

@NgModule({
  declarations: [
    HomeComponent,
    FoodcardComponent,
    FoodrecipeComponent,
    
  ],
  imports: [CommonModule, FoodModuleRoutingModule,TabViewModule,CardModule,ButtonModule],
})
export class FoodModuleModule {}
