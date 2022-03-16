function Footer() {
  return (
    <div class="flex flex-col lg:flex-row   sm:h-[248px] lg:h-[108px]   bg-blue-700 p-5">
      <div class="flex  justify-center lg:justify-start lg:pl-[80px]">
        <img class="h-[60px]" src="new-logo.webp" alt="logo" />
      </div>
      <div className="  h-[116px] mx-auto my-auto lg:h-[16px]  mt-[24px] text-sm text-white justify-between align-middle">
        <a href="#" class="hover:text-blue-400">
          Communication&nbsp;&nbsp;&nbsp;{" "}
        </a>
        <a href="#" class="hover:text-blue-400">
          Advertisement&nbsp;&nbsp;&nbsp;{" "}
        </a>
        <a href="#" class="hover:text-blue-400">
          Your Money&nbsp;&nbsp;&nbsp;{" "}
        </a>
        <a href="#" class="hover:text-blue-400">
          Bonues&nbsp;&nbsp;&nbsp;{" "}
        </a>
        <a href="#" class="hover:text-blue-400">
          Terms of Use&nbsp;&nbsp;&nbsp;{" "}
        </a>
        <a href="#" class="hover:text-blue-400">
          Privacy Policy&nbsp;&nbsp;&nbsp;{" "}
        </a>
        <a href="#" class="hover:text-blue-400">
          FAQ{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
