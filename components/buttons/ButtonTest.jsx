'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonTest() {
  return (
    <Stack direction="row" spacing={6}>
      <Button href="#">PARTIDOS HOY</Button>
      <Button href="#">PARTIDOS MAÑANA</Button>
      <Button href="#">LIGAS</Button>
    </Stack>
  );
}