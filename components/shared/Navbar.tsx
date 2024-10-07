"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/aceternity/NavbarMenu";
import { cn } from "@/utils/cn";
import MobileNav from "./MobileNav";
import { Home, Laptop2, Mail, NotebookText, Share2, User } from "lucide-react";
import FullScreenToggle from "./FullScreenToggle";
import ThemeToggle from "./ThemeToggle";
import ShareButton from "../ShareButton";
import { LinkTransition } from "next-link-transition";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navigationbar />
    </div>
  );
}

function Navigationbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="z-[50] fixed top-0 w-full h-20 border-b backdrop-blur-md md:bg-white/[0.6] md:dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]">
      <div
        className={cn(
          "fixed inset-x-0 max-w-6xl max-xl:px-10 max-xs:px-5 mx-auto pt-1 z-50",
          className
        )}
      >
        <div className="flex justify-between items-center">
          <LinkTransition href="/">
            <h1 className="font-bold text-4xl max-md:py-4 text-black-100 dark:text-white">
              Rohit.
            </h1>
          </LinkTransition>

          <div className="hidden md:flex">
            <Menu setActive={setActive}>
              <LinkTransition href="/">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Home"
                  img={<Home size={18} />}
                ></MenuItem>
              </LinkTransition>

              <LinkTransition href="/about">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="About"
                  img={<User size={18} />}
                ></MenuItem>
              </LinkTransition>

              <LinkTransition href="/projects">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Projects"
                  img={<Laptop2 size={18} />}
                >
                  <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                      title="Prescripto"
                      href=" https://github.com/imrohitsampannavar45/Prescripto.git"
                      src= "https://private-user-images.githubusercontent.com/88710389/374110495-07f43e79-d568-424a-b743-6a819837a98b.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgyOTU2MjgsIm5iZiI6MTcyODI5NTMyOCwicGF0aCI6Ii84ODcxMDM4OS8zNzQxMTA0OTUtMDdmNDNlNzktZDU2OC00MjRhLWI3NDMtNmE4MTk4MzdhOThiLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDEwMDIwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAyNTUzNjAzNjUwNDEwYTBmODY1OWFiNjExMTNjOGMzZTU4Y2Y0N2UzOTk5ZDRjNDRiMTIxNThhM2YzYjcyMTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.I7IpgayQxT8IYjtfJNGiG-kx0MktVszMHSvJhCeYWEI"
                      description=" Prescripto is an online appointment booking platform designed for doctors and hospital "
                    />
                    <ProductItem
                      title="Food Delivery"
                      href="https://github.com/imrohitsampannavar45/Food_Delievery_Tomato.git"
                      src="https://private-user-images.githubusercontent.com/88710389/325232745-b1ed80de-7e4d-42cc-9729-2dfde8f13892.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgyOTU4MjUsIm5iZiI6MTcyODI5NTUyNSwicGF0aCI6Ii84ODcxMDM4OS8zMjUyMzI3NDUtYjFlZDgwZGUtN2U0ZC00MmNjLTk3MjktMmRmZGU4ZjEzODkyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDEwMDUyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU1ODA1OGY0MzczM2I3YmMxMjMwNmUxODEyZGRlN2I2ZDBmNjk0YTUxODU4N2VmMzNkZDIxMzc5NTAyOWM2Y2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.FjulwFuIq7PMbjhOCarDwq5kQeHTTGMa-Uol9tn550M"
                      description="A driven Plarform for Food Delivery using reactjs and Mongodb"
                    />
                    <ProductItem
                      title="Blogger Websites"
                      href="https://github.com/imrohitsampannavar45/Blogger-Website-NextJS.git"
                      src="https://i.ytimg.com/vi/HdWCh_4XE1Q/maxresdefault.jpg"
                      description="A NextJS 14 website for writing blogs and posting and deleting and updating with category of blogs"
                    />
                    <ProductItem
                      title="Portfolio"
                      href="https://github.com/imrohitsampannavar45/Nextjs-Portfolio.git"
                      src="https://private-user-images.githubusercontent.com/88710389/374125993-f3f17383-b818-44ee-803f-4b2c543b1482.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgyOTYwOTYsIm5iZiI6MTcyODI5NTc5NiwicGF0aCI6Ii84ODcxMDM4OS8zNzQxMjU5OTMtZjNmMTczODMtYjgxOC00NGVlLTgwM2YtNGIyYzU0M2IxNDgyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDEwMDk1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMzN2UyNmViMzk1OWJmYWIyYzY5OGZkMTMzMDIzMzAzZGY0YmQ4YjAzZmRmYTliZGIwMjhhYmRlOThhZGY4NDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.A3i-H_QSl4wqeQQi1jBkGQa0MqP_2xJA5HWlcpZTeOM"
                      description="A Personal Portfolio using Next js and Magic UI"
                    />
                  </div>
                </MenuItem>
              </LinkTransition>

              <LinkTransition href="#contact">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Contact"
                  img={<Mail size={18} />}
                >
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="https://www.linkedin.com/in/rohitvs1/">
                      LinkedIn
                    </HoveredLink>
                    <HoveredLink href="https://github.com/imrohitsampannavar45">
                      Github
                    </HoveredLink>
                    <HoveredLink href="https://x.com/RohitSampanna12">
                      Twitter
                    </HoveredLink>
                    <div className="w-full h-[1px] bg-slate-500"></div>
                    <HoveredLink href="#contact">Contact Now</HoveredLink>
                  </div>
                </MenuItem>
              </LinkTransition>

              <LinkTransition href="/blogs">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Blogs"
                  img={<NotebookText size={18} />}
                ></MenuItem>
              </LinkTransition>
            </Menu>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <FullScreenToggle />
            <ThemeToggle />
            <ShareButton className="max-sm:hidden" />
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
