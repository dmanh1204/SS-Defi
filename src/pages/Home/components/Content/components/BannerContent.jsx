import { OfficalBanner } from './Banner';

export default function Introduction() {
    return (
        <div className="flex flex-col justify-center md:mx-[60px] min-[1440px]:mx-[120px] min-[1440px]:flex-row min-[1440px]:gap-[60px]">
            <div className="flex justify-center min-[1440px]:w-[474.472px]">
                <OfficalBanner className="w-[277px] md:w-[314px] min-[1440px]:max-w-[474.472px] min-[1440px]:w-[474.472px]" />
            </div>
            <BannerContent />
        </div>
    );
}

const BannerContent = () => {
    return (
        <div className="flex flex-col items-center gap-[24px] px-[24px] md:max-w-[600px] md:px-0 min-[1440px]:max-w-[657px]">
            <div className="self-stretch text-center font-['Roboto'] text-[30px] font-bold leading-normal min-[1440px]:text-start min-[1440px]:text-[68px]">
                <p className="min-[1440px]:text-start">
                    LEARN, CREATE, EXPLORE & COLLECT WITH{' '}
                    <span className="text-gradient min-[1440px]:text-[64px]">STARKSPORT</span>
                </p>
            </div>
            <div className="self-stretch text-center font-['Roboto'] text-[14px] md:text-[16px] font-normal text-[#C6C6C6] min-[1440px]:!text-start min-[1440px]:text-[18px]">
                Starksport is an all-in-one Incubation Hub with a full stack DeFi platform across blockchain networks.
                We provide exclusive services including IDO Launchpad, NFT Auction, Marketplace and Exchange.
            </div>
            <CardInfo />
            <div className="flex w-full items-center justify-center gap-[20px] md:flex-row min-[1440px]:justify-start">
                <div className="">
                    <BannerButtonLaunchApp />
                </div>
                <div className="">
                    <BannerButtonAboutUs />
                </div>
            </div>
        </div>
    );
};

const BannerButtonLaunchApp = () => {
    return (
        <div
            style={{
                background: `linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)`,
            }}
            className="button-hover-1 flex items-center justify-center gap-[4px] self-stretch rounded-[16px] px-[20px] py-[8px] w-[165px] md:w-[189px]"
        >
            <div className="font-['Roboto'] text-[16px] font-bold text-[#1C1A2D]">Launch App</div>
        </div>
    );
};

const BannerButtonAboutUs = () => {
    return (
        <div className="button-hover-1 flex items-center justify-center gap-[4px] self-stretch rounded-[16px] border-2 border-[#24C3BC] bg-transparent px-[20px] py-[8px] w-[165px] md:w-[189px]">
            <div className="font-['Roboto'] text-[16px] font-bold text-white">More About Us</div>
        </div>
    );
};

const CardInfo = () => {
    const cardItemInfo = [
        {
            id: 'project',
            title: '68 Project',
            subTitle: 'Launched',
        },
        {
            id: 'volume',
            title: '$686,868',
            subTitle: 'Volume',
        },
        {
            id: 'participant',
            title: '6,868',
            subTitle: 'Participants',
        },
    ];

    return (
        <div className="flex items-start justify-between self-stretch min-[1440px]:justify-normal min-[1440px]:gap-[60px]">
            {cardItemInfo.map((item) => (
                <div key={item.id} className="flex items-start justify-between self-stretch">
                    <div className="flex h-[76px] flex-col items-center gap-1 rounded-[16px] py-[12px] min-[1440px]:items-start">
                        <div className="font-['Roboto'] text-[16px] md:text-[24px] font-bold text-white min-[1440px]:text-[32px] leading-normal">
                            {item.title}
                        </div>
                        <div className="text-gradient text-[16px] font-bold leading-normal">{item.subTitle}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
