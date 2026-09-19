export type Car = {
    id: string;
    name: string;
    year: number;
    images: string[];
    model?: string;
    description: string;
    number: number;
    specs?: {
        label?: string;
        value?: string | number;
    }[];
};

export const cars: Car[] = [
    {
        id: "lightning-mcqueen",
        name: "lightning McQueen",
        year: 2006,
        images: [
            "/images/test/car1.jpg",
            "/images/test/car2.jpg",
            "/images/test/car3.jpg",
        ],
        model: "/images/test/car.glb",
        description:
            "Lightning McQueen is a red race car with a sleek design and a confident personality. He is known for his speed and determination on the racetrack.",
        number: 95,
        specs: [
            { label: "Top Speed", value: "200 mph" },
            { label: "Acceleration", value: "0-60 mph in 3.5 seconds" },
            { label: "Horsepower", value: 500 },
            { label: "Weight", value: "2,500 lbs" },
            { label: "Fuel Type", value: "Gasoline" },
        ],
    },
];
