import MainLayout from "components/layouts/mainLayout";
import About from "pages/about";
import Blog from "pages/blog";
import BlogDetails from "pages/blogDetails";
import Checkout from "pages/checkout";
import Contact from "pages/contact";
import Error404 from "pages/error404";
import Faqs from "pages/faqs";
import Home from "pages/home";
import Pricing from "pages/home/pricing";
import Trynow from "pages/tryNow";

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
      path: "trynow",
      element: <Trynow />,
    },
    {
      path: "about-us",
      element: <About />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "faqs",
      element: <Faqs />,
    },
    {
      path: "contact-us",
      element: <Contact />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "blog/:slug",
      element: <BlogDetails />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
  ],
};

export default publicRoute;
