import Link from "next/link";
import AnimatedImage from "../components/AnimatedImage";
import ButtonWrapper from "../components/ButtonWrapper";
export default function Home() {
  return (
    <div className="px-0 flex flex-col text-center gap-[100px] max-w-[1440px] mx-auto mt-20 lg:flex-row lg:text-start lg:px-8">
      <div className="flex-1 flex flex-col gap-[50px] mt-20">
        <h1 className="text-6xl font-bold lg:text-7xl lg:tracking-wide tracking-normal uppercase">
          Ilker Demirci{" "}
          <span className="font-extralight bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
            Task Project
          </span>
        </h1>
        <div className="max-w-[350px] mx-auto lg:max-w-full">
          <p className="text-xl lg:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </p>
        </div>
        <div>
          <Link href="/blog">
            <ButtonWrapper>GO TO BLOG</ButtonWrapper>
          </Link>
        </div>
      </div>
      <div className="flex-1 relative mx-auto">
        {/* Tum page.js'i client side yapmamak icin ayri bir component olusturulur. */}
        <AnimatedImage />
      </div>
    </div>
  );
}
