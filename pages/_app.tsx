import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto px-4 pt-5 mb-8 md:px-16 max-w-screen-lg h-full dark:bg-slate-800 dark:text-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
