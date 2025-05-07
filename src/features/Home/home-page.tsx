import { BannerHome } from "@/features/Home/components/banner/banner-home"
import {CategoryHome} from "@/features/Home/components/categories/category-home"

export const HomePage = ()=>{
 return (
  <div className="min-h-screen flex w-full items-center  flex-col relative">
   <div className=" ">
<BannerHome/>
   </div>
   <div className="mt-8">
<CategoryHome/>
   </div>
  </div>
 )
}
