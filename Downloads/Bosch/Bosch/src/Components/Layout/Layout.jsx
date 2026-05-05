import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/AR/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <Footer/>

    </div>
  )
}