import { Suspense } from "react";
import "../globals.css";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";

export default function MainLayout({ children }) {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
