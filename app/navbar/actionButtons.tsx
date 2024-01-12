import React from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import {AlignJustify} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";




function ActionButtons() {
    return (
        <div>

            <div className="md:hidden ">
                {/*Hamburger Menu*/}
                <Sheet>
                    <SheetTrigger>
                        <AlignJustify />
                    </SheetTrigger>
                     <SheetContent>
                         <SheetHeader>
                             <SheetDescription>
                                 <div className="flex flex-col items-start space-y-4 mt-10 w-full text-lg text-black">
                                     {/*Menu items*/}
                                     <Link href={"/"}>Sign In</Link>
                                     <Link href={"/"}>Get Started</Link>
                                     <Link href={"/"}>Pricing</Link>
                                     <Link href={"/"}>Features</Link>
                                     <Link href={"/"}>Contact Page</Link>
                                     <Link href={"/"}>About</Link>
                                 </div>
                             </SheetDescription>
                         </SheetHeader>
                     </SheetContent>
                </Sheet>
            </div>
            <div className="hidden md:flex md:space-x-4">
                {/*Buttons*/}
                <Button className="text-md" variant={"ghost"}>
                    Sign In
                </Button>
                <Button className={"text-md bg-blue-500"}>
                    Get Started
                </Button>
            </div>
        </div>
    );
}

export default ActionButtons;