import React from "react";
import Layout from "./Layout";
import Userlist from "../components/Userlist";
import { useCheckAdmin } from "../features/authActions";

const Users = () => {
  useCheckAdmin();
  return (
    <Layout>
      <Userlist />
    </Layout>
  );
};

export default Users;
