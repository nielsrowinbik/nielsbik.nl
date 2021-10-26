import type { PropsWithChildren } from 'react';

type FooterProps = PropsWithChildren<{}>;

const Footer = ({ children }: FooterProps) => (
    <footer className="px-8 w-full max-w-2xl mx-auto mb-16 print:hidden">
        {children}
    </footer>
);

export default Footer;
