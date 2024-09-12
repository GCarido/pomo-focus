import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


interface NavbarProps {
    containerStyle?: string;
    linkStyle?: string;
    underlineStyle?: string;
}

const links = [

    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/socials', name: 'socials' }
];


const Navbar = ({ containerStyle, linkStyle, underlineStyle }: NavbarProps) => {
    const path = usePathname();
    return (
        <nav className={containerStyle}>
            {links.map((link, index) => {
                return (

                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyle}`}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{ type: "spring" }}
                                layoutId= "underline"
                                className={`${underlineStyle}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Navbar