export interface Movies {
    Awards: {
        wins: number;
        nominations: number;
        text: string;
    };
    Imdb: {
        rating: number;
        votes: number;
        id: number;
    };
    Tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number;
        };
    }
}