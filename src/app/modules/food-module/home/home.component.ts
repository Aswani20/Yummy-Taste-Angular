import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/food-category';
import FoodCategories, { FoodAPIService } from 'src/app/services/food-api.service';
import {TabViewModule} from 'primeng/tabview';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foodReciptsApiData: Recipe[] = [];

  constructor(private _foodApiService:FoodAPIService) { }
   
  ngOnInit(): void {
    this._foodApiService.getRecipiesByCategory(FoodCategories.Beef).subscribe(response =>{
      this.foodReciptsApiData = response.recipes;
      console.log(this.foodReciptsApiData);    
    })
  }

}
