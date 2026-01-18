type LogoProps = {
  customClass?: string;
};

const Logo: React.FC<LogoProps> = ({ customClass }) => {
  return (
    <a href="#home">
      <div
        className={`flex flex-col justify-center items-center ${customClass} `}
      >
        <img
          src="/images/logo/logom2.png"
          alt="Logo icone"
          className="w-14 h-10 sm:w-20 sm:h-14 md:w-22 md:h-18 lg:w-32 lg:h-24"
        />
        {/* <img
          src="/images/logo/justtext.png"
          alt="text-logo"
          className="w-8 sm:w-10 md:w-12 lg:w-16"
        ></img> */}
      </div>
    </a>
  );
};

export default Logo;
