import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/core/services/item/item.service";
import { Observable } from "rxjs";

export interface Item {
  name: string;
  mainImageURL: string;
  rating: number;
  raters: number;
}

@Component({
  selector: "app-page-new-item",
  templateUrl: "./page-new-item.component.html",
  styleUrls: ["./page-new-item.component.less"]
})
export class PageNewItemComponent implements OnInit {
  item: Item;

  constructor(private itemService: ItemService) {}

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
