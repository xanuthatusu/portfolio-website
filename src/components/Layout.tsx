import Head from "next/head";
import Navbar from "./Navbar";
import { SITE } from "@/lib/constants";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.name;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={SITE.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pt-24">{children}</main>

      <footer className="mt-32 border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} {SITE.name}</p>
      </footer>
    </>
  );
}
