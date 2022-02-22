
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Card, Stack, Button, TextField } from '@mui/material';
import { FormikProvider } from 'formik';
import SideHeader from "../components/sideHeader";
import HeaderTwo from "../components/Header/index";

export default function LoginForm() {

  return (
    <div className={'main-wrapper has-side-header'}>
    <HeaderTwo/>
    <SideHeader mobile={false}/>
    <div className="content-body section custom-scroll">
            <div className="section-wrap section"></div>
    <FormikProvider>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <TextField name="title" label="Post Title" />

                <TextField name="description" label="Description" multiline rows={3} />

               
              
                 
                <div>
                
                  <Button fullWidth color="inherit" variant="outlined" size="large">
                Add Image
              </Button>
                </div>
              </Stack>
            </Card>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
            <Button
              variant="contained"
              component={RouterLink}
             to="/gallery"

            >
             Preview
            </Button>
            <Button
              variant="contained"
              component={RouterLink}
             to="/gallery"

            >
             Add
            </Button>
            </Stack>
          </Grid>

      
        </Grid>
      </FormikProvider>
      </div>  </div>  
  );
}
