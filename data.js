let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
        iLikeIt: true,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
        iLikeIt: true,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
        iLikeIt: true,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
        iLikeIt: true,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
        iLikeIt: true,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
        iLikeIt: true,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
        iLikeIt: false,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
        iLikeIt: true,
    },
    {
        artist: "Guns N' Roses",
        title: "Appetite for Destruction",
        year: 1987,
        genres: ["hard rock"],
        sale: 38000000,
        iLikeIt: true,

    }
];

// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE
let averageSale = (bestSellingAlbums[0].sale + bestSellingAlbums[1].sale + bestSellingAlbums[2].sale + bestSellingAlbums[3].sale + bestSellingAlbums[4].sale + bestSellingAlbums[5].sale + bestSellingAlbums[6].sale + bestSellingAlbums[7].sale) /8;
let averageAge = (2022 - bestSellingAlbums[0].year + 2022 - bestSellingAlbums[1].year + 2022 - bestSellingAlbums[2].year + 2022 - bestSellingAlbums[3].year + 2022 - bestSellingAlbums[4].year + 2022 - bestSellingAlbums[5].year + 2022 - bestSellingAlbums[6].year + 2022 - bestSellingAlbums[7].year) /8;
let newestAlbum = (bestSellingAlbums[6].title);
let oldestAlbum = (bestSellingAlbums[3].title);
let albumsOfEagles = (bestSellingAlbums[4].title + bestSellingAlbums[5].title);
let isBothSoftRock = (bestSellingAlbums[4].genres[1] === bestSellingAlbums[5].genres[0]);
// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "averageSale", content: averageSale, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"},
        {name: "newestAlbum", content: newestAlbum, type: "object"},
        {name: "oldestAlbum", content: oldestAlbum, type: "object"},
        {name: "albumsOfEagles", content: albumsOfEagles, type: "object"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
