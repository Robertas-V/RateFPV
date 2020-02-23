import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeaderComponent, SearchComponent]
})
export class CoreModule {}
