import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Paper } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar sx={{position: "static"}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Paper} >
            home
          </Typography>
          <Button sx={{color: "inherit"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}