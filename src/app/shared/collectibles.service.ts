import { Collectibles } from "app/shared/collectibles.model";

export class CollectibleService {
    private collectibles: Collectibles[] = [
    {description: "The quick brown fox jumps over a lazy dog.", type: "book"},
    {description: "Brown fox jumps over a lazy dog.", type: "Radio"},
    {description: "The fox jumps over a lazy car on tuesday.", type: "magazine"},
    {description: "All black dogs are a lazy.", type: "journal"}
    ];

    getCollectibles(){
      return this.collectibles;
    }


    private collection:Collectibles[] = [];

    getCollection(){
        return this.collection;
    }

    addCollection(item:Collectibles){
        this.collection.indexOf(item) !== -1 ? "Item exists" : this.collection.push(item);  
    }
    removeCollection(item:Collectibles){
        this.collection.splice(this.collection.indexOf(item), 1);
    }
  
}