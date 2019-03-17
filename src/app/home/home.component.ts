import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { NewsService } from "../services/news.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { INews } from "../shared/interfaces/INews";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  news: INews[] = [];
  newsSubscription: Subscription;

  length;
  pageSize = 8;
  page = 1;

  constructor(
    private newsService: NewsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.newsSubscription = this.newsService
      .getData(
        `top-headlines?country=us&pageSize=${this.pageSize}&page=${this.page}`
      )
      .subscribe((data: INews[]) => {
        this.news = data;
        this.length = data["totalResults"];
      });
  }

  onPageChange(event) {
    console.log(event);
    this.newsSubscription = this.newsService
      .getData(
        `top-headlines?country=us&pageSize=${
          this.pageSize
        }&page=${event.pageIndex + 1}`
      )
      .subscribe((data: INews[]) => {
        this.news = data;
        this.length = data["totalResults"];
      });
  }

  onFavorite(article: INews) {
    console.log(article);

    let items: INews[] = [];
    const val = localStorage.getItem("items");

    if (val !== null) {
      items = JSON.parse(val) as INews[];
    }

    // check if the article already exist in the favourite list
    if (items.indexOf(article) === -1) {
      this.snackBar.open("Added to Favourite Already", "ok", {
        duration: 3000
      });
      return;
    }

    // add article which is not in favourite list already
    items.push(article);
    localStorage.setItem("items", JSON.stringify(items));
    this.snackBar.open("Favorite Added", "ok", {
      duration: 3000
    });
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }
}
