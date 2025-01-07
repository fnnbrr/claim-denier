export class ScoreTextSpawner
{
    static get instance()
    {
        return this.#instance;
    }

    static #instance: ScoreTextSpawner;

    static
    {
        console.log("Initializing Score Text Spawner");
        this.#instance = new ScoreTextSpawner();
    }

    #canSpawn: boolean = false;
    #queuedScoreDelta: number = 0;

    constructor()
    {
        // Limit spawning score text to 16x per second
        setInterval(() =>
        {
            this.SpawnScoreText();
            this.#canSpawn = true;
        }, 62.5);
    }

    public QueueScoreText(scoreDelta: number): void
    {
        this.#queuedScoreDelta += scoreDelta;

        if (this.#canSpawn)
        {
            this.SpawnScoreText();
            this.#canSpawn = false;
        }
    }

    private SpawnScoreText()
    {
        if (this.#queuedScoreDelta === 0) return;

        console.log(this.#queuedScoreDelta);

        this.#queuedScoreDelta = 0;
    }
}