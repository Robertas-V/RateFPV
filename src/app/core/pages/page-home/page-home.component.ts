import { Component, OnInit } from "@angular/core";
import {
  faPlus,
  faMinus,
  faHeart,
  faHeartBroken
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-page-home",
  templateUrl: "./page-home.component.html",
  styleUrls: ["./page-home.component.less"]
})
export class PageHomeComponent implements OnInit {
  title = "Rate FPV";
  faPlus = faPlus;
  faMinus = faMinus;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;

  constructor() {}

  ngOnInit() {}
}
