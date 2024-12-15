export class StatMod
{
    addBonus: number = 0;
    multBonus: number = 0;

    modify(baseValue: number): number
    {
        return (baseValue + this.addBonus) * (1 + this.multBonus);
    }
}