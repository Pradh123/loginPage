import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: ["600"],
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"],
});

const SideImage = () => {
    return (
        <div
            className="relative w-full 
        hidden lg:flex flex-col justify-between
        rounded-none lg:rounded-tl-[43px] lg:rounded-bl-[43px]
        bg-gradient-to-br 
        from-[#25017D] via-[#43279F] to-[#5834B7]
        overflow-hidden"
        >

            {/* TEXT SECTION */}
            <div className="text-white 
                        px-8 md:px-10
                        pt-14 sm:pt-10
                        z-10">

                <h1
                    className={`${inter.className}
            text-[26px] md:text-[24px]
            leading-tight`}
                >
                    From idea to <br />
                    investment, faster
                </h1>

                <p
                    className={`${roboto.className}
            mt-5 sm:mt-6
            text-[14px] md:text-[16px] 
            leading-relaxed text-white/90
            max-w-[520px]`}
                >
                    Generate AI pitches, plan milestones, get verified,
                    and connect with the right investors—all in one
                    structured platform.
                </p>
            </div>

            {/* IMAGE SECTION */}
            <div className="relative w-full lg:h-[480px]  ">
                <Image
                    src="/login.png"
                    fill
                    alt="Working man"
                    className="object-cover object-top scale-x-[-1]"
                    priority
                />
            </div>

        </div>
    )
}

export default SideImage