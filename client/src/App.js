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
import Login1 from './components/auth/Login1'
import Filter from './components/auth/Filter'


const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />}  />
        <Route path="/Home"  element = {<Home />}/>  
        <Route path="/Navbar"  element = {<Navbar />}/> 
        <Route path="/Login1"  element = {<Login1 />}/> 
        <Route path="/Filter"  element = {<Filter />}/>
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