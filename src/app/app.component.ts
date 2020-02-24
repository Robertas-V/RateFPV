import { Component, OnInit } from "@angular/core";
import {
  faPlus,
  faMinus,
  faHeart,
  faHeartBroken
} from "@fortawesome/free-solid-svg-icons";

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
  constructor() {}

  ngOnInit() {}
}
