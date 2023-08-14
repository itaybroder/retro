"use client"
import React, { FC } from "react";
import { Button, Frame } from "react95";
import { useRouter } from 'next/navigation';
import { useNavbar } from "@/app/context/NavbarContext";
interface IProps {};

const NavBar:FC<IProps> = (props) => {
    const router = useRouter();

    const handleClick = (path: string) => {
        router.push(path);
    }

    return (
        <div className="fixed bottom-0 right-0 w-full p-2">
            <div className="flex flex-row justify-between">
                <Button style={{width: "20%", height: "50px"}} onClick={() => handleClick('/home')}>
                    <img src="/icons/home.png" width={25} height={25} alt="heart" />
                </Button>
                <Button style={{width: "20%", height: "50px"}} onClick={() => handleClick('/explore')}>
                    <img src="/icons/explore.png" width={25} height={25} alt="heart" />
                </Button>
                <Button style={{width: "20%", height: "50px"}} onClick={() => handleClick('/camera')}>
                    <img src="/icons/vid-camera.png" width={30} height={30} alt="camera" />
                </Button>
                <Button style={{width: "20%", height: "50px"}} onClick={() => handleClick('/page4')}> 
                    <img src="/icons/heart.png" width={25} height={25} alt="heart" />
                </Button>
                <Button style={{width: "20%", height: "50px"}} onClick={() => handleClick('/page5')}>
                    <img src="/icons/profile.png" width={25} height={25} alt="heart" />
                </Button>
            </div>
        </div>
    )
};

export default NavBar;