import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Button,
} from '@mui/material';

import { Link } from 'react-router-dom';




export default function NavigationBar() {

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'black',
        }}
        id="top_menu_bar"
      >
        {/* Home section */}

        {/* Logo that links to Home ONLY IN DESKTOP */}
        {/* <Box
          style={{ position: 'absolute', left: 0 }}
        >
          <Button sx={{ marginLeft: { sm: 1, md: 5 } }}>
            <Link to={'/home'}>
              <Box
                component="img"
                sx={{ height: '50px' }}
                src="/promoterLab_logo.png"
                alt="promoterLab_logo"
              />
            </Link>
          </Button>
        </Box> */}


        <Toolbar>
            {/* About section ONLY IN DESKTOP */}
          <Box
            sx={{ display: 'block' }}
          style={{ position: 'absolute', right: 0 }}
          >
            <Grid>
              <Button
                sx={{
                  color: '#fff',
                  marginLeft: 5,
                  marginRight: { sm: 2, md: 5 },
                }}
              >
                <Link
                  to={"/home"}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    textTransform: 'none',
                    fontSize: 18,
                    fontWeight: 400,
                  }}
                >
                  Home
                </Link>
              </Button>

              <Button
                sx={{
                  color: '#fff',
                  marginLeft: 2,
                  marginRight: { sm: 2, md: 8 },
                }}
              >
                <Link
                  to={"/about"}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    textTransform: 'none',
                    fontSize: 18,
                    fontWeight: 300,
                  }}
                >
                  Docs
                </Link>
              </Button>
              </Grid>
          </Box>

          
        </Toolbar>

      </AppBar>



    </>
  );
}
