import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SearchComponent } from "./search/search.component";
import { PageNotFound404Component } from "./pages/page-not-found404/page-not-found404.component";
import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { SharedModule } from "../shared/shared.module";
import { PageNewItemComponent } from "./pages/page-new-item/page-new-item.component";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PageNotFound404Component,
    PageHomeComponent,
    PageNewItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [HeaderComponent, SearchComponent]
})
export class CoreModule {}
