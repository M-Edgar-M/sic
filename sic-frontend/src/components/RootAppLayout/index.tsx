import { Outlet } from "react-router-dom";
import Layout from "../Layout";
import Navbar from "../Navbar";

export default function RootAppLayout() {
  // TODO: needs to be deleted
  return (
    <nav>
      <Outlet />
      <Layout>dsfsd</Layout>
    </nav>
  );
}
