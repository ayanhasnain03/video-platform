import { PaginationComponent } from "@/components/shared/pagination"
import { VideoCard } from "@/components/ui/video-card"
import { BannerHome } from "@/features/Home/components/banner/banner-home"
import { CategoryHome } from "@/features/Home/components/categories/category-home"

export const HomePage = () => {
 return (
  <div className="min-h-screen flex w-full items-center  flex-col relative">
   <div className=" ">
    <BannerHome />
   </div>
   <div className="mt-8">
    <CategoryHome />
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
    <VideoCard
     thumbnail="/assets/test.avif"
     title="Next.js 13 Full Course 2023 | Build and Deploy a Full Stack App Using the Official React Framework"
     channel="JavaScript Mastery"
     views="1.2M views"
     timestamp="3 months ago"
     duration="4:23:14"
     avatar="/assets/avatar.jpeg"
    />
    <VideoCard
     thumbnail="/assets/test.avif"
     title="React State Management Tutorial | Context API vs Redux vs Zustand"
     channel="Fireship"
     views="450K views"
     timestamp="2 months ago"
     duration="12:45"
     avatar="/assets/avatar.jpeg"
    />
    <VideoCard
     thumbnail="/assets/test.avif"
     title="Building a Modern UI with shadcn/ui and Tailwind CSS"
     channel="ByteGrad"
     views="120K views"
     timestamp="1 month ago"
     duration="28:17"
     avatar="/assets/avatar.jpeg"
    />
    <VideoCard
     thumbnail="/assets/test.avif"
     title="How I Built a SaaS Product in 7 Days"
     channel="Theo - t3.gg"
     views="89K views"
     timestamp="2 weeks ago"
     duration="18:32"
     avatar="/assets/avatar.jpeg"
    />
    <VideoCard
     thumbnail="/assets/test.avif"
     title="The Future of Web Development | AI, WebAssembly, and Edge Computing"
     channel="Vercel"
     views="320K views"
     timestamp="1 month ago"
     duration="45:12"
     avatar="/assets/avatar.jpeg"
    />
    <VideoCard
     thumbnail="/assets/test.avif"
     title="Building a Full Stack App with Next.js, Prisma, and PostgreSQL"
     channel="Code With Antonio"
     views="78K views"
     timestamp="3 weeks ago"
     duration="2:12:45"
     avatar="/assets/avatar.jpeg"
    />
    <VideoCard
     thumbnail="/assets/test.avif"
     title="Learn TypeScript in 50 Minutes - A Crash Course for Beginners"
     channel="Traversy Media"
     views="1.5M views"
     timestamp="1 year ago"
     duration="50:23"
     avatar="/assets/avatar.jpeg"
    />
    <VideoCard
     thumbnail="/assets/test.avif"
     title="How to Build a Portfolio Website with Next.js and Tailwind CSS"
     channel="Web Dev Simplified"
     views="210K views"
     timestamp="5 months ago"
     duration="32:18"
     avatar="/assets/avatar.jpeg"
    />
   </div>

   <div className="p-8">
    <PaginationComponent/>
   </div>
  </div>
 )
}
