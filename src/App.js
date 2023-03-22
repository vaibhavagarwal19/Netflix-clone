import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        console.log(userAuth)
        dispatch(
            login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        dispatch(logout())
      }
    })
    return unsubscribe
  },[dispatch])
  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/profile" element={<ProfileScreen/>}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
