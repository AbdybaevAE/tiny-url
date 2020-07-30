enum Level {
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const format = (level: string, args: any[]): string => {
    return `[${level}]: ${args.join(' ')}`;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const info = (...args: any[]): void => {
    console.log(format(Level.INFO, args));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const error = (...args: any[]): void => {
    console.error(format(Level.ERROR, args));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const warn = (...args: any[]): void => {
    console.warn(format(Level.WARN, args));
};
export default {
    info,
    warn,
    error,
};
