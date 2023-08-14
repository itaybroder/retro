"use client"
 
import * as React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';

import { NavBarProvider } from "@/app/context/NavbarContext";

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
    return (
      <div {...props}>
        <GlobalStyles />
        <ThemeProvider theme={original}>
            <NavBarProvider>
            {children}
            </NavBarProvider>
        </ThemeProvider>
      </div>
    );
  };