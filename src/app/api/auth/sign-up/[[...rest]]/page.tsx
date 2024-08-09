import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <MaxWidthWrapper className="flex justify-center items-center py-14">
            <SignUp forceRedirectUrl={"/auth-callback"}/>
        </MaxWidthWrapper>
    )
}