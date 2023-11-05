import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import { Suspense, lazy } from "react";
import { PropagateLoader } from "react-spinners";

const SpinnerFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <h2>Loading ...</h2>
    <PropagateLoader size={20} color="#072F57" />
  </div>
);
const LazyHome = lazy(() => import("../pages/home/Home"));
const LazyProductList = lazy(() =>
  import("../components/ProductList/ProductList")
);
const LazyProductDetail = lazy(() =>
  import("../pages/ProductDetail/ProductDetail")
);
const LazyAbout = lazy(() => import("../pages/About/About"));

const routes = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div>
            <SpinnerFallback />
          </div>
        }
      >
        <LazyHome />
      </Suspense>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Suspense
        fallback={
          <div>
            <SpinnerFallback />
          </div>
        }
      >
        <LazyProductDetail />
      </Suspense>
    ),
  },
  {
    path: "/product-list",
    element: (
      <Suspense
        fallback={
          <div>
            <SpinnerFallback />
          </div>
        }
      >
        <LazyProductList />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense
        fallback={
          <div>
            <SpinnerFallback />
          </div>
        }
      >
        <LazyAbout />
      </Suspense>
    ),
  },
]);

export default routes;
