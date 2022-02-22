import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Grid, Card, Chip, Stack, Button, TextField, Typography, Autocomplete } from '@mui/material';
import { FormikProvider } from 'formik';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const history = useHistory();
 

  return (
    <FormikProvider>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={1}>
                <TextField name="title" label="Image Title" />

                <TextField name="description" label="Description" multiline rows={3} />

                <div>
                
                  <Button fullWidth color="inherit" variant="outlined" size="large">
                Add Image
              </Button>
                </div>
              </Stack>
            </Card>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <Button fullWidth color="inherit" variant="outlined" size="large">
                Preview
              </Button>
              <LoadingButton fullWidth type="submit" variant="contained" size="large">
                Post
              </LoadingButton>
            </Stack>
          </Grid>

      
        </Grid>
      </FormikProvider>
  );
}
