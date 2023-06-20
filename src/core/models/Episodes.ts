export class Episodes {
    constructor(
        public _id: string,
        public air_date: Date,
        public episodes: Episode[],
        public name: string,
        public overview: string,
        public id: number,
        public poster_path: string,
        public season_number: number
    ) { }
}

export class Episode {
    constructor(
        public air_date: Date,
        public episode_number: number,
        public id: number,
        public name: string,
        public overview: string,
        public production_code: string,
        public season_number: number,
        public show_id: number,
        public still_path: string,
        public vote_average: number,
        public vote_count: number,
        public crew: Crew[],
        public guest_stars: GuestStar[]
    ) { }
}

export class Crew {
    constructor(
        public id: number,
        public credit_id: string,
        public name: string,
        public department: Department,
        public job: Job,
        public gender: number,
        public profile_path: null | string
    ) { }
}

export enum Department {
    Directing = "Directing",
    Production = "Production",
    Writing = "Writing",
}

export enum Job {
    CoExecutiveProducer = "Co-Executive Producer",
    CoProducer = "Co-Producer",
    ConsultingProducer = "Consulting Producer",
    Director = "Director",
    ExecutiveProducer = "Executive Producer",
    Producer = "Producer",
    Story = "Story",
    SupervisingProducer = "Supervising Producer",
    Teleplay = "Teleplay",
    Writer = "Writer",
}

export class GuestStar {
    constructor(
        public id: number,
        public name: string,
        public credit_id: string,
        public character: string,
        public order: number,
        public gender: number,
        public profile_path: null | string
    ) { }
}