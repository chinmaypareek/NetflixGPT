import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-16 py-2 pl-12 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={LOGO} alt="Netfix-logo" />
      {user && (
        <div className="flex">
          <img className="w-12 h-12 m-2" src={USER_AVATAR} alt="user icon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
