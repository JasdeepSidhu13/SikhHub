import { gurdwaraArticlesA } from "./gurdwara-articles-a";
import { gurdwaraArticlesB } from "./gurdwara-articles-b";
import type { ArticleSection } from "./article";

export const gurdwaraArticles: Record<string, ArticleSection[]> = {
  ...gurdwaraArticlesA,
  ...gurdwaraArticlesB,
};
