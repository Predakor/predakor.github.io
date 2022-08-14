const classNamePrefix = "animate__";
const requiredClass = `${classNamePrefix}animated`;

export const animation = (animationName: string): string => {
  return `${requiredClass} ${classNamePrefix + animationName}`;
};

export const delay = (amount: number | string): string => {
  return `${classNamePrefix}delay-${amount}s`;
};

export const duration = (animationDurration: string): string => {
  return `${classNamePrefix}${animationDurration}`;
};
