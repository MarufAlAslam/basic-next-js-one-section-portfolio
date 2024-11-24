import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex max-w-3xl text-center flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="max-w-[90%] w-[400px] mx-auto"
          src="/website-lagbo.webp"
          alt="dipjol"
          width={400}
          height={38}
          priority
        />
        <h3 className="text-2xl font-bold text-center w-full">
          Do You Need A Website??
        </h3>
        <p className="text-center">
          I’m a dedicated software engineer and top-rated Fiverr freelancer with
          over four years of experience delivering high-quality web development
          projects. I prioritize clear communication and timely delivery,
          ensuring every client’s needs are met with precision. My focus is
          always on providing excellent results, no matter the project size.
        </p>

        <div className="flex gap-4 items-center flex-col justify-center w-full sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.fiverr.com/webdevmaruf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Hire Me
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://drive.google.com/file/d/1i-h1LbFfnMgMk3GhFGzP2ipwkGU4JnxL/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert rotate-180 me-3"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Get My CV
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/marufalaslam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/facebook.png"
            alt="File icon"
            className="dark:grayscale-0"
            width={16}
            height={16}
          />
          Facebook
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/webdevmaruff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/in.svg"
            alt="Window icon"
            className="dark:grayscale-0"
            width={16}
            height={16}
          />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.google.com/maps/dir/webdevmaruf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/map.svg"
            alt="Globe icon"
            className="dark:grayscale-0"
            width={22}
            height={22}
          />
          Find me on Map →
        </a>
      </footer>
    </div>
  );
}
