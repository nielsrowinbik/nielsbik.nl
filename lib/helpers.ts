import type { PublicationItem, ResumeItem } from '.contentlayer/types';

export const byStart = (a: ResumeItem, b: ResumeItem) =>
    Date.parse(b.startDate) - Date.parse(a.startDate);

export const byYear = (a: PublicationItem, b: PublicationItem) =>
    b.year - a.year;

export function groupBy<T>(xs: T[], key: string): Record<string, T[]> {
    return xs.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}

export const workFirst = (a: string, b: string): number => {
    if (a === 'work experience') return -1;
    if (b === 'work experience') return 1;

    return a.localeCompare(b);
};
