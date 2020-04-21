import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./components/table/table.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GeneralInfoComponent } from "./components/newItem/general-info/general-info.component";
import { CamInfoComponent } from "./components/newItem/cam-info/cam-info.component";

import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";

@NgModule({
  declarations: [TableComponent, GeneralInfoComponent, CamInfoComponent],
  imports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [TableComponent, GeneralInfoComponent, CamInfoComponent]
})
export class SharedModule {}
