import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar sx={{position: "static"}}>
        <Toolbar>
          <Typography variant="h6" component={Paper} >
            home
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}