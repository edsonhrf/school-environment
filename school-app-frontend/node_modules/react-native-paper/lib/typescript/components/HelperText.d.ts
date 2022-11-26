import * as React from 'react';
import { Animated, StyleProp, TextStyle } from 'react-native';
import type { $Omit, InternalTheme } from '../types';
import AnimatedText from './Typography/AnimatedText';
export declare type Props = $Omit<$Omit<React.ComponentPropsWithRef<typeof AnimatedText>, 'padding'>, 'type'> & {
    /**
     * Type of the helper text.
     */
    type: 'error' | 'info';
    /**
     * Whether to display the helper text.
     */
    visible?: boolean;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: 'none' | 'normal';
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
declare const _default: React.ComponentType<Pick<$Omit<$Omit<(Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    variant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    style?: StyleProp<TextStyle>;
    theme: InternalTheme;
}, keyof import("react-native").TextProps | "variant" | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}) | (Pick<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    variant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    style?: StyleProp<TextStyle>;
    theme: InternalTheme;
}, keyof import("react-native").TextProps | "variant" | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}, "theme" | keyof import("react-native").TextProps | "key" | "variant"> & React.RefAttributes<React.Component<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    variant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    style?: StyleProp<TextStyle>;
    theme: InternalTheme;
}, keyof import("react-native").TextProps | "variant" | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}, any, any>>), "padding">, "type"> & {
    /**
     * Type of the helper text.
     */
    type: "error" | "info";
    /**
     * Whether to display the helper text.
     */
    visible?: boolean | undefined;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: "normal" | "none" | undefined;
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * TestID used for testing purposes
     */
    testID?: string | undefined;
}, "style" | "children" | "type" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onTextLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "padding" | "ref" | "key" | "variant"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$Omit<$Omit<(Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    variant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    style?: StyleProp<TextStyle>;
    theme: InternalTheme;
}, keyof import("react-native").TextProps | "variant" | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}) | (Pick<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    variant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    style?: StyleProp<TextStyle>;
    theme: InternalTheme;
}, keyof import("react-native").TextProps | "variant" | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}, "theme" | keyof import("react-native").TextProps | "key" | "variant"> & React.RefAttributes<React.Component<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    variant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    style?: StyleProp<TextStyle>;
    theme: InternalTheme;
}, keyof import("react-native").TextProps | "variant" | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}, any, any>>), "padding">, "type"> & {
    /**
     * Type of the helper text.
     */
    type: "error" | "info";
    /**
     * Whether to display the helper text.
     */
    visible?: boolean | undefined;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: "normal" | "none" | undefined;
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * TestID used for testing purposes
     */
    testID?: string | undefined;
}> & (({ style, type, visible, theme, onLayout, padding, ...rest }: Props) => JSX.Element), {}>;
export default _default;
