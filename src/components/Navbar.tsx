
"use client";

import { Button, Navbar, DarkThemeToggle } from "flowbite-react";

export default function Component() {
  return (
    <Navbar fluid rounded className="w-full sticky top-0 z-50">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="EJDevs Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">EJDevs.com</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Button>Get started</Button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        
      </Navbar.Collapse>
      <DarkThemeToggle />
    </Navbar>
  );
}
