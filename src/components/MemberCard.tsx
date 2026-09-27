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
    <article className="group flex flex-col items-center rounded-3xl border border-zinc-200 bg-white/75 p-7 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/75">
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="aspect-square w-full max-w-[400px] rounded-2xl object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex aspect-square w-full max-w-[400px] items-center justify-center rounded-2xl bg-rose-950 transition duration-300 group-hover:scale-[1.03]">
          <span className="text-6xl font-black text-white">
            {initials}
          </span>
        </div>
      )}

      <div className="mt-6">
        <h4 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
          {member.name}
        </h4>

        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
          {member.title}
        </p>
      </div>
    </article>
  );
}
