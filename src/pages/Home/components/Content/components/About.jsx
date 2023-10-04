import icons from "../../../../../assets/icons";
import { AboutUsBanner } from "./Banner";
import { HeaderComponent } from "./HeaderComponent";

export default function About() {
  return (
    <>
      <div className="min-[1440px]:hidden">
        <AboutUsMobile />
      </div>
      <div className="hidden min-[1440px]:flex">
        <AboutUsDesktop />
      </div>
    </>
  );
}

const AboutUsDesktop = () => {
  return (
    <div className="about-linear-background mx-[98px] flex h-[500px] flex-row gap-10 gap-[95px] rounded-3xl border-[0.5px] border-[#C6C6C6] py-[48px] pl-[48px] pr-[32px]">
      <div className="flex max-w-[540px] flex-col justify-between">
        <div className="flex flex-col gap-6">
          <HeaderComponent
            title="WHAT IS STARKSPORT"
            subTitle="The Best Launchpad"
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
    <div className="about-linear-background flex flex-col gap-10 md:mx-[60px] md:max-w-[648px] md:rounded-3xl md:border-[0.5px] md:border-[#C6C6C6] md:px-6 md:py-10 min-[1440px]:mx-[98px] min-[1440px]:max-w-none min-[1440px]:flex-row min-[1440px]:gap-[95px]">
      <div className="flex flex-col items-center gap-5 min-[1440px]:max-w-[540px] min-[1440px]:items-start min-[1440px]:gap-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-20">
            <HeaderComponent
              title="WHAT IS STARKSPORT"
              subTitle="The Best Launchpad"
            />
            <div className="flex justify-center px-3 md:px-0">
              <AboutUsBanner className="w-[342px] md:w-[460px]" />
            </div>
          </div>
          <AboutUsContent />
        </div>
        <div className="w-full px-6 md:w-[200px]">
          <AboutUsButton />
        </div>
      </div>
    </div>
  );
};

const AboutUsButton = () => {
  return (
    <div className="button-hover-2 flex items-center justify-center gap-1 self-stretch rounded-2xl bg-white px-5 py-3 min-[1440px]:w-[156px] min-[1440px]:px-6">
      <div className="font-['Exo_2'] text-base font-bold text-[#07051B]">
        More About Us
      </div>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="self-stretch px-6 text-center font-['Inter'] text-sm font-normal text-[#C6C6C6] min-[1440px]:px-0 min-[1440px]:text-start">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  );
};
