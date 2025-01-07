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

    public scoreTexts: ScoreText[] = $state([]);

    #canSpawn: boolean = false;
    #queuedScoreDelta: number = 0;
    #lastSpawnPosX: number = 0;
    #lastSpawnPosY: number = 0;

    #currentId: number = 0;

    constructor()
    {
        // Limit spawning score text to 16x per second
        setInterval(() =>
        {
            this.SpawnScoreText();
            this.#canSpawn = true;
        }, 62.5);
    }

    public QueueScoreText(scoreDelta: number, spawnPosX: number, spawnPosY: number): void
    {
        this.#queuedScoreDelta += scoreDelta;
        this.#lastSpawnPosX = spawnPosX;
        this.#lastSpawnPosY = spawnPosY;

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

        this.scoreTexts.push({
            id: this.#currentId,
            scoreDelta: this.#queuedScoreDelta,
            lifetimeNormalized: 0,
            spawnPosX: this.#lastSpawnPosX,
            spawnPosY: this.#lastSpawnPosY,
        });

        this.#currentId += 1;

        this.#queuedScoreDelta = 0;
    }
}

export interface ScoreText
{
    id: number;
    scoreDelta: number;
    lifetimeNormalized: number;
    spawnPosX: number;
    spawnPosY: number;
}