export type Team =
    "management" |
    "chassis" |
    "drivetrain" |
    "electrical";

export type Member = {
    name: string;
    title: string;
    image: string;
    teams: Team[];
};


export const members: Member[] = [
    {
        name: "中野一花",
        title: "Team Leader",
        image: "/images/test/1.png",
        teams: ["management", "chassis"],
    },
    {
        name: "中野二乃",
        title: "Drivetrain Leader",
        image: "/images/test/2.png",
        teams: ["management", "drivetrain"],
    },
    {
        name: "中野三玖",
        title: "Electrical Team member",
        image: "/images/test/3.png",
        teams: ["management", "electrical"],
    },
    {
        name: "中野四葉",
        title: "Chassis Team Member",
        image: "/images/test/4.png",
        teams: ["management", "chassis"],
    },
    {
        name: "中野五月",
        title: "Electrical Team Leader",
        image: "/images/test/5.png",
        teams: ["management", "electrical"],
    },
];
