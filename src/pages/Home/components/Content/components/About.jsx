import { AboutUsBanner } from './Banner';
import { HeaderComponent } from './HeaderComponent';

export default function About() {
    return (
        <div>
            <div className="min-[1440px]:hidden">
                <AboutUsMobile />
            </div>
            <div className="hidden min-[1440px]:flex">
                <AboutUsDesktop />
            </div>
        </div>
    );
}

const AboutUsDesktop = () => {
    return (
        <div
            id="about"
            className="about-linear-background mx-[120px] flex w-[1200px] p-[60px] flex-row gap-[20px] rounded-[24px] border-[0.5px] border-[#24C3BC]"
        >
            <div className="flex max-w-[540px] flex-col justify-between gap-[20px]">
                <div className="flex flex-col gap-[24px]">
                    <HeaderComponent
                        title="WHAT IS STARKSPORT?"
                        subTitle="Decentralized Launchpad"
                        className="items-start"
                    />
                    <AboutUsContent />
                </div>
                <AboutUsButton />
            </div>
            <div className="flex justify-center">
                <AboutUsBanner className="h-[400px] w-[529px]" />
            </div>
        </div>
    );
};

const AboutUsMobile = () => {
    return (
        <div className="about-linear-background flex flex-col gap-[30px] mx-[20px] md:mx-[60px] md:max-w-[648px] md:rounded-[24px] md:border-[0.5px] md:border-[#C6C6C6] md:px-[30px] md:py-[60px]">
            <div className="flex flex-col items-center gap-[20px] min-[1440px]:max-w-[540px]">
                <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col gap-[80px]">
                        <HeaderComponent title="WHAT IS STARKSPORT" subTitle="Decentralized Launchpad" />
                        <div className="flex justify-center px-[12px] md:px-0">
                            <AboutUsBanner className="w-[270px] md:w-[460px]" />
                        </div>
                    </div>
                    <AboutUsContent />
                </div>
                <div className="flex w-full md:justify-center">
                    <AboutUsButton />
                </div>
            </div>
        </div>
    );
};

const AboutUsButton = () => {
    return (
        <a
            href="https://starksport.gitbook.io/starksport/"
            target="_blank"
            rel="noreferrer"
            className="button-hover-2 flex items-center justify-center gap-[4px] self-stretch rounded-[16px] bg-white px-[20px] py-[12px] w-full md:w-[175px] min-[1440px]:px-[24px]"
        >
            <div className="font-['Roboto'] text-[16px] font-bold text-[#07051B]">More About Us</div>
        </a>
    );
};

const AboutUsContent = () => {
    return (
        <div className="self-stretch text-left font-['Roboto'] text-[14px] font-normal text-[#C6C6C6] md:text-[16px] min-[1440px]:px-0 min-[1440px]:text-start min-[1440px]:max-w-[530px]">
            <div className="">
                Starksport Launchpad is the innovative decentralized IDO platform across blockchain networks. It has
                been designed as a completely decentralized protocol allowing quality crypto projects to conduct the
                token sale as well as IDO in a fully compliant environment and secure manner.
            </div>
            <br />
            <div>
                Starksport Launchpad empowers investors and allows quality project creators the ability to provide token
                or NFT sales.
            </div>
            <br />
            <div>
                Our goal is to encourage our customers to launch their projects with us by providing a secure and
                flexible platform at minimal cost. Our metrics and widgets have been carefully designed to ensure that
                launching with us is a favorable choice when compared to other platforms.
            </div>
        </div>
    );
};
