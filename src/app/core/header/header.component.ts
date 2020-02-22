import { Component, OnInit } from "@angular/core";
import {
  faUserAstronaut,
  faMedal,
  faListUl,
  faListAlt,
  faSignInAlt,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
  faUserAstronaut = faUserAstronaut;
  faMedal = faMedal;
  faListUl = faListUl;
  faListAlt = faListAlt;
  faSignInAlt = faSignInAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;
  constructor() {}

  ngOnInit() {}
}
