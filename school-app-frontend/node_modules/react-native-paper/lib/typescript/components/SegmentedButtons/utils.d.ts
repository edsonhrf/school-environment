import { ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
declare type BaseProps = {
    theme: InternalTheme;
    disabled?: boolean;
    checked: boolean;
};
export declare const getSegmentedButtonDensityPadding: ({ density, }: {
    density?: "small" | "regular" | "medium" | "high" | undefined;
}) => number;
export declare const getDisabledSegmentedButtonStyle: ({ theme, index, buttons, }: {
    theme: InternalTheme;
    buttons: {
        disabled?: boolean;
    }[];
    index: number;
}) => ViewStyle;
export declare const getSegmentedButtonBorderRadius: ({ segment, theme, }: {
    theme: InternalTheme;
    segment?: "first" | "last" | undefined;
}) => ViewStyle;
export declare const getSegmentedButtonColors: ({ theme, disabled, checked, }: BaseProps) => {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    borderWidth: number;
};
export {};
