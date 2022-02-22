import React from "react";
import { PageBody, PageHeader } from "../../components";
import  MainLayout from "../../layouts/MainLayout";

import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import  BlogPostCard  from '../../components/gallery/BlogPostCard';

import POSTS from '../../_mocks_/blog';


import Iconify from '../../components/Iconify';

const Posts = () => {
  return (
    <React.Fragment>
      <PageHeader title='Gallery' />
      <PageBody style={{ display: "flex" }}>
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Button
              variant="contained"
              component={RouterLink}
             to="/galleryadd"
              startIcon={<Iconify icon={'eva:plus-fill'} />}
            >
             ADD IMAGE
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
