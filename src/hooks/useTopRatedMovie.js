import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovie = () => {
  //fetch data from the TMDB APIs
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  const fetchData = async () => {
    const result = await axios(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    if (result.status === 200) {
      dispatch(addTopRatedMovies(result?.data?.results));
    }
  };
  useEffect(() => {
    !topRatedMovies && fetchData();
    //eslint-disable-next-line
  }, []);
};

export default useTopRatedMovie;
