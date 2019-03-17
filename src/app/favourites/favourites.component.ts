import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { INews } from "../shared/interfaces/INews";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.scss"]
})
export class FavouritesComponent implements OnInit {
  articles: INews[] = [];
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    const val = localStorage.getItem("items");

    if (val !== null) {
      this.articles = JSON.parse(val);
    }
  }

  onUnfavorite(article) {
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(this.articles));
    this.snackBar.open("Favorite Removed", "ok", {
      duration: 3000
    });
  }
}
