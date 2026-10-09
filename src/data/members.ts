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
        title: "Head of Electrical, ESO",
        image: "",
        teams: ["management", "electrical"],
    },
    {
        name: "Gustav Edlund Fransson",
        title: "Head of chassis and Dynamics",
        image: "",
        teams: ["management", "chassis"],
    },
    {
        name: "Vincent Seeber",
        title: "Head of Powertrain",
        image: "",
        teams: ["management", "drivetrain"],
    },
    {
        name: "Viktor Nordmark",
        title: "Low Voltage & signals, ESO",
        image: "",
        teams: ["management", "electrical"],
    },
    {
        name: "Leo Anger",
        title: "IT Manager, Low Voltage & signals",
        image: "",
        teams: ["management", "electrical"],
    },
    {
        name: "Miles Nordhall",
        title: "PCB Design",
        image: "",
        teams: ["electrical"],
    },
    {
        name: "Linnea Hagman",
        title: "Head of Business Relations",
        image: "",
        teams: ["management"],
    },
    {
        name: "Gustav Lyckeback",
        title: "Head of Economics",
        image: "",
        teams: ["management"],
    },
    {
        name: "Gustav Myrén",
        title: "Head of Economics",
        image: "",
        teams: ["management"],
    },

    {
        name: "Olov Svensson",
        title: "Bodywork",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Viktor Altberg",
        title: "Bodywork",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Joel Myhre Nyberg",
        title: "Spaceframe",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Filip Salhén",
        title: "Spaceframe",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Alice Hedin",
        title: "Suspension",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Markus Gustafsson",
        title: "Suspension",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Jacob Granberg",
        title: "Steering",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Kalle Runebäck",
        title: "Steering",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Julius Åberg",
        title: "Brakes",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Wiliam Utriainen",
        title: "Brakes",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Alexander Olsen",
        title: "Wheels & Uprights",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "John Keysendal",
        title: "Wheels & Uprights",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Leo Edström",
        title: "Driver Environment",
        image: "",
        teams: ["chassis"],
    },
    {
        name: "Magnis Barck-Holst",
        title: "Motors & Mounting",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Manjunath Reddy Goradindla",
        title: "Power Inverter & Motor Control",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Karl Henriksson",
        title: "Vehicle Control System",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Joakim Aglén",
        title: "Vehicle Control System, Cooling System",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Tomas Rosander",
        title: "Drivesahfts, Gears & belts",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Linus Sjölander",
        title: "Drivesahfts, Gears & belts",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Valdermar Bastviken",
        title: "Transmission & Differential",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Arian Bartholovich",
        title: "Transmission & Differential",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Anas Samae Doloh",
        title: "Transmission & Differential",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Henry Gustavsson",
        title: "Simulation & Performance",
        image: "",
        teams: ["drivetrain"],
    },
    {
        name: "Jacob Ardfors",
        title: "Low voltage & signals",
        image: "",
        teams: ["electrical"],
    },
    {
        name: "Gustav Schwantes",
        title: "Accumulator",
        image: "",
        teams: ["electrical"],
    },
    {
        name: "Albin Kjellson",
        title: "Low voltage & signals",
        image: "",
        teams: ["electrical"],
    },
];
