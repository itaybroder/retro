"use client"
 
import * as React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
// pick a theme of your choice
import original from 'react95/dist/themes/original';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

export default function Provider({ children, ...props }: any){
    // Your component logic here...
  
    return (
      <div {...props}>
        <GlobalStyles />
        <ThemeProvider theme={original}>
            {children}
        </ThemeProvider>
      </div>
    );
  };