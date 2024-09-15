import React from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";
import { useCheckAuth } from "../features/authActions";

const Dashboard = () => {
  useCheckAuth();
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default Dashboard;
