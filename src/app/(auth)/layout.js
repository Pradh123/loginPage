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

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen w-full bg-[#F7F9FB] flex flex-col lg:flex-row">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center 
                      px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-10">

                {children}

            </div>

            {/* RIGHT SIDE */}
            <div
                className="relative w-full lg:w-1/2 
        hidden lg:flex flex-col justify-between
        rounded-none lg:rounded-tl-[43px] lg:rounded-bl-[43px]
        bg-gradient-to-br 
        from-[#25017D] via-[#43279F] to-[#5834B7]
        overflow-hidden"
            >

                {/* TEXT SECTION */}
                <div className="text-white 
                        px-8 sm:px-12 lg:px-16 xl:px-20
                        pt-14 sm:pt-16 lg:pt-20 xl:pt-24
                        z-10">

                    <h1
                        className={`${inter.className}
            text-[26px] sm:text-[34px] md:text-[40px] 
            lg:text-[46px] xl:text-[56px]
            leading-tight`}
                    >
                        From idea to <br />
                        investment, faster
                    </h1>

                    <p
                        className={`${roboto.className}
            mt-5 sm:mt-6
            text-[14px] sm:text-[16px] md:text-[18px]
            lg:text-[20px] xl:text-[22px]
            leading-relaxed text-white/90
            max-w-[520px]`}
                    >
                        Generate AI pitches, plan milestones, get verified,
                        and connect with the right investors—all in one
                        structured platform.
                    </p>
                </div>

                {/* IMAGE SECTION */}
                <div className="relative w-full 
                        h-[360px] md:h-[420px] 
                        lg:h-[480px] xl:h-[660px] 2xl:h-[1024px]">

                    <Image
                        src="/login.png"
                        fill
                        alt="Working man"
                        className="object-cover object-top scale-x-[-1]"
                        priority
                    />
                </div>

            </div>
        </div>
    );
}
