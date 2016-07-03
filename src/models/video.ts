export class Video {
    rating: number

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public url: string,
        public ratings: number[]
    ) {
        this.calculateRating();
    }

    addRating(value: number) {
        this.ratings.push(value);
        this.calculateRating();
    }

    private calculateRating() {
        let sum = 0;
        for (let r of this.ratings) {
            sum += r;
        }
        this.rating = Math.round((sum / this.ratings.length) * 10) / 10;
    }
}
