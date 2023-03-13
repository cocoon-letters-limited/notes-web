import MainLayout from "components/layouts/mainLayout";
import About from "pages/about";
import Contact from "pages/contact";
import Error404 from "pages/error404";
import Faqs from "pages/faqs";
import Home from "pages/home";

const publicRoute = {
  path: "/",
  element: <MainLayout />,
  errorElement: <Error404 />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about-us",
      element: <About />,
    },
    {
      path: "faqs",
      element: <Faqs />,
    },
    {
      path: "contact-us",
      element: <Contact />,
    },
  ],
};

export default publicRoute;
