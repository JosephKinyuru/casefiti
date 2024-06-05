import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <MaxWidthWrapper className="flex justify-center items-center py-14">
            <SignIn/>
        </MaxWidthWrapper>
    )
}