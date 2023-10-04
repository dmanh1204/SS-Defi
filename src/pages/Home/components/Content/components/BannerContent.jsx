import { OfficalBanner } from './Banner';

export default function Introduction() {
    return (
        <div className="flex flex-col justify-center md:mx-[60px] min-[1440px]:mx-[98px] min-[1440px]:flex-row min-[1440px]:gap-[120px]">
            <div className="flex justify-center min-[1440px]:w-[414px]">
                <OfficalBanner className="w-[277px] min-[1440px]:w-[414px] min-[1920px]:w-[474.472px] min-[1920px]:max-w-[474.472px]" />
            </div>
            <BannerContent />
        </div>
    );
}

const BannerContent = () => {
    return (
        <div className="flex flex-col items-center gap-[24px] px-[24px] md:max-w-[600px] md:px-0 min-[1440px]:max-w-[652px]">
            <div className="self-stretch text-center font-['Exo_2'] text-[30px] font-bold leading-normal min-[1440px]:text-start min-[1440px]:text-[64px]">
                <p>
                    LEARN, CREATE, EXPLORE & COLLECT WITH{' '}
                    <span className="text-gradient min-[1440px]:text-[64px]">STARKSPORT</span>
                </p>
            </div>
            <div className="self-stretch text-center font-['Exo_2'] text-[14px] font-normal text-[#C6C6C6] min-[1440px]:text-start min-[1440px]:text-[18px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </div>
            <CardInfo />
            <div className="flex w-full flex-col items-center gap-[24px] md:flex-row md:justify-center min-[1440px]:justify-start">
                <div className="w-full md:max-w-[200px]">
                    <BannerButtonLaunchApp />
                </div>
                <div className="w-full md:max-w-[200px]">
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
            className="button-hover-1 flex items-center justify-center gap-1 self-stretch rounded-[16px] px-[20px] py-[12px]"
        >
            <div className="font-['Exo_2'] text-[16px] font-bold text-[#1C1A2D]">Launch App Now</div>
        </div>
    );
};

const BannerButtonAboutUs = () => {
    return (
        <div className="button-hover-1 flex items-center justify-center gap-1 self-stretch rounded-[16px] border-2 border-[#24C3BC] bg-transparent px-[20px] py-[12px]">
            <div className="font-['Exo_2'] text-[16px] font-bold text-white">More About Us</div>
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
            subTitle: 'participants',
        },
    ];

    return (
        <div className="flex items-start justify-between self-stretch min-[1440px]:justify-normal min-[1440px]:gap-12">
            {cardItemInfo.map((item) => (
                <div key={item.id} className="flex items-start justify-between self-stretch">
                    <div className="flex h-[76px] flex-col items-center gap-1 rounded-[16px] py-[12px] min-[1440px]:items-start">
                        <div className="font-['Exo_2'] text-[20px] font-bold text-white min-[1440px]:text-[36px]">
                            {item.title}
                        </div>
                        <div className="text-gradient text-[16px] font-bold min-[1440px]:text-[20px]">
                            {item.subTitle}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
