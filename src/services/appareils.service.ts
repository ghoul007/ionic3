import { Appareil } from "../models/appareil";
import { Subject } from "rxjs/Subject";

import * as firebase from 'firebase';
import { resolveDefinition } from "@angular/core/src/view/util";

export class AppareilService {

    appareil$ = new Subject<Appareil[]>();

    appareilList: Appareil[] = [
        {
            name: 'MAchine a lever',
            description: [
                'volume: 6littre',
                'Temps: 20minutes',
                'Consommation: 15kw'
            ],
            isOn: true,
            startTime: "",
            endTime: "",
        },
        {
            name: 'tele',
            description: [
                'volume: 16littre',
                'Temps: 2minutes',
                'Consommation: 10kw'
            ],
            isOn: false,
            startTime: "",
            endTime: "",
        }
    ]
    constructor(
    ) {
    }

    addApareil(appareil: Appareil) {
        this.appareilList.push(appareil);
        this.emitAppareil();
    }

    emitAppareil() {
        this.appareil$.next(this.appareilList.slice());
    }
    
    
    saveData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('appareils').set(this.appareilList).then(
                (data) => {
                    resolve(data);
                  
                }
            ).catch((error) => {
                reject(error)
            })
        })
    }

    fetchData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('appareils').once('value').then(
                (data) => {

                    this.appareilList =  data.val();
                    this.emitAppareil()
                    resolve("Donneé recuprer avec succes");
                }
            ).catch((error) => {
                reject(error)
            })
        })
    }

}