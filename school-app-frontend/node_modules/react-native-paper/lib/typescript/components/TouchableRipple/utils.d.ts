import type { InternalTheme } from '../../types';
export declare const getTouchableRippleColors: ({ theme, rippleColor, underlayColor, }: {
    theme: InternalTheme;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
}) => {
    calculatedRippleColor: string;
    calculatedUnderlayColor: string;
};
