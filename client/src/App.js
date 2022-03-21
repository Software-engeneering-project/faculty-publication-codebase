import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />}  />
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