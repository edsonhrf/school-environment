import type { InternalTheme } from '../../types';
declare type IconButtonMode = 'outlined' | 'contained' | 'contained-tonal';
export declare const getIconButtonColor: ({ theme, disabled, mode, selected, customIconColor, customContainerColor, }: {
    theme: InternalTheme;
    disabled?: boolean | undefined;
    selected?: boolean | undefined;
    mode?: IconButtonMode | undefined;
    customIconColor?: string | undefined;
    customContainerColor?: string | undefined;
}) => {
    iconColor: string;
    backgroundColor: string | undefined;
    rippleColor: string;
    borderColor: string | undefined;
};
export {};
