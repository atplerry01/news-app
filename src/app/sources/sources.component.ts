import { Component, OnInit, OnDestroy } from "@angular/core";
import { NewsService } from "../services/news.service";
import { INews } from "../shared/interfaces/INews";
import { Subscription } from "rxjs";
import { INewsSource } from "../shared/interfaces/INewsSource";

@Component({
  selector: "app-sources",
  templateUrl: "./sources.component.html",
  styleUrls: ["./sources.component.scss"]
})
export class SourcesComponent implements OnInit, OnDestroy {
  news: INews[] = [];
  selected;
  newsSubscription: Subscription;
  newsSourceSubscription: Subscription;

  sources: INewsSource[] = [
    {
      id: "abc-news",
      name: "ABC News"
    },
    {
      id: "abc-news-au",
      name: "ABC News (AU)"
    },
    {
      id: "aftenposten",
      name: "Aftenposten"
    },
    {
      id: "al-jazeera-english",
      name: "Al Jazeera English"
    }
  ];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNewSources();
  }

  onSourceChange() {
    this.getData(this.selected);
  }

  getNewSources() {
    this.newsSubscription = this.newsService
      .getData(`sources`)
      .subscribe(data => {
        this.sources = (data as any).sources as INewsSource[];
        this.selected = this.sources[0].id;
        this.getData(this.selected);
      });
  }

  getData(selected) {
    this.newsSubscription = this.newsService
      .getData(`top-headlines?sources=${selected}`)
      .subscribe((data: INews[]) => {
        this.news = data;
      });
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }
}
