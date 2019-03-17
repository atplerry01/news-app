import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsItemComponent } from "./compenent/news-item/news-item.component";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [NewsItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, NewsItemComponent]
})
export class SharedModule {}
