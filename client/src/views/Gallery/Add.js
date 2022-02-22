import React from "react";
import { Box } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";
import LoginForm  from '../../components/gallery/AddPost';
const Dashboard = () => {
  return (
    <React.Fragment>
       <PageHeader title='Add Gallery Image' />
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <LoginForm />
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Dashboard;
