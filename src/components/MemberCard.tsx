import Image from "next/image";
import type { Member } from "@/data/members";

type MemberCardProps = {
  member: Member;
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="group flex flex-col items-center rounded-3xl border border-zinc-200 bg-white/75 p-7 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/75">
      <Image
        src={member.image}
        alt={member.name}
        width={400}
        height={400}
        className="aspect-square w-full max-w-[400px] rounded-2xl object-cover transition duration-300 group-hover:scale-[1.03]"
      />

      <div className="mt-6">
        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
          {member.name}
        </h2>

        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
          {member.title}
        </p>
      </div>
    </article>
  );
}
