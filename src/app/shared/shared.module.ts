import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./components/table/table.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TableComponent]
})
export class SharedModule {}
