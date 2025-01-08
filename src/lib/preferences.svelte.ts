export class Preferences
{
    static get instance()
    {
        return this.#instance;
    }

    static #instance: Preferences;

    static {
        console.log("Initializing Preferences");
        this.#instance = new Preferences();
    }

    constructor()
    {

    }

    isMuted: boolean = $state(false);
};