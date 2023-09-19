import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="px-8 absolute w-full flex justify-between z-10 py-2 bg-gradient-to-b from-black">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="NetflixLogo"
        className="w-52"
      />
      {user && (
        <div className="flex items-center">
          <img
            src={`${
              user
                ? user?.photoURL
                : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }`}
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
