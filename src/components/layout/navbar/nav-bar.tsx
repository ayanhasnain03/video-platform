import NavItem from "@/components/layout/navbar/nav-item"
import NavSubItem from "@/components/layout/navbar/nav-sub-item"

export const NavBar = ()=>{
 return <nav className="flex items-center justify-between pt-2 px-2">
<div>
<h1 className="text-3xl font-semibold">LogoIpsum</h1>
</div>

<div className="flex items-center space-x-2">
 <NavItem/>
</div>
<div className="flex items-center space-x-2">
<NavSubItem/>
</div>
 </nav>
}
