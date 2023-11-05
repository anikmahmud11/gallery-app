import { Suspense } from "react";
import "./App.css";
import { PropagateLoader } from "react-spinners";
import routes from "./routes/router";

const SpinnerFallback = () => (
  <div className="lazyLoader">
    <PropagateLoader size={20} color="#072F57" />
  </div>
);

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <SpinnerFallback />
          </div>
        }
      >
        {routes}
      </Suspense>
    </>
  );
}

export default App;
