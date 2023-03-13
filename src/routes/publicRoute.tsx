import MainLayout from "components/layouts/mainLayout";
import About from "pages/about";
import Contact from "pages/contact";
import Faqs from "pages/faqs";
import Home from "pages/home";

const publicRoute = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
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
