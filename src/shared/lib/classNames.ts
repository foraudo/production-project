type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, addentional: string[]): string => {
  return [
    cls,
    ...addentional,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
};
