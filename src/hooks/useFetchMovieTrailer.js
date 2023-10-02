import axios from "axios";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addVideoTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useFetchMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const result = await axios(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    if (result.status === 200) {
      const video = result?.data?.results;
      const trailer = video?.filter((item) => item.type === "Trailer");
      let trailervideo = trailer.length > 0 ? trailer?.[0] : video?.[0];
      dispatch(addVideoTrailer(trailervideo));
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);
};

export default useFetchMovieTrailer;
