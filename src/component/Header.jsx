import * as React from 'react';
import { styled, } from '@mui/material/styles';
import {AppBar} from '@mui/material/';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';;
import { useFetchUsers } from '../hooks/useFetchUsers';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function Header() {
    const {searcher} = useFetchUsers();
  return (
    <Box >
      <AppBar
            position="static"
            sx={{
                backgroundColor : '#174d82',

                }}
        > 
        <StyledToolbar>
        
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{alignSelf: 'center' }}
          >
            ARIDO SOFTWARE
          </Typography>
        </StyledToolbar>
        
      </AppBar>
    </Box>
  );
}