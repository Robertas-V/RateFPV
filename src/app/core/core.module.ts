import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SearchComponent } from "./search/search.component";
import { PageNotFound404Component } from "./pages/page-not-found404/page-not-found404.component";
import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PageNotFound404Component,
    PageHomeComponent
  ],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
  exports: [HeaderComponent, SearchComponent]
})
export class CoreModule {}
