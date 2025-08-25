import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="py-2 px-5 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.jpg" alt="Logo" width={120} height={28} />
                </Link>

                <div className="flex items-center gap-6 text-black text-lg font-medium">
                    {session?.user ? (
                        <>
                            {/* Create Link */}
                            <Link href="/startup/create">
                                <span className="hover:underline">Create</span>
                            </Link>

                            {/* Logout Button */}
                            <form
                                action={async () => {
                                    "use server";
                                    await signOut();
                                }}
                            >
                                <button
                                    type="submit"
                                    className="hover:underline"
                                >
                                    Logout
                                </button>
                            </form>

                            {/* User Profile */}
                            <Link
                                href={`/user/${session?.user?.id}`}
                                className="flex items-center gap-2"
                            >
                                {/* User Name First */}
                                <span className="font-semibold">{session?.user?.name}</span>

                                {/* Profile Image */}
                                {session?.user?.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt="Profile"
                                        width={36}
                                        height={36}
                                        className="rounded-full border border-gray-300"
                                    />
                                ) : (
                                    <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">
                                            {session?.user?.name?.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </Link>
                        </>
                    ) : (
                        /* Login Button */
                        <form
                            action={async () => {
                                "use server";
                                await signIn("github");
                            }}
                        >
                            <button
                                type="submit"
                                className="hover:underline"
                            >
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
