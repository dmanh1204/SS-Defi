import icons from "../../../../assets/icons";
import { useNavigate } from "react-router-dom";
import route from "../../../../routes/route";

const HomepageFooter = (props: any) => {
  const navigation = useNavigate();
  return (
    <div
      style={{ background: "rgba(28, 26, 45, 0.6)" }}
      className="fix bottom-0 w-screen items-center border-t-[0.5px] border-[#C6C6C6]"
    >
      <div className="flex flex-col gap-10 px-[31px] py-20 md:mx-[60px] min-[1440px]:mx-[98px] min-[1440px]:flex-row min-[1440px]:justify-between">
        <div className="flex flex-col gap-10">
          <FooterHeading navigation={navigation} />
          <div className="flex justify-center md:hidden">
            <SocialCard />
          </div>
        </div>
        <div className="flex w-full justify-center gap-[99px] md:justify-between md:gap-0 min-[1440px]:hidden">
          <MoreAbout />
          <Products />
          <div className="hidden flex-col gap-4 md:flex">
            <div className="font-['Exo_2'] text-base font-bold text-white min-[1440px]:text-xl">
              Community
            </div>
            <SocialCard />
          </div>
        </div>
        <div className="hidden min-[1440px]:flex">
          <MoreAbout />
        </div>
        <div className="hidden min-[1440px]:flex">
          <Products />
        </div>
        <div className="hidden flex-col gap-6 min-[1440px]:flex">
          <div className="font-['Exo_2'] text-base font-bold text-white min-[1440px]:text-xl">
            Community
          </div>
          <SocialCard />
        </div>
      </div>
    </div>
  );
};

const MoreAbout = () => {
  const subItemList = [
    "About us",
    "Contact us",
    "FAQ",
    "Brand Kit",
    "Documents",
  ];

  return (
    <div className="inline-flex flex-col items-start gap-[18px]">
      <div className="whitespace-nowrap font-['Exo_2'] text-base font-bold text-white min-[1440px]:text-xl">
        More About
      </div>
      <div className="flex flex-col items-start gap-2">
        {subItemList.map((item, idx) => (
          <div
            key={idx}
            className="whitespace-nowrap font-['Inter'] text-sm font-normal text-[#C6C6C6] min-[1440px]:text-base"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  const subItemList = [
    "KYC Project",
    "Public/Private Sale",
    "Airdrop",
    "Locking",
  ];

  return (
    <div className="inline-flex flex-col items-start gap-[18px] md:gap-4">
      <div className="font-['Exo_2'] text-base font-bold text-white min-[1440px]:text-xl">
        Products
      </div>
      <div className="flex flex-col items-start gap-2">
        {subItemList.map((item, idx) => (
          <div
            key={idx}
            className="font-['Inter'] text-sm font-normal text-[#C6C6C6] min-[1440px]:text-base"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterHeading = (props: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:items-start">
      <img
        src={icons.offical_logo}
        alt="logo"
        className="h-12"
        onClick={() => props.navigation(route.home)}
      />
      <div className="font-['Inter'] text-xs font-medium text-[#C6C6C6]">
        © 2023 STARKSPORT
      </div>
    </div>
  );
};

const SocialCard = () => {
  const LogoSocialItem = [
    {
      id: "telegram",
      icon: icons.homepage.telegramFooter,
    },
    {
      id: "discord",
      icon: icons.homepage.discordFooter,
    },
    {
      id: "twitter",
      icon: icons.homepage.twitterFooter,
    },
    {
      id: "medium",
      icon: icons.homepage.mediumFooter,
    },
    {
      id: "reddit",
      icon: icons.homepage.redditFooter,
    },
  ];

  return (
    <div className="inline-flex items-start justify-center gap-3">
      {LogoSocialItem.map((item) => (
        <div
          key={item.id}
          style={{ background: "rgba(255, 255, 255, 0.20)" }}
          className="social-button-hover flex h-9 w-9 rounded-2xl p-1 min-[375px]:h-14 min-[375px]:w-14 min-[375px]:p-4 md:h-12 md:w-12"
        >
          <img src={item.icon} alt={item.id} />
        </div>
      ))}
    </div>
  );
};

export default HomepageFooter;
