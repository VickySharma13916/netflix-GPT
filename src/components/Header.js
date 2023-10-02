import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { PHOTO_URL, USER_AVATAR } from "../utils/constant";

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
  return (
    <div className="px-8 absolute w-full flex justify-between z-50 py-2 bg-gradient-to-b from-black">
      <img src={PHOTO_URL} alt="NetflixLogo" className="w-52" />
      {user && (
        <div className="flex items-center">
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
