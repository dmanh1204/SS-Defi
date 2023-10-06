import { HeaderComponent } from "./HeaderComponent";

export default function Backed() {
  return (
    <div className="linear-background flex flex-col gap-10 md:mx-[60px] min-[1440px]:mx-[98px]  min-[1440px]:max-w-[1244px] min-[1440px]:gap-20 min-[1440px]:rounded-3xl min-[1440px]:border-[0.5px] min-[1440px]:border-[#C6C6C6] min-[1440px]:px-[42px] min-[1440px]:py-20">
      <HeaderComponent title="BACKED" subTitle="Our Backed By" />
      <BackedContent />
    </div>
  );
}

const BackedContent = () => {
  return (
    <>
      <div className="inline-flex flex-col items-center px-3 md:hidden">
        <div className="flex items-start justify-center gap-3 py-[6px]">
          <SponserCardMockup />
        </div>
        <div className="flex items-start justify-center gap-3 py-[6px]">
          <SponserCardMockup />
          <SponserCardMockup />
        </div>
        <div className="flex items-start justify-center gap-3 py-[6px]">
          <SponserCardMockup />
          <SponserCardMockup />
        </div>
      </div>
      <div className="hidden max-w-[648px] flex-wrap items-start justify-center gap-6 md:inline-flex min-[1440px]:hidden">
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
      </div>
      <div className="hidden flex-wrap items-start justify-center gap-10 min-[1440px]:inline-flex">
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
        <SponserCardMockup />
      </div>
    </>
  );
};

const SponserCardMockup = () => {
  return (
    <div className="h-[80px] w-[165px] rounded-2xl border-[0.5px] border-[#C6C6C6] bg-[#07051B] md:h-[100px] md:w-[200px]"></div>
  );
};
