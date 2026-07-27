import { createBrowserRouter, Link } from "react-router";
import rootlayout from "../layout/rootlayout";
import HomePage from "../pages/HomePage/HomePage";
import TimeLine from "../pages/TimeLine/TimeLine";
import Stats from "../pages/Stats/Stats";
import { IoMdHome } from "react-icons/io";
import FriendsDetails from "../ui/FriendsCard/FriendsDetails";

export const router=createBrowserRouter([
  {
path:'/',
Component:rootlayout,
children:[
  {
    index:true,
    Component:HomePage
  },
  {
path:'/:id',
Component:FriendsDetails
  },
  {
    path:'/timeline',
    Component:TimeLine
  },{
    path:'/stats',
    Component:Stats
  }
],
errorElement: <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center px-6 text-white">

            <div className="text-center">

                {/* Error Code */}
                <h1 className="text-[140px] md:text-[220px] font-black leading-none 
                    bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                    bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="text-3xl md:text-5xl font-bold mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-400 mt-4 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist or may have been moved.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 
                    rounded-full bg-purple-600 hover:bg-purple-700 
                    transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
                >
                    <IoMdHome size={20} />
                    Back to Home
                </Link>

            </div>
        </div>
}
 ])