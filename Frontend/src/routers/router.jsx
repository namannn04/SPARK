import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import LogIn from "../pages/LogIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import Social from "../pages/Social.jsx";
import Projects from "../pages/Projects.jsx";
import Events from "../pages/Events.jsx";
import Communities from "../pages/Communities.jsx";
import Courses from "../pages/Courses.jsx";
import Store from "../pages/Store.jsx";
import Profile from "../pages/Profile.jsx";
import Internships from "../pages/Internships.jsx";
import AboutUs from "../pages/AboutUs.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <LogIn /> },
        { path: "/register", element: <SignUp /> },
        { path: "/social", element: <Social /> },
        { path: "/events", element: <Events /> },
        { path: "/community", element: <Communities /> },
        { path: "/projects", element: <Projects /> },
        { path: "/courses", element: <Courses /> },
        { path: "/store", element: <Store /> },
        { path: "/profile-settings", element: <Profile /> },
        { path: "/internships", element: <Internships /> },
        { path: "/aboutus", element: <AboutUs /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
