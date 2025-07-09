import { createBrowserRouter } from "react-router-dom";
import ListInpatient from "./pages/inpatient/list";
import InpatientRegister from "./pages/inpatient/register";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ListInpatient />,
      },
      {
        path: "register-inpatient",
        element: <InpatientRegister />,
      },
    ],
  },
]);

export default router;
