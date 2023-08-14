"use client";
import { Share } from '@capacitor/share'
import { MenuList, MenuListItem, Separator, Button } from 'react95';

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
    <div>
  <MenuList>
        <MenuListItem>🎤 Sing</MenuListItem>
        <MenuListItem>💃🏻 Dance</MenuListItem>
        <Separator />
        <MenuListItem disabled>😴 HEYY</MenuListItem>
      </MenuList>
      
      <Button onClick={()=>share()}>Share</Button>
    </div>
  )
}
