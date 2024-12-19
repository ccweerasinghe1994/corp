import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute text-white w-full z-10">
      <nav className="container flex relative flex-wrap items-center justify-between p-8 mx-auto">
        <Link className="font-bold text-3xl" href={"/"}>
          Home
        </Link>
        <div className="text-xl space-x-4">
          <Link href={"/performance"}>Performance</Link>
          <Link href={"/reliability"}>Reliability</Link>
          <Link href={"/scale"}>Scale</Link>
        </div>
      </nav>
    </div>
  );
}
