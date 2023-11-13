import PropTypes from 'prop-types';

import { CssBaseline, ThemeProvider } from "@mui/material";

import { blueTheme } from "./";

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
} 

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};
