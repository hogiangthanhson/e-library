import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Navigation, TopBar } from 'components/Common';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '112px 1fr',
    gridTemplateAreas: `"sidebar header" "sidebar main"`,
    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
  },
  main: {
    gridArea: 'main',
  },
}));

export function AdminLayout() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <TopBar />
      </Box>
      <Box className={classes.sidebar}>
        <Navigation />
      </Box>
      <Box className={classes.main}>
        <Outlet />
      </Box>
    </Box>
  );
}
