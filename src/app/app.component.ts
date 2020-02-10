import { Component } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

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
export class AppComponent {
  title = "Rate FPV";

  // items: Observable<any[]>;
  // constructor(db: AngularFirestore) {
  //   this.items = db.collection("test").valueChanges();
  // }

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>("cam");
    this.items = this.itemsCollection.valueChanges();
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
}
