import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
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

export type RootStack = {
  Home: undefined;
  NewsDetails: {
    author?: string;
    publishedAt: string | number | Date;
    title?: string;
    urlToImage?: string;
    content?: string;
    source?: { id?: string; name?: string };
  };
  SelectedCategory: { category: string; categoryName: string };
};

export type SimpleNavigationProp = StackNavigationProp<RootStack>;

export type RootRouteProp<T extends keyof RootStack> = RouteProp<RootStack, T>;
