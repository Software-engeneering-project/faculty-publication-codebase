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
import Filter from './components/auth/Filter'
import PaperList from "./components/paperlist";
import Forgotpassword from "./components/auth/forgotpassword";
import Upload from "./components/auth/upload"

import FacultyDashboard from "./components/auth/FacultyDashboard"


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/Filter/:islogged" element={<Filter />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/paperlist" element={<PaperList />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/facultydashboard" element={<FacultyDashboard />} />
          <Route path="/upload" element={<Upload />} />
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