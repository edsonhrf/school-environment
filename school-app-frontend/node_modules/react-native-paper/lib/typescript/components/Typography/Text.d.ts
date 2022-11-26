import * as React from 'react';
import { StyleProp, Text as NativeText, TextStyle } from 'react-native';
import { MD3TypescaleKey, ThemeProp } from '../../types';
export declare type Props = React.ComponentProps<typeof NativeText> & {
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    variant?: keyof typeof MD3TypescaleKey;
    children: React.ReactNode;
    theme?: ThemeProp;
    style?: StyleProp<TextStyle>;
};
declare const _default: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    variant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    children: React.ReactNode;
    theme?: ThemeProp | undefined;
    style?: StyleProp<TextStyle>;
} & React.RefAttributes<{}>>;
export default _default;
