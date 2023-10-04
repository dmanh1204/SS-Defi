import icons from '../../../../../assets/icons';
import { HeaderComponent } from './HeaderComponent';

export default function Audit() {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-[60px] overflow-hidden bg-[#07051B] py-[40px] pb-[75px] md:pt-[60px] min-[1440px]:gap-[80px] min-[1440px]:pb-[236px] min-[1440px]:pt-[120px]">
            <HeaderComponent title="AUDIT" subTitle="Audited By" />
            <AuditContent />
        </div>
    );
}

const AuditContent = () => {
    return (
        <div className="relative flex h-[100px] items-center px-[24px]">
            <div className="absolute left-[-90px]">
                <img src={icons.ECLIP_SHADOW} alt="certik logo" className="h-[250px] w-[250px]" />
            </div>
            <div className="absolute left-0">
                <img src={icons.CERTIK_LOGO} alt="certik logo" className="md:h-[200px] md:w-[144px]" />
            </div>
            <div className="absolute right-[-90px]">
                <img src={icons.ECLIP_SHADOW} alt="certik logo" className="h-[250px] w-[250px]" />
            </div>
            <div className="absolute right-0">
                <img src={icons.STARKGUARDIAN_LOGO} alt="certik logo" />
            </div>
            <div className="inline-flex items-center justify-center gap-[24px] md:gap-[60px] min-[1440px]:gap-[153px]">
                <img src={icons.homepage.audit1} alt="audit 1" className="md:w-[240px] min-[1440px]:w-[300px]" />
                <div className="h-[24px] border-[1px] border-[#24C3BC] md:h-[57px]"></div>
                <img src={icons.homepage.audit2} alt="audit 2" className="md:w-[240px] min-[1440px]:w-[300px]" />
            </div>
        </div>
    );
};
