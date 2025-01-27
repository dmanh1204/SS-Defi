import { twMerge } from 'tailwind-merge';

export const HeaderComponent = ({ title, subTitle, className, id }) => {
    return (
        <div id={id} className={twMerge('inline-flex flex-col items-center gap-[4px]', className)}>
            <div className="text-gradient text-center text-[16px] font-bold">{title}</div>
            <div className="flex flex-wrap text-center text-[30px] font-bold leading-normal text-white min-[1200px]:text-[32px]">
                {subTitle}
            </div>
        </div>
    );
};
