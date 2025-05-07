"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MenuBar } from "@/components/ui/bottom-menu"
import { Compass, Grid, Home, List, PlusSquare, Settings, TrendingUp } from "lucide-react"

const menuItems = [
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <Home />
    ),
    label: "Home",
    link: "/home"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <Compass />
    ),
    label: "Explore",
    link: "/explore"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <PlusSquare />
    ),
    label: "Create",
    link: "/create"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <TrendingUp />
    ),
    label: "Trending",
    link: "/trending"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
     <Grid />
    ),
   label: "Categories",
    link: "/categories"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <Avatar className="w-6 h-6 bg-contain rounded-full">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    label: "Profile",
    link: "/profile"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <Settings />
    ),
    label: "Settings",
    link: "/settings"
  }
]

function MenuBarDemo() {
  return (
    <div className="flex items-center justify-center  md:hidden w-full bg-black">
      <MenuBar
        items={menuItems.map(item => ({
          ...item,
          icon: (props: React.SVGProps<SVGSVGElement>) => (
            <a
              href={item.link}
              className="flex justify-center items-center w-full h-full group"
              aria-label={item.label}
            >
              <item.icon {...props} className="group-hover:text-primary transition-colors" />
            </a>
          )
        }))}
      />
    </div>
  )
}

export { MenuBarDemo }
