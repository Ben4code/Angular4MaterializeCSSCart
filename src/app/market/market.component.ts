import { Component, OnInit } from '@angular/core';
import { CollectibleService } from "app/shared/collectibles.service";
import { Collectibles } from "app/shared/collectibles.model";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  collectibles:Collectibles[] = [];
    
  constructor (private cs:CollectibleService){

  }

  addCollection(item:Collectibles){
    console.log(item);
    this.cs.addCollection(item);
  }

  ngOnInit(){
    this.collectibles = this.cs.getCollectibles();
  }
}