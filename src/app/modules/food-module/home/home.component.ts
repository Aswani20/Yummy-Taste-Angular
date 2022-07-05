import { Component, OnInit } from '@angular/core';
import FoodCategories, { FoodAPIService } from 'src/app/services/food-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foodReciptsApiData: any;

  constructor(private _foodApiService:FoodAPIService) { }
   
  ngOnInit(): void {
    this._foodApiService.getRecipiesByCategory(FoodCategories.Pizza).subscribe(response =>{
      this.foodReciptsApiData = response.recipes;
      console.log(this.foodReciptsApiData);    
    })
  }

}
