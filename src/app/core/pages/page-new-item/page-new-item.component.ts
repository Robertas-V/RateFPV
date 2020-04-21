import { Component, OnInit, Input } from "@angular/core";
import { ItemService } from "src/app/core/services/item/item.service";
import { Observable } from "rxjs";

export interface Item {
  name: string;
  mainImageURL: string;
  rating: number;
  raters: number;
}

export interface CameraDetails {
  ItemName: string;
  lens: {
    mm17: boolean;
    mm18: boolean;
    mm21: boolean;
    mm25: boolean;
  };
}

@Component({
  selector: "app-page-new-item",
  templateUrl: "./page-new-item.component.html",
  styleUrls: ["./page-new-item.component.less"]
})
export class PageNewItemComponent implements OnInit {
  item: Item;
  cameraz: CameraDetails;

  constructor(private itemService: ItemService) {
    this.cameraz = {
      ItemName: "Eagle",
      lens: { mm17: false, mm18: false, mm21: false, mm25: false }
    };
  }

  ngOnInit() {
    this.item = {
      name: "Name2",
      mainImageURL: "mainImageURL",
      rating: 150,
      raters: 2
    };
  }

  userSubmit() {
    this.itemService.addItem(this.item);
  }
}
