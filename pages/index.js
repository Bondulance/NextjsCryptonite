import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" flex items-center justify-center">
      <h1 className="font-bold text-center my-auto">CryptoNite</h1>
    </div>
  );
}
