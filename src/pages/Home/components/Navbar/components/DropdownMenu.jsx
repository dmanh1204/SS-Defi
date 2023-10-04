import { Menu, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import { Fragment, MouseEventHandler, ReactNode, useState } from 'react';
import icons from '../../../../../assets/icons';

// type ComponentItem = {
//   id: string;
//   label: string;
//   href: string;
// };

function isLinkItem(item) {
    return item.description !== undefined;
}

export const DropdownMenu = ({
    className,
    dropdownClassName,
    heading,
    items,
    hideArrow = false,
    disableHover = false,
}) => {
    const [hovering, setHovering] = useState(false);
    const timeoutDuration = 200;
    let timeout;

    const onMouseEnter = () => {
        clearTimeout(timeout);
        setHovering(true);
    };

    const onMouseLeave = () => {
        timeout = setTimeout(() => {
            setHovering(false);
        }, timeoutDuration);
    };

    return (
        <Menu as="div" className={twMerge('w-full md:relative md:w-fit', className)}>
            {({ open }) => (
                <>
                    <Menu.Button
                        as="div"
                        className={
                            "flex w-full cursor-pointer items-center justify-between font-['Exo_2'] text-base font-bold text-white dark:hover:text-slate-200 md:gap-1"
                        }
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {heading}
                        {!hideArrow && (
                            <img
                                src={icons.arrow.arrowDown}
                                alt="arrow icon"
                                className={twMerge(
                                    'h-5 w-5 transition-transform duration-200',
                                    open ? 'rotate-180' : '',
                                )}
                            />
                        )}
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            className={twMerge(
                                'flex flex-col gap-4 pt-4 outline-none dark:bg-slate-800',
                                'md:absolute md:left-0 md:z-10 md:mt-2 md:w-[332px] md:gap-0 md:rounded-2xl md:bg-[#1C1A2D] md:pt-0',
                                dropdownClassName,
                            )}
                        >
                            <div className="h-full w-full px-1 py-1">
                                {items.map((item) => (
                                    <Menu.Item key={item.id}>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-white'
                                                } flex w-full items-center gap-3 rounded-md py-3 py-6 pl-3 font-['Exo_2']`}
                                            >
                                                <div className="flex w-10">
                                                    <img src={item.icon} alt="icons" className="h-6 w-6" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-left text-base font-bold">{item.label}</span>
                                                    <span className="text-left text-sm font-normal text-[#C6C6C6]">
                                                        {item?.description}
                                                    </span>
                                                </div>
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};
