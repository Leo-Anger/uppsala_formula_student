export type Car = {
    id: string;
    name: string;
    year: string | number;
    images: string[];
    model?: string;
    tagline: string;
    description: string;
    number: string | number;
    specs?: {
        label: string;
        value: string | number;
    }[];
};

export const cars: Car[] = [
    {
        id: "ufs01",
        name: "UFS01",
        year: "2027 / 2028 target",
        images: [
            "/images/test/car1.jpg",
            "/images/test/car2.jpg",
            "/images/test/car3.jpg",
        ],
        model: "/images/test/car.glb",
        tagline: "Uppsala's first Formula Student car.",
        description:
            "UFS01 is the team's first complete vehicle programme. Alongside the car, we are developing the engineering processes, safety culture, documentation, and shared knowledge needed to pass technical inspection and support many future seasons.",
        number: "01",
        specs: [
            { label: "Status", value: "In development" },
            { label: "Competition target", value: "2027 or 2028" },
            { label: "Primary objective", value: "Pass technical inspection" },
            { label: "Built by", value: "Uppsala University students" },
        ],
    },
];
