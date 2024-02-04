import { Typography , Button, Grid} from '@mui/material';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return <>
        <Grid container spacing={2} sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h1">
            anansi
          </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h4">
            <Link to="/about">
              about
            </Link>
          </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h4">
            <Link to="contact">
              contact
            </Link>
          </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button color="primary" size="large" variant="contained">
              tell a tale
            </Button>
          </Grid>
        </Grid>
    </>
}

export default Navbar