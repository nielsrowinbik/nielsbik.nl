import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { LinkProps } from 'next/link';

interface NavItemProps extends LinkProps {
    href: string;
    text: string;
}

const NavItem = ({ text, ...props }: NavItemProps) => {
    const router = useRouter();
    const isActive = router.asPath === props.href;

    return (
        <Link {...props}>
            <a
                className={cn(
                    isActive ? 'font-semibold' : 'font-normal',
                    'inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
                )}
            >
                <span className="capsize">{text}</span>
            </a>
        </Link>
    );
};

const Nav = () => (
    <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto p-8 sm:pb-16 print:hidden">
        {/* <a href="#skip" className="skip-nav sr-only">
            Skip to content
        </a>
        <div className="ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/resume" text="Resume" />
        </div> */}
    </nav>
);

export default Nav;
