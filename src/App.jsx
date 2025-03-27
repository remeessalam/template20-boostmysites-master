import { createBrowserRouter } from "react-router-dom";

import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
const AppLayout = lazy(() => import("./Layout/AppLayout"));
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutUsPage = lazy(() => import("./Pages/AboutUsPage"));

const BlogPage = lazy(() => import("./Pages/BlogPage"));
const BlogView = lazy(() => import("./Pages/BlogView"));

const ServicePage = lazy(() => import("./Pages/ServicePage"));
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const Thankyou = lazy(() => import("./Pages/Thankyou"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));

import { LoadingSpinner } from "./Components/Loader";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      // <LoadingSpinner />
      <Suspense fallback={<LoadingSpinner />}>
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <AppLayout />
      </Suspense>
    ),

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/services", element: <ServicePage /> },
      { path: "/services/:title", element: <ServiceDetails /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/thank-you", element: <Thankyou /> },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogView />,
      },
    ],
  },
  {
    path: "/web-development",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <LandingPage page={"web-development"} />
      </Suspense>
    ),
  },
  {
    path: "/app-development",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <LandingPage page={"app-development"} />
      </Suspense>
    ),
  },
]);

export default AppRouter;
