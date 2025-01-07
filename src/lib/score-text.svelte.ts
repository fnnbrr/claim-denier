export class ScoreText
{
    id: number;
    scoreDelta: number;
    lifetimeNormalized: number = 0;
    spawnPosX: number;
    spawnPosY: number;

    static currentId: number = 0;

    constructor(scoreDelta: number, spawnPosX: number, spawnPosY: number, removeFunction: (scoreText: ScoreText) => void)
    {
        this.scoreDelta = scoreDelta;
        this.spawnPosX = spawnPosX;
        this.spawnPosY = spawnPosY;

        this.id = ScoreText.currentId;
        ScoreText.currentId += 1;

        setTimeout(() =>
        {
            removeFunction(this);
        }, 500);
    }
}