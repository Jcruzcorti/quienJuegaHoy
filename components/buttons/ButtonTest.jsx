import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';



export default function ButtonTest() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& > *': {
          m: 0,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group" size="large" color="primary">
        <Button href="/matchToday">HOY</Button>
        <Button href="/matchTomorrow">MAÑANA</Button>
        <Button href="/leagues">LIGAS</Button>
      </ButtonGroup>
    </Box>
  );
}