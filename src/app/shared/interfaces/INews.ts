import { INewsSource } from "./INewsSource";

export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: INewsSource;
  title: string;
  url: string;
  urlToImage: string;
}
