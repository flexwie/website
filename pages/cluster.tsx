import type { NextPage } from "next";
import { Nav } from "../components/nav";

const Cluster: NextPage = () => {
  return (
    <div>
      <Nav />
      <div className="font-sans font-extrabold text-3xl text-center mt-4 sm:mt-6 sm:text-left text-indigo-600 dark:text-indigo-400">Cluster</div>
      <div className="mt-4">There is no content... yet! Come back soon to learn more about the cluster all of this is hosted on!</div>
    </div>
  );
};

export default Cluster;
