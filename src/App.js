import React, { useEffect } from "react";
import Header from "./Header.js";
import "./App.css";
import Sidebaar from "./Sidebaar.js";
import Feed from "./Feed.js";
import { useSelector } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase.js";
import { useDispatch } from "react-redux";
import Widgets from "./Widgets.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebaar />
          <Feed />
          <Widgets />
          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
