import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "next-themes";


export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center max-w-2xl mx-auto justify-between py-5">
      <Link href={"/"} className="font-bold text-3xl">
        Shehreen<span className="text-orange-400">Blog</span>
      </Link>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {" "}
        <ModeToggle />
      </ThemeProvider>
    </nav>
  );
}
