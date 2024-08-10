import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { currentUser, } from "@clerk/nextjs/server"
import Menu from "./MobileMenu/Menu"
import { ArrowRight } from "lucide-react"
import { UserButton } from "@clerk/nextjs"

const Navbar = async () => {

  const user = await currentUser()
  const isAdmin = user?.primaryEmailAddress?.emailAddress === process.env.ADMIN_EMAIL


  return (
    <nav className="fixed md:sticky h-14 inset-x-0 top-0 z-[100] w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link 
                    className="flex z-40 font-semibold" 
                    href="/"
                >
                    case<span className="text-green-600">Fiti</span>
                </Link>

                <Menu isAuth={!!user}/>

                <div className="hidden items-center space-x-4 sm:flex">
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