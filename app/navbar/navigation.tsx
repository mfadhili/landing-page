'use client'

import React from 'react';
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Logo from "@/app/navbar/logo";
import {cn} from "@/lib/utils";
import Link from "next/link";

const components: {
    title: string,
    description: string
}[] = [
    {
        title: "Home",
        description: "Return to the homepage",
    },
    {
        title: "About",
        description: "Learn more about our company and mission",
    },
    {
        title: "Products",
        description: "Explore our range of products and services",
    },
    {
        title: "Services",
        description: "Discover the services we offer",
    },
    {
        title: "Contact",
        description: "Get in touch with us",
    },
]


const ListItem = React.forwardRef< React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({classname, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a ref={ref}
                   className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}
                   {...props}
                >
                    <div className={"text-sm font-medium leading-none"}>{title}</div>
                    <p className={"line-clamp-2 text-sm leading-snug text-muted-foreground"}>{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

function Navigation() {
    return (
        <div>
            {/*Navigation bar items*/}
            <NavigationMenu>
                <NavigationMenuList className={"hidden md:flex md:space-x-4"}>
                    {/* Menu Item 1*/}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={"text-base"}>
                            Get Started
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[0.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                            <Logo />
                                            <div className={"mb-2 mt-4 text-lg font-medium"}>
                                                Bird Software
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Designed Components
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>

                                <ListItem href={"/docs"} title={"Introduction"}>
                                    Re-Usable
                                </ListItem>
                                <ListItem href={"/docs/installation"} title={"Installation"} >
                                    How to Install
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Community">
                                    Join the community
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Menu Item 2*/}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={"text-base"}>
                            Components
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/*    Menu Item 3*/}
                    <NavigationMenuItem>
                        <Link href={"/docs"} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <span className={"text-base"}>Documentation</span>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default Navigation;