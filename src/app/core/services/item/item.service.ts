import { Injectable } from "@angular/core";
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
@Injectable({
  providedIn: "root"
})
export class ItemService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private fireStore: AngularFirestore) {
    // this.itemsCollection = this.fireStore.collection<Item>("cam");
    // this.items = this.itemsCollection.valueChanges();
  }

  getCameras(): Observable<Item[]> {
    this.itemsCollection = this.fireStore.collection<Item>("cam");
    this.items = this.itemsCollection.valueChanges();
    return this.items;
  }

  // createPolicy(policy: Policy){
  //   return this.fireStore.collection('policies').add(policy);
  // }

  // updatePolicy(policy: Policy){
  //   delete policy.id;
  //   this.fireStore.doc('policies/' + policy.id).update(policy);
  // }

  // deletePolicy(policyId: string){
  //   this.fireStore.doc('policies/' + policyId).delete();
  // }

  // addItem(item: Item) {
  //   this.itemsCollection.add(item);
  // }
}
