export interface MovieResponse {
  id: number;
  title: string | null;
  name: string | null;
  original_title: string | null;
  original_name: string | null;
  release_date: string | null;
  first_air_date: string | null;
  adult: string | null;
  overview: string | null;
  credits: any[] | null;
  backdrop_path: string | null;
  poster_path: string | null;
  vote_average: string | null;
  genres: any[] | null;
  created_by: any[] | null;
  episode_run_time: any[] | null;
  number_of_seasons: number | null;
  runtime: number | null;
  videos: any[] | null;
}
