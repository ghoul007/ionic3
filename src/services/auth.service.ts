import * as firebase from 'firebase';

export class AuthService {

    signUp(email: string, password: string) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
                (user) => {
                    resolve(user);
                }
            ).catch(
                (error) => {
                    reject(error)
                }
            )

        })

    }

    signIn(email: string, password: string) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(
                (user) => {
                    resolve(user);
                }
            ).catch(
                (error) => {
                    reject(error)
                }
            )

        })

    }


    signout() {
        firebase.auth().signOut();
    }
}