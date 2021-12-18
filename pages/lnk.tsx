import type { NextPage } from "next";
import { Nav } from "../components/nav";

const Lnk: NextPage = () => {
  return (
    <div>
      <Nav />
      <div className="font-sans font-extrabold text-3xl text-center mt-4 sm:mt-6 sm:text-left text-indigo-600 dark:text-indigo-400">Lnk</div>
      <div className="mt-4">There is no content... yet! Come back soon to learn more about my Go-native URL shortener!</div>
    </div>
  );
};

export default Lnk;
