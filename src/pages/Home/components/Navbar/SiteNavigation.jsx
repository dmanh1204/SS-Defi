import ModalWallet from "../../../../layouts/header/modal-wallet";
import useModal from "../../../../layouts/header/useModal";
import { useNavigate } from "react-router-dom";
import route from "../../../../routes/route";
import icons from "../../../../assets/icons";
import Logo from "../../../Logo";
import LaunchAppButton from "./components/LaunchAppButton";
import MobileMenuButton from "./components/MobileMenuButton";
import { DropdownMenu } from "./components/DropdownMenu";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function SiteNavigation() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopSiteNavigation />
      </div>
      <div className="md:hidden">
        <MobileSiteNavigation />
      </div>
    </>
  );
}

const MobileSiteNavigation = () => {
  const isMobile = true;
  const navigation = useNavigate();

  return (
    <div
      style={{ background: "rgba(255, 255, 255, 0.1)" }}
      className="fixed top-0 z-[9999] flex h-[70px] w-screen justify-between px-6 py-[17px] backdrop-blur-[30px]"
    >
      <Popover className="flex w-full justify-between">
        {({ open }) => (
          <>
            <div className="flex items-center">
              <Logo className="h-[30px]" />
            </div>
            <div className="flex items-center gap-3">
              <LaunchAppButton
                onClick={() => navigation(route.viewLaunchpad)}
              />
              <MobileMenuButton />
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel
                className="absolute left-0 top-[70px] flex w-full flex-col shadow-lg backdrop-blur-[30px] md:inline-flex md:max-h-full md:w-full md:min-w-0 md:flex-row md:items-center md:justify-between md:gap-6 md:overflow-y-visible md:border-b-0 md:shadow-none"
                style={{
                  maxHeight: "calc(100vh - 5rem)",
                  overflowY: "auto",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="stroke-secondary flex flex-col gap-8 py-9 md:w-full md:flex-shrink md:flex-row md:items-center md:justify-between md:border-y-0 md:py-0">
                  <div className="flex flex-col gap-8 px-4 md:min-w-0 md:flex-shrink md:flex-row md:items-center md:gap-8 md:px-0">
                    <AboutMenu />
                    <FeaturesMenu />
                    <a
                      className="text-base font-medium text-white md:text-sm"
                      href="/"
                    >
                      Backers & Partners
                    </a>
                    <CommunityMenu />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

const DesktopSiteNavigation = () => {
  const isMobile = false;
  const navigation = useNavigate();

  return (
    <div
      style={{ background: "rgba(255, 255, 255, 0.1)" }}
      className="fixed top-0 z-[9999] flex h-[96px] w-screen justify-between px-[98px] py-6 backdrop-blur-[30px]"
    >
      <div className="flex items-center">
        <Logo className="h-12" />
      </div>
      <div className="hidden items-center text-xl font-bold md:flex md:gap-5 lg:gap-10">
        <AboutMenu />
        <div className="flex w-fit cursor-pointer items-center font-['Exo_2'] text-base font-bold text-white dark:hover:text-slate-200 max-[815px]:hidden">
          Backed & Parnerts
        </div>
        <FeaturesMenu />
        <CommunityMenu />
      </div>
      <div className="flex items-center gap-3">
        <LaunchAppButton
          onClick={() => navigation(route.viewLaunchpad)}
          styleButton="py-3 px-6 rounded-2xl h-12"
        />
      </div>
    </div>
  );
};

const AboutMenu = (className: any) => {
  const aboutMenuItems = [
    {
      id: "about",
      label: "About us",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      href: "/",
      icon: icons.navbar.aboutUsIcon,
    },
    {
      id: "audit",
      label: "Audit",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      href: "/",
      icon: icons.navbar.auditIcon,
    },
    {
      id: "whitepaper",
      label: "Whitepaper",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      href: "/",
      icon: icons.navbar.whitepaperIcon,
    },
    {
      id: "contact",
      label: "Contact us",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      href: "/",
      icon: icons.navbar.contactUsIcon,
    },
  ];

  return (
    <DropdownMenu
      className="text-base md:text-sm"
      items={aboutMenuItems}
      heading={"About"}
    />
  );
};

const FeaturesMenu = () => {
  const featuresMenuItems = [
    {
      id: "kyc",
      label: "KYC",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      href: "/",
      icon: icons.navbar.kycIcon,
    },
    {
      id: "sale",
      label: "Private/Public sale",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      href: "/",
      icon: icons.navbar.saleIcon,
    },
    {
      id: "airdrop",
      label: "Airdrop",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      href: "/",
      icon: icons.navbar.airdropIcon,
    },
    {
      id: "locking",
      label: "Locking",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      href: "/",
      icon: icons.navbar.lockingIcon,
    },
  ];

  return (
    <DropdownMenu
      className="text-base md:text-sm"
      items={featuresMenuItems}
      heading={"Features"}
    />
  );
};

const CommunityMenu = () => {
  const communityMenuItems = [
    {
      id: "telegram",
      label: "Telegram",
      href: "/",
      icon: icons.navbar.telegramNavbar,
    },
    {
      id: "discord",
      label: "Discord",
      href: "/",
      icon: icons.navbar.discordNavbar,
    },
    {
      id: "twitter",
      label: "Twitter",
      href: "/",
      icon: icons.navbar.twitterNavbar,
    },
    {
      id: "medium",
      label: "Medium",
      href: "/",
      icon: icons.navbar.mediumNavbar,
    },
    {
      id: "reddit",
      label: "Reddit",
      href: "/",
      icon: icons.navbar.redditNavbar,
    },
  ];

  return (
    <DropdownMenu
      className="text-base md:text-sm"
      items={communityMenuItems}
      heading={"Community"}
      dropdownClassName="md:w-[260px]"
    />
  );
};
