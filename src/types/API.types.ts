import { AxiosPromise } from 'axios';
import {
  TAPIArticle,
  TAPIArticles,
  TAPIAuth,
  TAPIPatchRole,
  TAPIComment,
  TAPIComments, TAPIParamsObject, TAPIPatchArticleData,
  TAPIProfile,
  TAPITags,
  TAPITag,
  TAPIUser,
  TAPIInvite,
  TAPIUsers,
} from '../services/api.types';

export interface IRegisterUser {
  (username: string,
    email: string,
    password: string,
    invite: string,
    nickname: string) : AxiosPromise<TAPIAuth>;
}

export interface ILoginUser {
  (email: string, password: string) : AxiosPromise<TAPIAuth>;
}

export interface IFetchUser {
  () : AxiosPromise<TAPIAuth>;
}

export interface IFetchUsers {
  () : AxiosPromise<TAPIUsers>;
}

export interface IPatchUser {
  ({
    username, roles, email, password, bio, image, nickname,
  }: {
    username?: string,
    roles?: string[];
    email?: string,
    password?: string,
    bio?: string,
    image?:string,
    nickname?: string,
  }) : AxiosPromise<TAPIAuth>;
}

export interface IPatchUserRole {
  ({
    username, roles,
  }: {
    username: string,
    roles?: string[],
  }) : AxiosPromise<TAPIPatchRole>;
}

export interface IFetchArticles {
  (queryParams?: TAPIParamsObject) : AxiosPromise<TAPIArticles>;
}

export interface IFetchArticle {
  (slug: string) : AxiosPromise<TAPIArticle>;
}

export interface IPostArticle {
  (articleData: TAPIPatchArticleData) : AxiosPromise<TAPIArticle>;
}

export interface IDeleteArticle {
  (slug: string) : AxiosPromise<null>;
}

export interface IPatchArticle {
  (slug: string, data: TAPIPatchArticleData,) : AxiosPromise<TAPIArticle>;
}

export interface ILikeArticle {
  (slug: string) : AxiosPromise<TAPIArticle>;
}

export interface IFetchTags {
  () : AxiosPromise<TAPITags>
}

export interface ITag {
  (tag: string) : AxiosPromise<TAPITag>
}

export interface IFetchComments {
  (slug: string) : AxiosPromise<TAPIComments>;
}

export interface IPostComment {
  (slug: string, body: string) : AxiosPromise<TAPIComment>;
}

export interface IDeleteComment {
  (slug: string, id: string) : AxiosPromise<null>;
}

export interface IProfile {
  (username: string) : AxiosPromise<TAPIProfile | null>
}
interface IFetchInvite {
  () : AxiosPromise<TAPIInvite>;
}

export type {
  TAPIArticle,
  TAPIArticles,
  TAPIComment,
  TAPIComments,
  TAPIProfile,
  TAPIInvite,
  TAPITags,
  IFetchInvite,
  TAPIUser,
};
