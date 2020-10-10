const Generation = require('./index');

class GenerationEngine {
    constructor() {
        this.generation = null;
        this.timer = null;
    }

    start() {
        this.BuildNewGeneration()
    }

    stop() {
        clearTimeout(this.timer)
    }

    BuildNewGeneration() {
        this.generation = new Generation();

        console.log('new generation', this.generation);

        this.timer = setTimeout(() => {
            this.BuildNewGeneration()
        }, this.generation.expiration.getTime() - Date.now());
    }
}

module.exports = GenerationEngine;