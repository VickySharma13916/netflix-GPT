import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PHOTO_URL, SUPPORT_LANGUAGE, USER_AVATAR } from "../utils/constant";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toogleGptSearchView } from "../utils/GptSearchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component will unmount
    return () => unsubscribe();
    //eslint-disable-next-line
  }, []);
  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store.gptSearch.gptSearch);
  const config = useSelector((store) => store.config.lang);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    //toogle my GPT search
    dispatch(toogleGptSearchView());
  };
  const handlelanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="px-4 sm:px-8 md:absolute md:w-full md:flex md:justify-between md:z-50 md:py-2 md:bg-gradient-to-b md:from-black md:bg-transparent bg-blue-600">
      <img
        src={PHOTO_URL}
        alt="NetflixLogo"
        className="w-36 md:ml-0 md:mr-0 mr-auto ml-auto sm:w-52"
      />
      {user && (
        <div className="flex flex-wrap justify-center md:justify-start pb-4 md:pb-0 items-center gap-2">
          {language && (
            <select
              name="language"
              id="language"
              className="px-2 py-1 bg-blue-500 h-10 text-white rounded"
              onChange={(e) => handlelanguageChange(e)}
              value={config}
            >
              {SUPPORT_LANGUAGE?.map((item, index) => (
                <option value={item?.identifier} key={index}>
                  {item?.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-3 py-2 bg-violet-600 text-white rounded font-semibold mr-2"
            onClick={handleGptSearch}
          >
            {language ? "Homepage" : "GPT Search"}
          </button>
          <img
            src={user.photoURL ? user?.photoURL : USER_AVATAR}
            alt="user"
            className="w-8 h-8 rounded-sm"
          />
          <button
            className="text-white ml-1 font-medium"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
