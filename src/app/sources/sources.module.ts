import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SourcesComponent } from "./sources.component";

const routes: Routes = [
  {
    path: "",
    component: SourcesComponent
  }
];

@NgModule({
  declarations: [SourcesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SourcesModule {}
