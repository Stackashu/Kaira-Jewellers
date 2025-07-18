
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layout/LandingPage";
import Stores from "../pages/Stores";
import Franchise from "../pages/Franchise";
import CustomizeProduct from "../pages/CustomizeProduct";
import FranchiseEnq from "../pages/FranchiseEnq";

import MainCont from "../pages/MainCont";

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
      },
      {
        path: "FranchiseEnq",
        element: <FranchiseEnq />,
      },
    ],
  },
]);

export default router;
