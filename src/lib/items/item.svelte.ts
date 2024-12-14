export abstract class Item
{
    abstract name: string;

    quantity: number = $state(0);

    incrementQuantity(increment: number): void
    {
        this.quantity += increment;
    }

    abstract getCost(): number;
}