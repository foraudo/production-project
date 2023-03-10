type Mods = Record<string, boolean | string>;

export const classNames = (
    cls: string,
    mods: Mods = {},
    addentional: string[] = [],
): string => [
    cls,
    ...addentional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([cls]) => cls),
].join(' ');
