import React, {useState} from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack } from '@mui/material';
import  BlogPostCard  from '../../components/blog/BlogPostCard';

import POSTS from '../../_mocks_/blog';


import Iconify from '../../components/Iconify';


const ContentHomeBlogPage = () => {
    return (
        <div className="content-body section custom-scroll">
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
        </div>
    );
};

export default ContentHomeBlogPage;
