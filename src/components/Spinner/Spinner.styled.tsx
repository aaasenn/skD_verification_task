import styled from 'styled-components';
import { CircularProgress, CircularProgressProps } from '@mui/material';

export const Spinner = styled(CircularProgress)<CircularProgressProps>`
  svg {
    color: white;
  }
`