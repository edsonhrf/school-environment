import type { InternalTheme } from '../../types';
import type { IconSource } from '../Icon';
export declare const MIN_WIDTH = 112;
export declare const MAX_WIDTH = 280;
declare type ContentProps = {
    isV3: boolean;
    iconWidth: number;
    leadingIcon?: IconSource;
    trailingIcon?: IconSource;
};
declare type ColorProps = {
    theme: InternalTheme;
    disabled?: boolean;
};
export declare const getMenuItemColor: ({ theme, disabled }: ColorProps) => {
    titleColor: string;
    iconColor: string;
    underlayColor: string | undefined;
};
export declare const getContentMaxWidth: ({ isV3, iconWidth, leadingIcon, trailingIcon, }: ContentProps) => number;
export {};
