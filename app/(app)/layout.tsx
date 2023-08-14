"use client";
import React from 'react';
import { Frame } from 'react95';
import original from 'react95/dist/themes/original';
import styled from 'styled-components';
import NavBar from '@/components/layout/NavBar';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme } : any) => theme.material};

  #default-buttons button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  #cutout {
    background: ${({ theme }: any) => theme.canvas};
    padding: 1rem;
    width: 300px;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
            
            <Frame style={{width: "100%"}}>
                <main className="flex min-h-screen flex-col">
                {children}
                <NavBar/>
                </main>
            </Frame>
           
     )
}