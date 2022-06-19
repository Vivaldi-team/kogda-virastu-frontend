export type TUser = {
  email: string;
  roles?: string[];
  username: string;
  bio?: string;
  image?:string;
  nickname?: string;
  invite?: string;
};

export type TUsers = Array<TUser>;

// Исправлено и переименовано по модели данных сервера
export type TProfile = {
  following: boolean;
  image?: string;
  username: string;
  email: string;
  bio?: string;
  nickname?: string;
};

export type TTags = Array<string>;

export type TArticle = {
  author: TProfile;
  body: string;
  createdAt: string;
  description: string;
  link?: string ;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: TTags;
  title: string;
  updatedAt: string;
  privatePosts?: string;
  state?: string;
};

export type TArticleCore = Omit<TArticle,
'author' |
'createdAt' |
'favorited' |
'favoritesCount' |
'slug' |
'updatedAt'>;

export type TArticles = Array<TArticle>;

export type TComment = {
  id: string;
  body: string;
  createdAt: string;
  author: TProfile;
};

export type TComments = Array<TComment>;

export enum FeedTypes {
  public = 'public',
  private = 'private',
  tags = 'tags',
}
export enum UserArticlesTypes {
  my = 'my',
  favorite = 'favorite',
}
export type TInvite = {
  code: string;
};

export type TCompare = {
  (a: TArticle, b: TArticle): number;
};
