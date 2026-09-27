export type Team = "management" | "chassis" | "drivetrain" | "electrical";

export type Member = {
    name: string;
    title: string;
    image: string;
    teams: Team[];
};

export const members: Member[] = [
    {
        name: "David Jungner",
        title: "Team Principal",
        image: "",
        teams: ["management"],
    },
    {
        name: "Sebastian Sialis",
        title: "Head of Drivetrain & Electrical",
        image: "",
        teams: ["management", "drivetrain", "electrical"],
    },
    {
        name: "Gustav Edlund Fransson",
        title: "Head of Chassis & Vehicle Dynamics",
        image: "",
        teams: ["management", "chassis"],
    },
    {
        name: "Viktor Nordmark",
        title: "Electrical Team Member",
        image: "",
        teams: ["management", "electrical"],
    },
    {
        name: "Leo Anger",
        title: "IT Manager",
        image: "",
        teams: ["management"],
    },
    {
        name: "Miles Nordhall",
        title: "Electrical Team Member",
        image: "",
        teams: ["electrical"],
    },
];
