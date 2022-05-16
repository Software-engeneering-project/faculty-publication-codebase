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
import Faculty_Filter from "./components/auth/Faculty_Filter"
import Filter_public from "./components/auth/filter_public"
import FacultyDashboard from "./components/auth/FacultyDashboard"
import Provide_request from "./components/auth/Provide_request"
import Recently_Access_Papers from "./components/auth/recently_access_papers"
import Saved_papers from "./components/auth/Savedpaper"
import Admin_report from "./components/auth/admin_report"
import Admin from "./components/auth/admin"
import RequestAccess from "./components/auth/RequestAccess";
import Guest_filter from "./components/auth/Guest_Filter"
import Profile from "./components/auth/profile";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/Filter" element={<Filter />} />
          {/* <Route path="/Filter" element={<Filter />} /> */}
          <Route path="/paperlist" element={<PaperList />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/facultydashboard" element={<FacultyDashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/faculty_filter" element = {<Faculty_Filter />}/>
          <Route path="/filter_public" element = {<Filter_public />}/>
          <Route path = "/recently_access_papers" element = {<Recently_Access_Papers/>}/>
          <Route path = "/provide_request" element = {<Provide_request/>}/>
          <Route path = "/saved_papers" element = {<Saved_papers/>}/>
          <Route path = "/admin" element = {<Admin/>}/>
          <Route path = '/profile' element = {<Profile />} />
          <Route path = '/admin_report' element = {<Admin_report />} />
          <Route path = 'requestaccess' element = {<RequestAccess />} />
          <Route path = '/guest_filter' element = {<Guest_filter />} />
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

