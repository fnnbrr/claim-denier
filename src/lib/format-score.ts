export function formatScore(score: number, formatStyle: FormatStyle): string
{
    if (score < 1000)
    {
        return score.toFixed(0);
    }

    switch (formatStyle)
    {
        case FormatStyle.long: {
            return scoreFormatterLong.format(score);
        }
        case FormatStyle.short: {
            return scoreFormatterShort.format(score);
        }
    }
}

export enum FormatStyle
{
    long,
    short,
}

const scoreFormatterLong = new Intl.NumberFormat(undefined,
    {
        notation: "compact",
        compactDisplay: "long"
    });

const scoreFormatterShort = new Intl.NumberFormat(undefined,
    {
        notation: "compact",
        compactDisplay: "short"
    });