import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovie = () => {
  //fetch data from the TMDB APIs
  const dispatch = useDispatch();
  const fetchData = async () => {
    const result = await axios(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    if (result.status === 200) {
      dispatch(addPopularMovies(result?.data?.results));
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);
};

export default usePopularMovie;
