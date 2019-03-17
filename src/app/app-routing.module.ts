import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "headlines",
    // component: HeadlinesComponent
    loadChildren: "./headlines/headlines.module#HeadlinesModule"
  },
  {
    path: "sources",
    // component: SourcesComponent,
    loadChildren: "./sources/sources.module#SourcesModule"
  },
  {
    path: "favourites",
    // component: FavoritesComponent,
    loadChildren: "./favourites/favourites.module#FavouritesModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
