import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeadlinesComponent } from "./headlines.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: HeadlinesComponent
  }
];

@NgModule({
  declarations: [HeadlinesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class HeadlinesModule {}
