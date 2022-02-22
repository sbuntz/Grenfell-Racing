import React from "react";
import { PageBody, PageHeader } from "../../components";
import  MainLayout from "../../layouts/MainLayout";
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import  BlogPostCard  from '../../components/blog/BlogPostCard';

import POSTS from '../../_mocks_/blog';


import Iconify from '../../components/Iconify';

const Posts = () => {
  return (
    <React.Fragment>
      <PageHeader title='Blogs' />
      <PageBody style={{ display: "flex" }}>
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Button
              variant="contained"
              component={RouterLink}
             to="/postadd"
              startIcon={<Iconify icon={'eva:plus-fill'} />}
            >
              New Post
            </Button>
        </Stack>

      
        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
      </PageBody>
    </React.Fragment>
  );
};

export default Posts;
