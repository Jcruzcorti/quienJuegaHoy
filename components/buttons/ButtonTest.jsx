import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Link from 'next/link';
import InformationAlert from '../informationAlert/InformationAlert';
import styles from '../../app/page.module.css'


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
        <Link href='/'><Button>HOY</Button></Link>
        <Link href='/manana'><Button>MAÑANA</Button></Link>
        {/* <InformationAlert /> */}
      </ButtonGroup>
    </Box>
  );
}