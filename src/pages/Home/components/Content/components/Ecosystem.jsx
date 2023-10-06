import icons from '../../../../../assets/icons';
import { EcosystemBanner, EcosystemBannerDesktop, EcosystemBannerMd } from './Banner';
import { HeaderComponent } from './HeaderComponent';

export default function Ecosystem() {
    return (
        <div className="flex w-full flex-col gap-[60px] px-6 md:mx-[98px] min-[1440px]:gap-20">
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
            className="flex h-[100px] w-full items-center gap-3 rounded-2xl p-3 md:max-w-[312px]"
        >
            <div className="flex h-12 min-w-[48px] items-center justify-center rounded-xl bg-[#24C3BC]">
                <img src={icon} alt="ecosystem 1" />
            </div>
            <div
                style={{ background: 'rgba(255, 255, 255, 0.01)' }}
                className="flex w-full flex-col items-start gap-[6px] rounded-2xl"
            >
                <div className="text-center font-['Exo_2'] text-base font-bold leading-normal">{title}</div>
                <div className="font-['Inter'] text-sm font-normal text-[#C6C6C6]">{description}</div>
            </div>
        </div>
    );
};

const EcosystemListCardMobile = () => {
    const ecosystemCardItems = [
        {
            icon: icons.ecosystem.ECOSYSTEM_1,
            title: 'Starksport Launchpad',
            subtitle: 'Allows quality crypto projects to conduct the token sale',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_2,
            title: 'Starksport Community',
            subtitle: 'Active, supportive and loyal',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_3,
            title: 'Starksport Exchange',
            subtitle: 'Starksport Exchange',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_4,
            title: 'Starksport DAO',
            subtitle: 'Native token with wonderful utilities',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_5,
            title: 'Starksport Exchange',
            subtitle: 'Trade, lend or borrow unique digital items and make it valuable',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_6,
            title: 'Starksport NFT',
            subtitle: 'A limited collection belongs to early contributors with huge benefits',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_7,
            title: 'Starksport DAO',
            subtitle: 'Starksport DAO',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            {ecosystemCardItems.map((item, idx) => (
                <EcosystemCard key={idx} icon={item.icon} title={item.title} description={item.subtitle} />
            ))}
        </div>
    );
};

const EcosystemListCardDesktop = () => {
    const ecosystemCardItems = [
        {
            icon: icons.ecosystem.ECOSYSTEM_1,
            title: 'Starksport Launchpad',
            subtitle: 'Allows quality crypto projects to conduct the token sale',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_2,
            title: 'Starksport Community',
            subtitle: 'Active, supportive and loyal',
        },

        {
            icon: icons.ecosystem.ECOSYSTEM_3,
            title: 'Starksport Exchange',
            subtitle: 'Starksport Exchange',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_4,
            title: 'Starksport DAO',
            subtitle: 'Native token with wonderful utilities',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_5,
            title: 'Starksport Exchange',
            subtitle: 'Trade, lend or borrow unique digital items and make it valuable',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_6,
            title: 'Starksport NFT',
            subtitle: 'A limited collection belongs to early contributors with huge benefits',
        },
        {
            icon: icons.ecosystem.ECOSYSTEM_7,
            title: 'Starksport DAO',
            subtitle: 'Starksport DAO',
        },
    ];
    return (
        <div className="flex flex-wrap content-center items-center justify-center gap-3 md:max-w-[648px]">
            {ecosystemCardItems.map((item, idx) => (
                <EcosystemCard key={idx} icon={item.icon} title={item.title} description={item.subtitle} />
            ))}
        </div>
    );

    //   <div className="flex flex-col items-center justify-center gap-3 md:grid md:grid-cols-2">
    //       {ecosystemCardItems.map((item, idx) => (
    //         <EcosystemCard
    //           key={idx}
    //           icon={item.icon}
    //           title={item.title}
    //           description={item.subtitle}
    //         />
    //       ))}
    //     </div>
};
