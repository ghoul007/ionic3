export class Appareil {
    constructor(
        public name: string,
        public startTime='',
        public endTime='',
        public description: string[],
        public isOn: boolean) { }
}