import { Appareil } from "../models/appareil";

export class AppareilService {


    appareilList: Appareil[] = [
        {
            name: 'MAchine a lever',
            description: [
                'volume: 6littre',
                'Temps: 20minutes',
                'Consommation: 15kw'
            ],
            isOn: true
        },
        {
            name: 'tele',
            description: [
                'volume: 16littre',
                'Temps: 2minutes',
                'Consommation: 10kw'
            ],
            isOn: false
        }
    ]
    constructor(
    ) {
    }

}