
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layout/LandingPage";
import Stores from "../pages/Stores";
import Franchise from "../pages/Franchise";
import CustomizeProduct from "../pages/CustomizeProduct";
import MainCont from "../pages/MainCont";
import GalleryShowCase from "../pages/GalleryShowCase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        index:true,
        element: <MainCont />,
      },
      {
        path: "Gallery",
        element: <GalleryShowCase/>,
      },,
      {
        path: "Stores",
        element: <Stores />,
      },
      {
        path: "Franchise",
        element: <Franchise />,
      },
      {
        path: "Customization",
        element: <CustomizeProduct />,
      }
    ],
  },
]);

export default router;
