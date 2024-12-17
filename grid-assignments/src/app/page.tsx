import GridAssign1 from "@/components/GridAssign1";
import GridAssign2 from "@/components/GridAssign2";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl mt-6 font-bold text text-center">Note: there is two Assignment of Grids <br/> <Link href="#assign" className="underline hover:text-blue-700"> click to Assignment 2 </Link> </h1>
      <GridAssign1/>

      <h1 className="mt-20">Grid Assignment 2</h1>
      <GridAssign2/>
    </div>
  );
}
