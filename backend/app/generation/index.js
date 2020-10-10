// const {REFRESH_RATE, SECONDS} = require('./config');

const {
    REFRESH_RATE,
    SECONDS
} = require("../config");
const Dragon = require("../dragon");

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
    }

    calculateExpiration() {

        const expirationPeriod = Math.floor(Math.random() * refreshRate);

        const msUntilExpiration = Math.random() < 0.5 ?
            refreshRate - expirationPeriod :
            refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration)
    }

    newDragon() {
        if (Date.now() > this.expiration) {
            // throw new Error(`This generation is expired on ${this.expiration}`)
            return new Error(`This generation is expired on ${this.expiration}`)
        }

        return new Dragon();
    }
}

module.exports = Generation;