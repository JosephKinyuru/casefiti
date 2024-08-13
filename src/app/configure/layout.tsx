import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Steps from "@/components/Steps"
import { ReactNode } from "react"

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col mt-14 sm:mt-0">
        <Steps/>
        {children}
    </MaxWidthWrapper>
  )
}

export default Layout