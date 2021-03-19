const KEY = process.env.REACT_APP_API_KEY;

export interface Request {
  url: string;
  query: string;
  id: string;
  title: string;
}

export const NETFLIX_ORIGINALS = (lang: string) => {
  return {
    query: "tv",
    id: "home.netflixoriginals",
    title: "Netflix Originals",
    url: `/discover/tv?api_key=${KEY}&language=${lang}&with_networks=213`,
  };
};
const TOP_RATED = (lang: string) => {
  return {
    query: "movie",
    id: "home.toprated",
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${KEY}&language=${lang}`,
  };
};

export const ACTION_MOVIES = (lang: string) => {
  return {
    query: "movie",
    id: "home.action",
    title: "Action Movies",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&with_genres=28`,
  };
};
export const COMEDY_MOVIES = (lang: string) => {
  return {
    query: "movie",
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&with_genres=35`,
    id: "home.comedy",
  };
};
export const HORROR_MOVIES = (lang: string) => {
  return {
    query: "movie",
    title: "Horror Movies",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&with_genres=27`,
    id: "home.horror",
  };
};

export const ROMANCE_MOVIES = (lang: string) => {
  return {
    query: "movie",
    title: "Romances",
    id: "home.romance",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&with_genres=10749`,
  };
};

export const DOCUMENTARY_MOVIES = (lang: string) => {
  return {
    query: "movie",
    id: "home.documentaries",
    title: "Documentaries",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&with_genres=99`,
  };
};
export const EXTEND_ENTRY = (lang: string) => {
  return `api_key=${KEY}&language=${lang}&append_to_response=videos,credits,release_dates,content_ratings
  `;
};

export const requests = (lang: string) => {
  return [
    NETFLIX_ORIGINALS(lang),
    TOP_RATED(lang),
    COMEDY_MOVIES(lang),
    ACTION_MOVIES(lang),
    HORROR_MOVIES(lang),
    ROMANCE_MOVIES(lang),
    DOCUMENTARY_MOVIES(lang),
  ];
};
export const SEARCH_MOVIE = `/search/movie?api_key=${KEY}`;
export const SEARCH_TV = `/search/tv?api_key=${KEY}&query=`;
