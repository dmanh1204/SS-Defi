import icons from '../../../../../assets/icons';
import { EcosystemBanner, EcosystemBannerDesktop, EcosystemBannerMd } from './Banner';
import { HeaderComponent } from './HeaderComponent';

export default function Ecosystem() {
    return (
        <div className="flex w-full flex-col gap-[60px] px-[24px] md:mx-[98px] min-[1440px]:gap-[80px]">
            <HeaderComponent title="ECOSYSTEM" subTitle="StarkSport Ecosystem" />
            <div className="flex items-center justify-center">
                <EcosystemBanner className="max-w-[342px] md:hidden" />
                <EcosystemBannerMd className="hidden max-w-[469px] md:flex min-[1440px]:hidden" />
                <EcosystemBannerDesktop className="hidden min-[1440px]:flex" />
            </div>
            <div className="md:hidden">
                <EcosystemListCardMobile />
            </div>
            <div className="hidden items-center justify-center md:flex min-[1440px]:hidden">
                <EcosystemListCardDesktop />
            </div>
        </div>
    );
}

const EcosystemCard = ({ icon, title, description }) => {
    return (
        <div
            style={{ background: 'rgba(255, 255, 255, 0.10)' }}
            className="flex min-h-[90px] w-full items-center gap-[20px] rounded-[16px] p-[20px] md:max-w-[350px]"
        >
            <div className="flex h-[50px] min-w-[50px] items-center justify-center rounded-[12px] bg-[#24C3BC]">
                <img src={icon} alt="ecosystem 1" className="max-w-[28px]" />
            </div>
            <div
                style={{ background: 'rgba(255, 255, 255, 0.01)' }}
                className="flex w-full flex-col items-start gap-[2px] rounded-[16px]"
            >
                <div className="text-start font-['Roboto'] text-[16px] font-bold leading-normal">{title}</div>
                <div className="font-['Roboto'] text-[14px] font-normal text-[#C6C6C6]">{description}</div>
            </div>
        </div>
    );
};

const EcosystemListCardMobile = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-[20px]">
            {ecosystemCardItems.map((item, idx) => (
                <EcosystemCard key={idx} icon={item.icon} title={item.title} description={item.subtitle} />
            ))}
        </div>
    );
};

const EcosystemListCardDesktop = () => {
    return (
        <div className="flex flex-wrap content-center items-center justify-center gap-[20px] md:max-w-[648px]">
            {ecosystemCardItems.map((item, idx) => (
                <EcosystemCard key={idx} icon={item.icon} title={item.title} description={item.subtitle} />
            ))}
        </div>
    );
};

const ecosystemCardItems = [
    {
        icon: icons.ecosystem.ECOSYSTEM_1,
        title: 'Starksport Launchpad',
        subtitle: 'Allows quality crypto projects to conduct the token sale',
    },
    {
        icon: icons.ecosystem.ECOSYSTEM_3,
        title: 'Starksport Exchange',
        subtitle: 'Swap, earn, and provide liquidity to get sharing fees',
    },
    {
        icon: icons.ecosystem.ECOSYSTEM_5,
        title: 'Starksport Marketplace',
        subtitle: 'Trade, lend or borrow unique digital items and make it valuable',
    },
    {
        icon: icons.ecosystem.ECOSYSTEM_2,
        title: 'Starksport Community',
        subtitle: 'Active, supportive and loyal',
    },
    {
        icon: icons.ecosystem.ECOSYSTEM_4,
        title: 'Starksport Token',
        subtitle: 'Native token with wonderful utilities',
    },
    {
        icon: icons.ecosystem.ECOSYSTEM_6,
        title: 'Starksport NFT',
        subtitle: 'A limited collection belongs to early contributors with huge benefits',
    },
    {
        icon: icons.ecosystem.ECOSYSTEM_7,
        title: 'Starksport DAO',
        subtitle: 'Empower the community to vote proposals',
    },
];
