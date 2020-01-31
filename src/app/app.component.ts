import { Component } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface Item {
  name: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "Rate FPV";

  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<Item>("test/FC");
    this.item = this.itemDoc.valueChanges();
  }
  update(item: Item) {
    this.itemDoc.update(item);
  }
  // items: Observable<any[]>;
  // constructor(db: AngularFirestore) {
  //   this.items = db.collection("test").valueChanges();
  // }
}
