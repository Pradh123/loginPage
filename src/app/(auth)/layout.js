import SideImage from "@/components/SideImage";

export default function AuthLayout({ children }) {
    
  return (
    <div className="min-h-screen w-full bg-[#F7F9FB] flex items-center justify-center ">
      {/* Main Box */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <div className="w-full px-4 lg:w-1/2 flex items-center justify-center  md:px-14 lg:px-16 xl:px-20 py-10">
          {children}
        </div>
        {/* RIGHT SIDE */}
        <div className="hidden lg:block lg:w-1/2 h-full">
          <SideImage />
        </div>

      </div>

    </div>
  );
}
