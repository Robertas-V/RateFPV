import { Component, OnInit, Input } from "@angular/core";

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
  selector: "app-cam-info",
  templateUrl: "./cam-info.component.html",
  styleUrls: ["./cam-info.component.less"]
})
export class CamInfoComponent implements OnInit {
  @Input() cameraDet: CameraDetails;

  IsChecked: boolean;
  camera: CameraDetails;

  constructor() {
    //this.IsChecked = true;
    // this.camera = {
    //   ItemName: "Eagle",
    //   lens: { mm17: false, mm18: false, mm21: false, mm25: false }
    // };
  }

  ngOnInit() {
    this.camera = this.cameraDet;
  }
}
