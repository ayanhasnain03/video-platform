import { BannerHome } from "./banner/banner-home"

export const HomePage = ()=>{
 return (
  <div className="min-h-screen flex w-full items-center  flex-col relative">
   <div className="absolute top-3">
<BannerHome/>

   </div>
  </div>
 )
}
