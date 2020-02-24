import { Component, OnInit, Input } from "@angular/core";
import { ItemService } from "src/app/core/services/item/item.service";
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
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.less"]
})
export class TableComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  // items: Item[] = [];
  items: Observable<Item[]>;

  @Input() category: string;

  constructor(private itemService: ItemService) {}
  ngOnInit() {
    console.log(this.category);
    this.items = this.itemService.getCameras();
  }
}
