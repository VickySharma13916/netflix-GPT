import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovie = () => {
  //fetch data from the TMDB APIs
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);
  const fetchData = async () => {
    const result = await axios(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    if (result.status === 200) {
      dispatch(addUpcomingMovies(result?.data?.results));
    }
  };
  useEffect(() => {
    !upcomingMovies && fetchData();
    //eslint-disable-next-line
  }, []);
};

export default useUpcomingMovie;
