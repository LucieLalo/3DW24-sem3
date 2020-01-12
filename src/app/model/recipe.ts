export class Recipe {
    constructor(
        public id: number,
        public title: string,
        public rating: number,
        public type: string,
        public picture: string,
        public description: string
        /* ingrédients */
    ) { }
}
