import { Box, Grid, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {


  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      sx={{ minHeight: '100%' }}
      style={{
        background: 'linear-gradient(to right bottom, #f9c4ff, #fff)',
      }}
    >

        {/* background: 'linear-gradient(to bottom, #b5ffe0, #8cc0ff)', */}
        {/* background: 'linear-gradient(to bottom, #73ffc5, #8cc0ff)', */}

      {/* Text and search bar */}
      <Grid size={12} >

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
          component="img"
          sx={{
            width: 60,
            
          }}
          justifyContent="center"
          src={'/promoterlab_icon.png'}
          alt="promoterlab icon"
          mb={2}
          />
        </Box>

      <Typography
          sx={{
            fontSize: { xs: 40, md: 50 },
            mb: 1,
            fontWeight: 500,
          }}
          component="div"
          textAlign="center"
        >
          Promoter Lab
        </Typography>


        <Typography
          sx={{
            fontSize: { xs: 20, md: 28 },
            mb: 5,
            mt: { xs: '-50%', sm: '-50%', md: '0%' },
            fontWeight: 500,
            display: {xs:'none', sm:'none', md:'block'},
            opacity: '80%'
          }}
          component="div"
          textAlign="center"
        >
          Design ligand-inducible promoters for bacteria
        </Typography>


      </Grid>
    </Grid>
  );
}
