import icons from "../../../../../assets/icons";
import { HeaderComponent } from "./HeaderComponent";

export default function Feature() {
  return (
    <div className="flex flex-col gap-10 md:mx-[98px] min-[1440px]:gap-20">
      <HeaderComponent title="OUR FEATURES" subTitle="The Best Ecosystem" />
      <FeatureCard />
    </div>
  );
}

const FeatureCard = () => {
  const featureCardItems = [
    {
      icon: icons.homepage.kyc1,
      title: "KYC Project",
      subtitle: "Participate in token sales of verified projects",
    },
    {
      icon: icons.homepage.kyc2,
      title: "Public/Private Sale",
      subtitle: "Participate in token sales of verified projects",
    },
    {
      icon: icons.homepage.kyc3,
      title: "KYC Project",
      subtitle: "Participate in token sales of verified projects",
    },
    {
      icon: icons.homepage.kyc4,
      title: "KYC Project",
      subtitle: "Participate in token sales of verified projects",
    },
  ];

  return (
    <div className="inline-flex flex-col items-start gap-10 md:grid md:grid-cols-2 min-[1440px]:grid-cols-4">
      {featureCardItems.map((item, idx) => (
        <div
          className="relative flex h-[417px] w-[342px] items-end md:w-[292px]"
          key={idx}
        >
          <div className="card-hover relative flex justify-center">
            <img
              src={icons.homepage.featureCard}
              alt="banner"
              className="rounded-3xl md:rounded"
            />
            <div className="absolute bottom-[133px] flex h-[274px] w-[318px] flex-col items-center justify-center gap-9">
              <div className="test h-[180px] w-[180px]">
                <img src={item.icon} alt="banner" />
              </div>
              <div className="inline-flex flex-col items-center gap-3">
                <div className="text-center font-['Exo_2'] text-2xl font-bold text-white">
                  {item.title}
                </div>
                <div className="text-center font-['Inter'] text-sm font-normal text-[#C6C6C6] md:max-w-[268px] md:text-base">
                  {item.subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
