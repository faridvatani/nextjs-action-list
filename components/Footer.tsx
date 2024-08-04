import Image from "next/image";

function Footer() {
  return (
    <footer className="bottom-0 sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">&copy; 2024 Anime Magic</p>
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <div className="hover:bg-rose-500 p-2 rounded-full">
          <Image
            src="/assets/tiktok.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain cursor-pointer"
          />
        </div>
        <div className="hover:bg-rose-500 p-2 rounded-full">
          <Image
            src="/assets/instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain cursor-pointer"
          />
        </div>

        <div className="hover:bg-rose-500 p-2 rounded-full">
          <Image
            src="/assets/twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
