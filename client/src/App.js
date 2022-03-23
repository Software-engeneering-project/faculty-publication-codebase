import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home'
import Navbar from './components/auth/navbar'
import Filter from './components/auth/Filter'
import Filter1 from "./components/auth/ParentFilter";
import PaperList from "./components/paperlist";


const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />}  />
        <Route path="/Home"  element = {<Home />}/>  
        <Route path="/Navbar"  element = {<Navbar />}/> 
        <Route path="/Filter"  element = {<Filter1 />}/>
        <Route path="/paperlist"  element = {<PaperList />}/>

        </Routes>
      </BrowserRouter>
    </div>   
    )
 }
// const App = () => {
//   let routes = useRoutes([
//     { path: "login", element: <Login /> },
//     { path: "register", element: <Register /> },
//     // ...
//   ]);
//   return routes;
// };

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };
export default App