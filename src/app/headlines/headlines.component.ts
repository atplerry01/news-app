import { Component, OnInit, OnDestroy } from "@angular/core";
import { NewsService } from "../services/news.service";
import { Subscription } from "rxjs";
import { INews } from "../shared/interfaces/INews";

@Component({
  selector: "app-headlines",
  templateUrl: "./headlines.component.html",
  styleUrls: ["./headlines.component.scss"]
})
export class HeadlinesComponent implements OnInit, OnDestroy {
  news: INews[] = [];
  newsSubscription: Subscription;

  categories = [
    "World",
    "Nigeria",
    "Ghana",
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
    "Science"
  ];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category) {
    console.log(category);
    this.getCategoryData(category);
  }

  getCategoryData(category) {
    this.newsSubscription = this.newsService
      .getData(`everything?q=${category.toLowerCase()}`)
      .subscribe((data: INews[]) => {
        this.news = data;
      });
  }

  ngOnDestroy(): void {
    this.newsSubscription.unsubscribe();
  }
}
