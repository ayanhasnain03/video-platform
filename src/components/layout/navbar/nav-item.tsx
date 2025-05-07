"use client"
import { NAV_LINKS } from "@/components/layout/navbar/NAV_LINKS"
import { Fragment } from "react"
const NavItem = () => {
 return (
  <>
   {
    NAV_LINKS?.map((elem) => (
     <ul key={elem.url} className="">

      <li>{elem.label}</li>

     </ul>
    ))
   }
  </>
 )
}

export default NavItem
