import {Weather} from './weather';

export class Country {
    constructor(
        public name: string,
        public weather: Weather
    ){}
}