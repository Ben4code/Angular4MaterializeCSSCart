import { Component, OnInit } from '@angular/core';
import { Collectibles } from "app/shared/collectibles.model";
import { CollectibleService } from "app/shared/collectibles.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections: Collectibles[] = [];

  
  constructor(private collectionService:CollectibleService) { }

  ngOnInit() {
    this.collections = this.collectionService.getCollection();
  }


  removeItem(item:Collectibles){
    this.collectionService.removeCollection(item);
  }

}
