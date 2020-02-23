import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import {
  faPlus,
  faMinus,
  faHeart,
  faHeartBroken
} from "@fortawesome/free-solid-svg-icons";
import { ItemService } from "./core/services/item/item.service";

export interface Item {
  name: string;
  mainImageURL: string;
  rating: number;
  raters: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  title = "Rate FPV";
  faPlus = faPlus;
  faMinus = faMinus;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;

  // items: Observable<any[]>;
  // constructor(db: AngularFirestore) {
  //   this.items = db.collection("test").valueChanges();
  // }

  // private itemsCollection: AngularFirestoreCollection<Item>;
  items: Item[];
  constructor(private afs: AngularFirestore, private itemService: ItemService) {
    // this.itemsCollection = afs.collection<Item>("cam");
    // this.items = this.itemsCollection.valueChanges();
    // this.items = itemService.getCameras();
  }
  ngOnInit() {
    this.itemService.getCameras().subscribe((res: Item[]) => {
      // this.items = res;
      // console.log(this.items);
      console.log("app.component.ts");
      console.log(res);
    });

    // .subscribe(data => {
    //   this.items = data.map(e => {
    //     return {
    //       name: e.name,
    //       mainImageURL: e.mainImageURL,
    //       rating: e.rating,
    //       raters: e.raters
    //     } as Item;
    //   });
    // });
  }
  // addItem(item: Item) {
  //   this.itemsCollection.add(item);
  // }
}
