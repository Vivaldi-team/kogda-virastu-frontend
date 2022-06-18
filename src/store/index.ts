import {
  setTitle,
  setDescription,
  setBody,
  setTags,
  setArticle,
  resetArticle,
  setImage,
} from './articleFormSubSlice';

import {
  changeEmailLogin,
  changePasswordLogin,
  resetFormLogin,
} from './loginFormSubSlice';

import {
  changeUsernameRegister,
  changeEmailRegister,
  changePasswordRegister,
  changeConfirmPasswordRegister,
  changeNicknameRegister,
  changeInviteCodeRegister,
  resetFormRegister,
} from './registerFormSubSlice';

import {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
  setNicknameProfile,
  setFormProfile,
  setPasswordProfile,
  ConfirmPasswordProfile,
  resetFormProfile,

} from './profileFormSubSlice';

import {
  setAllArticles,
  setAllArticlesCount,
  setAllTags,
  clearArticles,
  clearTags,
  clearAll,
  setAllThemes,
  setAllVocabularies,
} from './allSlice';

import { setUser, clearUser } from './userSlice';

import { setComment, resetComment } from './commentFormSubSlice';

import {
  setFeedType,
  setViewFeed,
  setViewPrivateFeed,
  clearViewFeed,
  setFeedCount,
  setViewTags,
  clearViewTags,
  setViewArticle,
  clearViewArticle,
  setSelectedTags,
  clearSelectedTags,
  setFollowTags,
  setViewCommentsFeed,
  clearViewCommentsFeed,
  selectViewComment,
  clearViewComment,
  setPage,
  setPageLimit,
  clearView,
  setViewProfile,
  clearViewProfile,
  setTag,
  clearTag,
  setArtistProfile,
  clearPage,
  setTopFeed,
  clearTopFeed,
} from './viewSlice';

import {
  setSuccessMessage,
  setErrorMessage,
  userRegistrationRequested,
  userRegistrationSucceeded,
  userRegistrationFailed,
  userLoginRequested,
  userLoginSucceeded,
  userLoginFailed,
  userFetchRequested,
  userFetchSucceeded,
  userFetchFailed,
  userPatchRequested,
  userPatchSucceeded,
  userPatchFailed,
  publicFeedRequested,
  publicFeedSucceeded,
  publicFeedFailed,
  articleFetchRequested,
  articleFetchSucceeded,
  articleFetchFailed,
  privateFeedRequested,
  privateFeedSucceeded,
  privateFeedFailed,
  articlePostRequested,
  articlePostSucceeded,
  articlePostFailed,
  articleDeleteRequested,
  articleDeleteSucceeded,
  articleDeleteFailed,
  articlePatchRequested,
  articlePatchSucceeded,
  articlePatchFailed,
  likeArticlePostRequested,
  likeArticlePostSucceeded,
  likeArticlePostFailed,
  likeArticleDeleteRequested,
  likeArticleDeleteSucceeded,
  likeArticleDeleteFailed,
  publishArticlePostRequested,
  publishArticlePostSucceeded,
  publishArticlePostFailed,
  declineArticlePostRequested,
  declineArticlePostSucceeded,
  declineArticlePostFailed,
  tagsFetchRequested,
  tagsFetchSucceeded,
  tagsFetchFailed,
  commentsFetchRequested,
  commentsFetchSucceeded,
  commentsFetchFailed,
  commentPostRequested,
  commentPostSucceeded,
  commentPostFailed,
  commentDeleteRequested,
  commentDeleteSucceeded,
  commentDeleteFailed,
  profileFetchRequested,
  profileFetchSucceeded,
  profileFetchFailed,
  setProfileFetchNotFound,
  clearProfileFetchNotFound,
  followProfilePostRequested,
  followProfilePostSucceeded,
  followProfilePostFailed,
  followProfileDeleteRequested,
  followProfileDeleteSucceeded,
  followProfileDeleteFailed,
  allPostsRequested,
  allPostsRequestSucceeded,
  allPostsRequestFailed,
  setArticleFetchNotFound,
  clearArticleFetchNotFound,
  clearErrorMessage,
  clearErrorObject,
  clearSuccessMessage,
  setErrorObject,
  settingsPatchFailed,
  settingsPatchRequested,
  settingsPatchSucceeded,
  settingsResetUpdateSucceeded,
  articleDeleteClear,
  articlePatchClear,
  articlePostClear,
  followTagRequested,
  followTagSucceeded,
  followTagFailed,
  followTagsFetchRequested,
  followTagsFetchSucceeded,
  followTagsFetchFailed,
  unfollowTagRequested,
  unfollowTagSucceeded,
  unfollowTagFailed,
} from './apiSlice';

import {
  onLogin,
  onLogout,
  setTheme,
  setLanguage,
  openMenu,
  closeMenu,
  openConfirm,
  closeConfirm,
} from './systemSlice';

export {
  setTheme,
  setLanguage,
  setAllThemes,
  setAllVocabularies,
  clearPage,
  setArtistProfile,
  setFeedType,
  setTag,
  clearTag,
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetArticle,
  changeEmailLogin,
  changePasswordLogin,
  resetFormLogin,
  changeUsernameRegister,
  changeEmailRegister,
  changePasswordRegister,
  changeConfirmPasswordRegister,
  changeNicknameRegister,
  changeInviteCodeRegister,
  resetFormRegister,
  setUsernameProfile,
  setNicknameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
  setFormProfile,
  setPasswordProfile,
  ConfirmPasswordProfile,
  resetFormProfile,
  setAllArticles,
  setAllArticlesCount,
  setAllTags,
  clearArticles,
  clearTags,
  clearAll,
  setUser,
  clearUser,
  setViewFeed,
  setViewPrivateFeed,
  clearViewFeed,
  setTopFeed,
  clearTopFeed,
  setFeedCount,
  setViewTags,
  clearViewTags,
  setViewArticle,
  clearViewArticle,
  setSelectedTags,
  clearSelectedTags,
  setFollowTags,
  setViewCommentsFeed,
  clearViewCommentsFeed,
  selectViewComment,
  clearViewComment,
  setViewProfile,
  clearViewProfile,
  setPage,
  setPageLimit,
  clearView,
  setSuccessMessage,
  setErrorMessage,
  userRegistrationRequested,
  userRegistrationSucceeded,
  userRegistrationFailed,
  userLoginRequested,
  userLoginSucceeded,
  userLoginFailed,
  userFetchRequested,
  userFetchSucceeded,
  userFetchFailed,
  userPatchRequested,
  userPatchSucceeded,
  userPatchFailed,
  publicFeedRequested,
  publicFeedSucceeded,
  publicFeedFailed,
  articleFetchRequested,
  articleFetchSucceeded,
  articleFetchFailed,
  privateFeedRequested,
  privateFeedSucceeded,
  privateFeedFailed,
  articlePostRequested,
  articlePostSucceeded,
  articlePostFailed,
  articleDeleteRequested,
  articleDeleteSucceeded,
  articleDeleteFailed,
  articlePatchRequested,
  articlePatchSucceeded,
  articlePatchFailed,
  likeArticlePostRequested,
  likeArticlePostSucceeded,
  likeArticlePostFailed,
  likeArticleDeleteRequested,
  likeArticleDeleteSucceeded,
  likeArticleDeleteFailed,
  publishArticlePostRequested,
  publishArticlePostSucceeded,
  publishArticlePostFailed,
  declineArticlePostRequested,
  declineArticlePostSucceeded,
  declineArticlePostFailed,
  tagsFetchRequested,
  tagsFetchSucceeded,
  tagsFetchFailed,
  commentsFetchRequested,
  commentsFetchSucceeded,
  commentsFetchFailed,
  commentPostRequested,
  commentPostSucceeded,
  commentPostFailed,
  commentDeleteRequested,
  commentDeleteSucceeded,
  commentDeleteFailed,
  profileFetchRequested,
  profileFetchSucceeded,
  profileFetchFailed,
  setProfileFetchNotFound,
  clearProfileFetchNotFound,
  followProfilePostRequested,
  followProfilePostSucceeded,
  followProfilePostFailed,
  followProfileDeleteRequested,
  followProfileDeleteSucceeded,
  followProfileDeleteFailed,
  onLogin,
  onLogout,
  setArticle,
  setImage,
  setComment,
  resetComment,
  openMenu,
  closeMenu,
  allPostsRequested,
  allPostsRequestSucceeded,
  allPostsRequestFailed,
  openConfirm,
  closeConfirm,
  setArticleFetchNotFound,
  clearArticleFetchNotFound,
  clearErrorMessage,
  clearErrorObject,
  clearSuccessMessage,
  setErrorObject,
  settingsPatchFailed,
  settingsPatchRequested,
  settingsPatchSucceeded,
  settingsResetUpdateSucceeded,
  articleDeleteClear,
  articlePatchClear,
  articlePostClear,
  followTagRequested,
  followTagSucceeded,
  followTagFailed,
  followTagsFetchRequested,
  followTagsFetchSucceeded,
  followTagsFetchFailed,
  unfollowTagRequested,
  unfollowTagSucceeded,
  unfollowTagFailed,
};
