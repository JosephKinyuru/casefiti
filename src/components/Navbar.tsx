import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { UserButton } from "@clerk/nextjs"
import Menu from "./MobileMenu/Menu"

const Navbar = async () => {

  const user = await currentUser()
  const isAdmin = user?.primaryEmailAddress?.emailAddress === process.env.ADMIN_EMAIL

  return (
    <nav className="fixed md:sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinx-200">
                <Link href={"/"} className="flex z-40 font-semibold">
                    case<span className="text-green-600">Fiti</span>
                </Link>

                 <Menu isAuth={!!user}/>

                <div className="hidden h-full  items-center space-x-4 sm:flex">
                    {user ? (
                    <>
                        <UserButton showName/>
                        {isAdmin ? <Link 
                            href={"/dashboard"} 
                            className={buttonVariants({
                                size: 'sm', 
                                variant: 'ghost',
                        })}>
                            Dashboard
                        </Link> : null}
                        <Link 
                            href={"/configure/upload"} 
                            className={buttonVariants({
                                size: 'sm', 
                                className : "hidden sm:flex items-center gap-1",
                        })}>
                            Create case
                            <ArrowRight className="ml-1.5 h-5 w-5"/>
                        </Link>
                    </>
                    ) : (
                        <>
                        <Link 
                            href={"/api/auth/sign-up"} 
                            className={buttonVariants({
                                size: 'sm', 
                                variant: 'ghost',
                        })}>
                            Sign up
                        </Link>
                        <Link 
                            href={"/api/auth/sign-in"} 
                            className={buttonVariants({
                                size: 'sm', 
                                variant: 'ghost',
                        })}>
                            Login
                        </Link>

                        <div className="h-8 w-px bg-zinc-200 hidden sm:block"/>

                        <Link 
                            href={"/configure/upload"} 
                            className={buttonVariants({
                                size: 'sm', 
                                className : "hidden sm:flex items-center gap-1",
                        })}>
                            Create case
                            <ArrowRight className="ml-1.5 h-5 w-5"/>
                        </Link>
                    </>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar