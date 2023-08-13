"use client";
import { Share } from '@capacitor/share'
import { MenuList, MenuListItem, Separator, styleReset } from 'react95';

export default function Home() {
  
  const share = async () => {
    try{
      await Share.share({
        title: 'Share',
        text: 'Share',
        url: 'https://www.google.com/',
        dialogTitle: 'Share',
      })
    } catch(e){
      console.log(e)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MenuList>
        <MenuListItem>🎤 Sing</MenuListItem>
        <MenuListItem>💃🏻 Dance</MenuListItem>
        <Separator />
        <MenuListItem disabled>😴 Sleep</MenuListItem>
      </MenuList>
      
      <button onClick={()=>share()}>Share</button>
    </main>
  )
}
