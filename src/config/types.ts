export interface INewsProps {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  source?: { id?: string; name?: string };
  title?: string;
  url?: string;
  urlToImage?: string;
}

export interface ICategory {
  category: string;
  categoryName: string;
  data: INewsProps[];
}
