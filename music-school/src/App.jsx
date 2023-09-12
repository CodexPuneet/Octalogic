import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminstratorCourses } from "./pages/AdminstratorCourses"
import { Adminstrator } from "./pages/Adminstrator"

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Adminstrator />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />;
    </>
  )
}

export default App



;



