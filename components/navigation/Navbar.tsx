import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  const user = false;

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/nitro-logo.png"
              width={32}
              height={32}
              alt="Nitro logo"
            />
            <span className="text-lg font-medium">Nitro</span>
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center justify-between gap-8">
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#pricing">Home</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#pricing">Recursos</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#pricing">Planos</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#pricing">Blog</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            "user button"
          ) : (
            <>
              <Link
                href="sign-in"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Login
              </Link>
              <Link
                href="sign-up"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex",
                })}
              >
                Comece Grátis
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
