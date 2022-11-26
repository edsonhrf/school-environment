import type { ColorValue } from 'react-native';
import type { InternalTheme } from '../../types';
declare type BaseProps = {
    theme: InternalTheme;
    isOutlined: boolean;
    disabled?: boolean;
};
export declare const getChipColors: ({ isOutlined, theme, selectedColor, showSelectedOverlay, customBackgroundColor, disabled, }: BaseProps & {
    customBackgroundColor?: ColorValue | undefined;
    disabled?: boolean | undefined;
    showSelectedOverlay?: boolean | undefined;
    selectedColor?: string | undefined;
}) => {
    borderColor: string;
    textColor: string;
    iconColor: string;
    underlayColor: string;
    backgroundColor: string;
    selectedBackgroundColor: string;
};
export {};
