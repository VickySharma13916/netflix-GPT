import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovie = () => {
  //fetch data from the TMDB APIs
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
  const fetchData = async () => {
    const result = await axios(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    if (result.status === 200) {
      dispatch(addNowPlayingMovies(result?.data?.results));
    }
  };
  useEffect(() => {
    !nowPlayingMovies && fetchData();
    //eslint-disable-next-line
  }, []);
};

export default useNowPlayingMovie;
