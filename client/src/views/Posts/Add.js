import React from "react";
import { Box } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";
import AddPost  from '../../components/blog/AddPost';
const Dashboard = () => {
  return (
    <React.Fragment>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <AddPost />
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Dashboard;
