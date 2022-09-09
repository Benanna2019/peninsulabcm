export interface Post {
  author?: Author;
  createdAt?: string;
  excerpt?: string;
  featureImage?: string;
  id: string;
  publishedAt?: string;
  slug?: string;
  body?: string;
  title?: string;
}

export interface Author {
  avatar?: string;
  createdAt?: string;
  name?: string;
}
