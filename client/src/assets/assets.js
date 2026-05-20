const movies = [
    {
        id: 1,
        title: "Joker",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        runtime: "2h 2m",
        trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
        description:
            "A failed comedian struggling with isolation and mental health slowly transforms into Gotham City's infamous Joker. The film explores society’s cruelty, personal trauma, and the dangerous consequences of feeling ignored and abandoned."
    },
    {
        id: 2,
        title: "Titanic",
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        runtime: "3h 14m",
        trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
        description:
            "A young artist and an upper-class woman fall deeply in love aboard the luxurious Titanic. Their unforgettable romance faces tragedy when the massive ship collides with an iceberg during its doomed maiden voyage."
    },
    {
        id: 3,
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        runtime: "2h 16m",
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        description:
            "A computer hacker discovers that reality is actually a simulated world controlled by intelligent machines. Guided by rebels, he embraces his destiny to fight against the system and free humanity from oppression."
    },
    {
        id: 4,
        title: "John Wick",
        poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        runtime: "1h 41m",
        trailer: "https://www.youtube.com/watch?v=2AUmvWm5ZDQ",
        description:
            "After losing his wife, retired assassin John Wick seeks peace until ruthless criminals steal his car and kill his beloved dog. Driven by grief and vengeance, he returns to the dangerous underworld he left behind."
    },
    {
        id: 5,
        title: "Forrest Gump",
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        runtime: "2h 22m",
        trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
        description:
            "Forrest Gump, a kind-hearted man with a simple outlook on life, unexpectedly witnesses and influences major historical events. Through love, friendship, and perseverance, he experiences an extraordinary journey across decades of American history."
    },
    {
        id: 6,
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        runtime: "2h 28m",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        description:
            "A skilled thief enters people’s dreams to steal valuable secrets from their subconscious minds. Offered a chance to clear his past, he must perform an impossible task known as inception by planting an idea."
    },
    {
        id: 7,
        title: "Deadpool",
        poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
        runtime: "1h 48m",
        trailer: "https://www.youtube.com/watch?v=ONHBaC-pfsk",
        description:
            "After a brutal experiment gives him accelerated healing powers, Wade Wilson becomes the sarcastic antihero Deadpool. Armed with dark humor and deadly combat skills, he hunts the man responsible for ruining his life."
    },
    {
        id: 8,
        title: "The Wolf of Wall Street",
        poster: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
        runtime: "3h",
        trailer: "https://www.youtube.com/watch?v=iszwuX1AK6A",
        description:
            "Based on a true story, ambitious stockbroker Jordan Belfort rises to incredible wealth through corruption and fraud. His extravagant lifestyle filled with greed, excess, and crime eventually attracts the attention of federal authorities."
    },
    {
        id: 9,
        title: "Top Gun: Maverick",
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        runtime: "2h 11m",
        trailer: "https://www.youtube.com/watch?v=giXco2jaZ_4",
        description:
            "Decades after becoming a legendary pilot, Maverick returns to train a new generation of Top Gun graduates. Facing dangerous missions and painful memories, he must confront his past while protecting his team in the skies."
    },
    {
        id: 10,
        title: "Dune",
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        runtime: "2h 35m",
        trailer: "https://www.youtube.com/watch?v=n9xhJrPXop4",
        description:
            "Paul Atreides journeys to the desert planet Arrakis, the only source of a valuable substance called spice. As political conflicts grow, he discovers his destiny and prepares to lead a rebellion against powerful enemies."
    },
    {
        id: 11,
        title: "The Godfather",
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        runtime: "2h 55m",
        trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
        description:
            "The aging patriarch of a powerful mafia family prepares his reluctant son Michael to inherit the criminal empire. Loyalty, betrayal, and violence shape their lives as the family fights to maintain control and respect."
    },
    {
        id: 12,
        title: "Pulp Fiction",
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        runtime: "2h 34m",
        trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
        description:
            "Interconnected stories of gangsters, hitmen, and criminals unfold in unexpected ways throughout Los Angeles. Filled with sharp dialogue, dark humor, and memorable characters, the film delivers a unique and stylish crime experience."
    },
    {
        id: 13,
        title: "Parasite",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        runtime: "2h 12m",
        trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
        description:
            "A poor family cleverly infiltrates the lives of a wealthy household by pretending to be unrelated professionals. What begins as a smart scheme slowly turns into a tense and unpredictable story about class inequality."
    },
];

export default movies;