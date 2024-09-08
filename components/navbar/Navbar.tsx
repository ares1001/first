
// const temporalAsync =() => {
//     return new Promise (( resolve) => {
//         setTimeout(() => {
//             resolve(true);

import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"


const navItems = [
  {path : '/about' , text :"About"},
  {path : '/pricing' , text :"Pricing"},
  {path : '/contact' , text :"Contact"}

]
        
//         }, 2000);
//     })
// }


export const Navbar =  () => {
  
    // await temporalAsync()
  
    return (
    <nav className="flex bg-black text-white p-2 m-2 rounded">

    <Link href="/" className="flex items-center">
    <HomeIcon className="mr-2"/>
    <span>Home</span>
    </Link>
    
    <div className="flex flex-1"> </div>

    {
      navItems.map( navItem=> ( 
<ActiveLink key={navItem.path}{...navItem }/>
       ))
    }

      </nav>
  )
}

