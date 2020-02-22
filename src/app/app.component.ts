import { Component } from "@angular/core";
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
  faPlus = faPlus;
  faMinus = faMinus;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;

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
