import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe will be called when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    //Togggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 pl-12 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netfix-logo" />

      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-green-400 text-white rounded-md hover:bg-green-500"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          {/* <img
            className="hidden md:block w-12 h-12"
            src={USER_AVATAR}
            alt="user icon"
          /> */}
          <button
            onClick={handleSignOut}
            className="px-4 py-2 mx-4 my-2 bg-red-600 text-white rounded sm:font-bold "
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
