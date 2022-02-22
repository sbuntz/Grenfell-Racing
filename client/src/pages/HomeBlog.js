import React, {useState} from 'react';


import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack } from '@mui/material';
import  BlogPostCard  from '../components/blog/BlogPostCard';

import POSTS from '../_mocks_/blog';


import Iconify from '../components/Iconify';

// File imported
import SideHeader from "../components/SideHeader";
import HeaderTwo from "../components/HeaderTwo/index";

const HomeBlog = () => {
    return (
        <div className={'main-wrapper has-side-header'}>
            <HeaderTwo/>
            <SideHeader mobile={false}/>
            <div className="content-body section custom-scroll">
            <div className="section-wrap section pb-100"></div>
              <Container mb={5}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Button
              variant="contained"
              component={RouterLink}
             to="/add-post"
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
        </div>  
    );
};

export default HomeBlog;
