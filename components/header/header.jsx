import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import checkUser from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container max-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="welth logo"
            width={200}
            height={60}
            className="w-auto h-12 object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Button asChild variant="outline">
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Link>
            </Button>
            <Button asChild>
              <Link
                className="flex items-center gap-2"
                href="/transaction/create"
              >
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button className="cursor-pointer" variant="outline">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
