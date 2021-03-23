const KEY = process.env.REACT_APP_API_KEY;

export interface Request {
  url: string;
  query: string;
  id: string;
  title: string;
}

export const netflix = (lang: string) => {
  return {
    query: "tv",
    id: "home.netflixoriginals",
    title: "Netflix Originals",
    url: `/discover/tv?api_key=${KEY}&language=${lang}&with_networks=213`,
  };
};
const topRated = (lang: string) => {
  return {
    query: "movie",
    id: "home.toprated",
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${KEY}&language=${lang}`,
  };
};

export const action = (lang: string) => {
  return {
    query: "movie",
    id: "home.action",
    title: "Action Movies",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&with_genres=28`,
  };
};
export const comedy = (lang: string) => {
  return {
    query: "movie",
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&with_genres=35`,
    id: "home.comedy",
  };
};
export const horror = (lang: string) => {
  return {
    query: "movie",
    title: "Horror Movies",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&sort_by=popularity.desc&with_genres=27`,
    id: "home.horror",
  };
};

export const romance = (lang: string) => {
  return {
    query: "movie",
    title: "Romances",
    id: "home.romance",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&sort_by=popularity.desc&with_genres=10749`,
  };
};

export const documentary = (lang: string) => {
  return {
    query: "movie",
    id: "home.documentaries",
    title: "Documentaries",
    url: `/discover/movie?api_key=${KEY}&language=${lang}&sort_by=popularity.desc&with_genres=99`,
  };
};
export const EXTEND_ENTRY = (lang: string) => {
  return `api_key=${KEY}&language=${lang}&append_to_response=videos,credits,release_dates,content_ratings
  `;
};

export const requests = (lang: string) => {
  return [
    netflix(lang),
    topRated(lang),
    comedy(lang),
    action(lang),
    horror(lang),
    romance(lang),
    documentary(lang),
  ];
};

export const documentariesSeries = (lang: string) => {
  return {
    query: "tv",
    id: "series.documentaries",
    title: "Documentaries",
    url: `/discover/tv?api_key=${KEY}&language=${lang}&sort_by=popularity.desc&with_genres=99`,
  };
};

export const scifiSeries = (lang: string) => {
  return {
    query: "tv",
    id: "series.scifi",
    title: "horror",
    url: `/discover/tv?api_key=${KEY}&language=${lang}&sort_by=popularity.desc&with_genres=10765`,
  };
};

export const actionSeries = (lang: string) => {
  return {
    query: "tv",
    id: "series.action",
    title: "Action",
    url: `/discover/tv?api_key=${KEY}&language=${lang}&sort_by=popularity.desc&with_genres=10759`,
  };
};

export const comedySeries = (lang: string) => {
  return {
    query: "tv",
    id: "series.comedy",
    title: "Comedy",
    url: `/discover/tv?api_key=${KEY}&language=${lang}&sort_by=popularity.desc&with_genres=35`,
  };
};

export const romanceSeries = (lang: string) => {
  return {
    query: "tv",
    id: "series.romance",
    title: "Romance",
    url: `/discover/tv?api_key=${KEY}&language=${lang}&with_genres=10749`,
  };
};

export const requestsSeries = (lang: string) => {
  return [
    scifiSeries(lang),
    actionSeries(lang),
    romanceSeries(lang),
    documentariesSeries(lang),
    comedySeries(lang),
  ];
};

export const requestMovies = (lang: string) => {
  return [
    topRated(lang),
    horror(lang),
    comedy(lang),
    action(lang),
    romance(lang),
  ];
};

export const SEARCH_MOVIE = `/search/movie?api_key=${KEY}`;
export const SEARCH_TV = `/search/tv?api_key=${KEY}&query=`;
