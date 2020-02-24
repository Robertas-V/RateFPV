import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  faPlus,
  faMinus,
  faHeart,
  faHeartBroken
} from "@fortawesome/free-solid-svg-icons";
import { ItemService } from "./core/services/item/item.service";
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
export class AppComponent implements OnInit {
  title = "Rate FPV";
  faPlus = faPlus;
  faMinus = faMinus;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;

  // items: Item[] = [];
  items: Observable<Item[]>;
  constructor(private itemService: ItemService) {}
  ngOnInit() {
    this.items = this.itemService.getCameras();
    // this.itemService.getCameras().subscribe((res: Item[]) => {
    //   res.map(e => {
    //     return {
    //       name: e.name,
    //       mainImageURL: e.mainImageURL,
    //       rating: e.rating,
    //       raters: e.raters
    //     } as Item;
    //   });
    // });
  }
}
