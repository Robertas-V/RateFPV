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

  fullCategory: string;

  @Input() shortCategory: string;
  @Input() rainbow: number;

  constructor(private itemService: ItemService) {}
  ngOnInit() {
    switch (this.shortCategory) {
      case "ant":
        this.fullCategory = "Anthenas";
        break;
      case "bat":
        this.fullCategory = "Batteries";
        break;
      case "cam":
        this.fullCategory = "Cameras";
        break;
      case "esc":
        this.fullCategory = "Electronic Speed Controers";
        break;
      case "fc":
        this.fullCategory = "Flight Controlers";
        break;
      case "frm":
        this.fullCategory = "Frames";
        break;
      case "mot":
        this.fullCategory = "Motors";
        break;
      case "prop":
        this.fullCategory = "Propellers";
        break;
      case "rx":
        this.fullCategory = "Radio Receivers";
        break;
      case "tx":
        this.fullCategory = "Radio Transmitters";
        break;
      case "vtx":
        this.fullCategory = "Video Transmitters";
        break;
      default:
      // code block
    }
    this.items = this.itemService.getCameras();
  }
}
