import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFound404Component } from "./core/pages/page-not-found404/page-not-found404.component";
import { PageHomeComponent } from "./core/pages/page-home/page-home.component";
import { PageNewItemComponent } from "./core/pages/page-new-item/page-new-item.component";

const routes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: "new", pathMatch: "full", component: PageNewItemComponent },
  { path: "", pathMatch: "full", component: PageHomeComponent },
  { path: "**", component: PageNotFound404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
