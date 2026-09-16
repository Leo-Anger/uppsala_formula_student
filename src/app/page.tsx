import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Fixed checker background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="min-h-screen text-zinc-950 dark:text-white">

        {/* HERO */}
        <section className="relative mx-auto w-full max-w-[1600px] px-4 pt-24 md:px-10">

          {/* Image */}
          <div className="relative h-[55vh] min-h-[450px] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/983418_1.jpg"
              fill
              priority
              alt="Uppsala Formula Student"
              className="object-cover"
            />

            {/* Slight dark overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Floating box */}
          <div
            className="
              relative
              -mt-20
              ml-4
              w-[min(90%,700px)]
              rounded-2xl
              border border-zinc-300/60
              bg-zinc-100/90
              p-8
              pt-16
              shadow-2xl
              backdrop-blur-xl

              dark:border-zinc-700/60
              dark:bg-zinc-950/85

              md:-mt-28
              md:ml-14
              md:p-10
              md:pt-20
            "
          >
            {/* Accent */}
            <div
              className="
                absolute
                bottom-8
                left-5
                top-8
                w-2
                -translate-x-1/2
                rounded-full
                bg-gradient-to-b
                from-blue-500
                to-indigo-900
              "
            />

            {/* POP-OUT TEXT */}
            <h1
              className="
                absolute
                -top-12
                left-8
                font-black
                text-8xl
                leading-none
                tracking-[-0.08em]
                italic

                md:-top-16
                md:text-[10rem]
              "
            >
              UFS
            </h1>

            <div className="relative z-10">
              <p className="max-w-md text-xl font-semibold md:text-2xl">
                Building the future of student motorsport.
              </p>

                {/*<p className="mt-3 max-w-lg text-zinc-600 dark:text-zinc-400">
                Uppsala Formula Student designs, builds and races a Formula
                Student car at Uppsala University.
              </p>*/}

              <Button href="/about" className="mt-6">
                Learn More →
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-[1600px] px-4 md:px-10 bg-blue-500/90 rounded-2xl p-8 md:p-16 items-center text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Our Mission
          </h2>
          <p className="max-w-3xl text-lg font-semibold md:text-xl">
            Uppsala Formula Student is a student-led team that designs, builds, and races a Formula Student car. Our mission is to provide students with hands-on experience in engineering, teamwork, and project management, while promoting innovation and sustainability in motorsport.
          </p>
        </section>
      </main>
    </>
  );
}
