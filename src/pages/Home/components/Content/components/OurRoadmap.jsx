import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import icons from '../../../../../assets/icons';
import { HeaderComponent } from './HeaderComponent';

const contentStyle = {
    margin: 0,
    height: '184px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'linear-gradient(0deg, #0B4C51 0%, #07051B 65.63%, #07051B 100%)',
    gap: '24px',
};

export default function OurRoadmap() {
    return (
        <div className="min-[1440px]:gap-15 flex flex-col justify-center gap-10 md:mx-[60px] min-[1440px]:mx-[98px]">
            <HeaderComponent title="ROADMAP" subTitle="Our Roadmap" />
            <div className="max-w-[342px] md:hidden">
                <RoadmapSliderMobile />
            </div>
            <div className="hidden md:flex">
                <RoadmapDesktop />
            </div>
        </div>
    );
}

const RoadmapDesktop = () => {
    const RoadmapDesktopItem = (props) => {
        return (
            <div className={`flex gap-1`}>
                {props.item.status ? (
                    <img src={icons.doneIcon} alt="icons" />
                ) : (
                    <img src={icons.notDoneIcon} alt="icons" />
                )}
                <div className="text-start font-['Inter'] text-xs font-bold text-white min-[1440px]:text-base">
                    {props.item.title}
                </div>
            </div>
        );
    };
    return (
        <div className="relative h-[426px] min-w-[648px] min-[1440px]:h-[525.834px] min-[1440px]:min-w-[1247px]">
            <img src={icons.mdRoadmap} alt="roadmap" className="min-[1440px]: absolute top-[156px] w-full" />
            <div className="flex h-full w-full min-[1440px]:gap-[65px]">
                {roadmapItemList.map((item, idx) => (
                    <div
                        key={idx}
                        className={`inline-flex max-w-[144px] flex-col items-start min-[1440px]:min-w-[208px] ${
                            idx === 1 || idx === 3 ? 'justify-end' : 'justify-start'
                        } gap-3 ${item.quarter === 'Q4' && 'pl-8'}`}
                    >
                        {item.items.map((item, idx) => (
                            <RoadmapDesktopItem key={idx} item={item} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const RoadmapSliderMobile = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Carousel: {
                        dotHeight: 12,
                        dotWidth: 12,
                        borderRadius: 9999,
                        dotWidthActive: 12,
                    },
                },
            }}
        >
            <Carousel autoplay className="">
                {roadmapItemList.map((item, idx) => (
                    <RoadmapItem key={idx} item={item} />
                ))}
            </Carousel>
        </ConfigProvider>
    );
};

const RoadmapItem = (props) => {
    return (
        <div className="mb-10 w-full">
            <div
                style={contentStyle}
                className="inline-flex h-full w-full flex-col items-start gap-3 rounded-3xl border-[0.5px] border-[#C6C6C6] p-6"
            >
                <div
                    style={{
                        background: 'linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)',
                    }}
                    className="h-13 flex flex-col items-start justify-center gap-1 rounded-2xl px-5 py-3"
                >
                    <div className="font-['Exo_2'] text-2xl font-bold leading-normal text-[#1C1A2D]">
                        {props.item.quarter} - {props.item.date}
                    </div>
                </div>
                <div className="font-['Roboto'] text-base font-bold text-white">{props.item.demoContent}</div>
                {/* <div className="flex flex-col items-start gap-4">
          {props.item.items.map((item: any, idx: any) => (
            <div className="flex items-center gap-1">
              {item.status ? (
                <img src={icons.doneIcon} alt="icons" />
              ) : (
                <img src={icons.notDoneIcon} alt="icons" />
              )}
              <div className="text-start font-['Inter'] text-sm font-normal text-white">
                {item.title}
              </div>
            </div>
          ))}
        </div> */}
            </div>
        </div>
    );
};

const roadmapItemList = [
    {
        quarter: 'Q1',
        date: '2023',
        demoContent: ' Lorem Ipsum is simply dummy text',
        items: [
            {
                title: 'Website Launch',
                status: true,
            },
            {
                title: 'Project Loken Creation',
                status: true,
            },
            {
                title: 'Project Loken Creation',
                status: true,
            },
            {
                title: 'Search & Filters',
                status: true,
            },
        ],
    },
    {
        quarter: 'Q2',
        date: '2023',
        demoContent: ' Lorem Ipsum is simply dummy text',
        items: [
            {
                title: 'NFT Launching',
                status: true,
            },
            {
                title: 'Development Of The Dapp Beta',
                status: true,
            },
            {
                title: 'Audit Certik',
                status: true,
            },
        ],
    },
    {
        quarter: 'Q3',
        date: '2023',
        demoContent: ' Lorem Ipsum is simply dummy text',
        items: [
            {
                title: 'Testnet Dapp',
                status: true,
            },
            {
                title: 'Swap',
                status: true,
            },
            {
                title: 'More Liquidity',
                status: true,
            },
            {
                title: 'Create/Manage Pairs + Liquidity Groups NFTs Event',
                status: true,
            },
            {
                title: 'Design NFTs, Create Events',
                status: true,
            },
        ],
    },
    {
        quarter: 'Q4',
        date: '2023',
        demoContent: ' Lorem Ipsum is simply dummy text',
        items: [
            {
                title: 'Launchpad',
                status: false,
            },
            {
                title: 'Zetachain',
                status: true,
            },
            {
                title: 'Ecosystem',
                status: true,
            },
            {
                title: 'Mainnet Dapp',
                status: true,
            },
            {
                title: 'Trading Chart',
                status: false,
            },
        ],
    },
    {
        quarter: 'Q1',
        date: '2024',
        demoContent: ' Lorem Ipsum is simply dummy text',
        items: [
            {
                title: 'Airdrop DAO',
                status: false,
            },
            {
                title: 'Public Round',
                status: false,
            },
            {
                title: 'Opening DAO',
                status: false,
            },
            {
                title: 'DAO Treasury',
                status: false,
            },
            {
                title: 'Starksport Multichain',
                status: false,
            },
        ],
    },
];
