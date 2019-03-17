import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { FavouritesComponent } from "./favourites.component";

const routes: Routes = [
  {
    path: "",
    component: FavouritesComponent
  }
];

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class FavouritesModule {}
