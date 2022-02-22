import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack } from '@mui/material';
import  BlogPostCard  from '../components/blog/GalleryAddCard';

import posts from '../_mocks_/blog';
import Iconify from '../components/Iconify';
import SideHeader from "../components/sideHeader";
import HeaderTwo from "../components/header";

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
             to="/add-gallery"
              startIcon={<Iconify icon={'eva:plus-fill'} />}
            >
              New Gallery
            </Button>
        </Stack>

      
        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
        </div>
        </div>  
    );
};

export default HomeBlog;
