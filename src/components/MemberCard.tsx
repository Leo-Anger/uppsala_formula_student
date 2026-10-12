import Image from "next/image";
import type { Member } from "@/data/members";

type MemberCardProps = {
  member: Member;
};

export default function MemberCard({ member }: MemberCardProps) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className="group flex h-full min-w-0 flex-col items-center rounded-xl border border-zinc-200 bg-white/75 p-2 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-xl sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-5 dark:border-zinc-800 dark:bg-zinc-950/75">
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="aspect-square w-full rounded-lg object-cover transition duration-300 group-hover:scale-[1.03] sm:rounded-xl lg:rounded-2xl"
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-rose-950 transition duration-300 group-hover:scale-[1.03] sm:rounded-xl lg:rounded-2xl">
          <span className="text-xl font-black text-white sm:text-3xl lg:text-5xl">
            {initials}
          </span>
        </div>
      )}

      <div className="mt-2 min-w-0 w-full sm:mt-4 lg:mt-5">
        <h4 className="break-words text-xs font-black leading-tight tracking-tight text-zinc-950 sm:text-base lg:text-lg xl:text-xl dark:text-white">
          {member.name}
        </h4>

        <p className="mt-1 break-words text-[9px] font-semibold uppercase leading-tight tracking-normal text-red-600 sm:mt-2 sm:text-xs sm:tracking-wider lg:text-sm dark:text-red-400">
          {member.title}
        </p>
      </div>
    </article>
  );
}
