import { Button } from 'antd';
import { twMerge } from 'tailwind-merge';
import { MouseEventHandler } from 'react';
export default function LaunchAppButton({ styleButton, styleTitle, onClick }) {
    return (
        <Button
            style={{
                background: 'linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)',
            }}
            className={twMerge(
                'button-hover-1 h-9 items-center justify-center gap-1 rounded-xl border-0 px-3 py-[6px] max-[340px]:hidden',
                styleButton,
            )}
            onClick={onClick}
        >
            <span className={twMerge("font-['Exo_2'] text-base font-bold text-[#1C1A2D]", styleTitle)}>Launch App</span>
        </Button>
    );
}
