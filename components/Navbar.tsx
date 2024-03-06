import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const lsts: { path: string; name: string }[] = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

interface NavbarProps {
  containerStyles: string;
  linkStyles?: string;
  underlineStyles?: string;
}
// export const NavbarProps: NavbarProps = {
//   containerStyles: "hidden xl:flex gap-x-8 items-center",
//   linkStyles: "text-lg font-medium",
//   underlineStyles: "underline decoration-2 underline-offset-4",
// };

const Navbar = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavbarProps) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {lsts.map((lst, index) => {
        return (
          <Link
            href={lst.path}
            className={`capitalize ${linkStyles}`}
            key={index}
          >
            {lst.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {lst.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
