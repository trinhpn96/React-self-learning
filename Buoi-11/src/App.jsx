import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Videos from "./pages/Videos";
import VideoDetails from "./Component/VideoDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Not Found </h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetails /> },

    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
