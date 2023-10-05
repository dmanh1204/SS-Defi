// import ModalWallet from "../../../../layouts/header/modal-wallet";
// import useModal from "../../../../layouts/header/useModal";
import { Link, useNavigate } from 'react-router-dom';
// import route from '../../../../routes/route';
import icons from '../../../../assets/icons';
import Logo from './components/Logo';
import LaunchAppButton from './components/LaunchAppButton';
import MobileMenuButton from './components/MobileMenuButton';
import { DropdownMenu } from './components/DropdownMenu';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useModal from '../../../../components/ModalWallet/useModal';
import ModalConnectApp from './components/ModalWallet';

export default function SiteNavigation(props) {
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
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            className="fixed top-0 z-[9999] flex h-[70px] w-screen justify-between px-6 py-[17px] backdrop-blur-[30px]"
        >
            <Popover className="flex w-full justify-between">
                {({ open }) => (
                    <>
                        <div className="flex items-center">
                            <Logo className="h-[30px]" />
                        </div>
                        <div className="flex items-center gap-3">
                            <LaunchAppButton onClick={() => navigation('/')} />
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
                                className="absolute left-0 top-[70px] flex w-full flex-col shadow-lg backdrop-blur-[30px] md:inline-flex md:max-h-full md:w-full md:min-w-0 md:flex-row md:items-center md:justify-between md:gap-[24px] md:overflow-y-visible md:border-b-0 md:shadow-none"
                                style={{
                                    maxHeight: 'calc(100vh - 5rem)',
                                    overflowY: 'auto',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <div className="stroke-secondary flex flex-col gap-[32px] py-[36px] md:w-full md:flex-shrink md:flex-row md:items-center md:justify-between md:border-y-0 md:py-0">
                                    <div className="flex flex-col gap-[32px] px-[16px] md:min-w-0 md:flex-shrink md:flex-row md:items-center md:gap-[32px] md:px-0">
                                        <a className="text-[16px] font-medium text-white md:text-[14px]" href="#about">
                                            About
                                        </a>
                                        <a
                                            className="text-[16px] font-medium text-white md:text-[14px]"
                                            href="/features"
                                        >
                                            Features
                                        </a>
                                        <a
                                            className="text-[16px] font-medium text-white md:text-[14px]"
                                            href="/ecosystem"
                                        >
                                            Ecosystem
                                        </a>
                                        <a className="text-[16px] font-medium text-white md:text-[14px]" href="/backed">
                                            Backers & Partners
                                        </a>
                                        {/* <AboutMenu />
                                        <FeaturesMenu />
                                        <CommunityMenu /> */}
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

const DesktopSiteNavigation = (props) => {
    const isMobile = false;
    const navigation = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isShowing, toggle } = useModal();
    return (
        <div
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            className="fixed top-0 z-[9999] flex h-[96px] w-screen justify-between px-[98px] py-[24px] backdrop-blur-[30px]"
        >
            <div className="flex items-center">
                <Logo className="h-[48px]" />
            </div>
            <div className="hidden items-center text-[20px] font-bold md:flex md:gap-[5px] lg:gap-[40px]">
                <div className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]">
                    <AnchorLink className="text-white hover:text-[#24c3bc]" href="#about">
                        About
                    </AnchorLink>
                </div>
                <div className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]">
                    <AnchorLink className="text-white hover:text-[#24c3bc]" href="#features">
                        Features
                    </AnchorLink>
                </div>
                <div className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]">
                    <AnchorLink className="text-white hover:text-[#24c3bc]" href="#ecosystem">
                        Ecosystem
                    </AnchorLink>
                </div>
                <div className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]">
                    <AnchorLink className="text-white hover:text-[#24c3bc]" href="#backed">
                        {' '}
                        Backed & Parnerts
                    </AnchorLink>
                </div>
                {/* <AboutMenu />
                <FeaturesMenu />
                <CommunityMenu /> */}
            </div>
            <div className="flex items-center gap-3">
                <LaunchAppButton onClick={toggle} styleButton="py-[12px] px-[24px] rounded-[16px] h-[48px]" />
            </div>
            <ModalConnectApp isShowing={isShowing} hide={toggle} />
        </div>
    );
};

const AboutMenu = (className) => {
    const aboutMenuItems = [
        {
            id: 'about',
            label: 'About us',
            href: '/',
            icon: icons.navbar.aboutUsIcon,
        },
        {
            id: 'audit',
            label: 'Audit',
            href: '/',
            icon: icons.navbar.auditIcon,
        },
        {
            id: 'whitepaper',
            label: 'Whitepaper',
            href: '/',
            icon: icons.navbar.whitepaperIcon,
        },
        {
            id: 'contact',
            label: 'Contact us',
            href: '/',
            icon: icons.navbar.contactUsIcon,
        },
    ];

    return <DropdownMenu className="text-[16px] md:text-[14px]" items={aboutMenuItems} heading={'About'} />;
};

const FeaturesMenu = () => {
    const featuresMenuItems = [
        {
            id: 'kyc',
            label: 'KYC',
            href: '/',
            icon: icons.navbar.kycIcon,
        },
        {
            id: 'sale',
            label: 'Private/Public sale',
            href: '/',
            icon: icons.navbar.saleIcon,
        },
        {
            id: 'airdrop',
            label: 'Airdrop',
            href: '/',
            icon: icons.navbar.airdropIcon,
        },
        {
            id: 'locking',
            label: 'Locking',
            href: '/',
            icon: icons.navbar.lockingIcon,
        },
    ];

    return <DropdownMenu className="text-[16px] md:text-[14px" items={featuresMenuItems} heading={'Features'} />;
};

const CommunityMenu = () => {
    const communityMenuItems = [
        {
            id: 'telegram',
            label: 'Telegram',
            href: '/',
            icon: icons.navbar.telegramNavbar,
        },
        {
            id: 'discord',
            label: 'Discord',
            href: '/',
            icon: icons.navbar.discordNavbar,
        },
        {
            id: 'twitter',
            label: 'Twitter',
            href: '/',
            icon: icons.navbar.twitterNavbar,
        },
        {
            id: 'medium',
            label: 'Medium',
            href: '/',
            icon: icons.navbar.mediumNavbar,
        },
        {
            id: 'reddit',
            label: 'Reddit',
            href: '/',
            icon: icons.navbar.redditNavbar,
        },
    ];

    return (
        <DropdownMenu
            className="text-[16px] md:text-[14px"
            items={communityMenuItems}
            heading={'Community'}
            dropdownClassName="md:w-[260px]"
        />
    );
};
