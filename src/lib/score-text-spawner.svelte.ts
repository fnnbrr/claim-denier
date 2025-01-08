import { ScoreText } from "./score-text.svelte";

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

        this.scoreTexts.push(new ScoreText(this.#queuedScoreDelta, this.#lastSpawnPosX, this.#lastSpawnPosY, this.DespawnScoreText.bind(this)));

        this.#queuedScoreDelta = 0;
    }

    private DespawnScoreText(scoreText: ScoreText)
    {
        const removeIndex: number = this.scoreTexts.indexOf(scoreText);

        if (removeIndex > -1)
        {
            this.scoreTexts.splice(removeIndex, 1);
        }
        else
        {
            console.error(`ScoreText not found: ${JSON.stringify(scoreText)}`);
        }
    }
}
