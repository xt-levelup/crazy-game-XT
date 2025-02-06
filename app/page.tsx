import { lazy } from "react";

const Home = lazy(() => {
  return import("@/components/Home");
});

export default function App(): React.ReactElement {
  return (
    <>
      <Home />
    </>
  );
}
