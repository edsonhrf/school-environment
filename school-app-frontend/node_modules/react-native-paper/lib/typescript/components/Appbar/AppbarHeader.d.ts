import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
import { Appbar } from './Appbar';
export declare type Props = React.ComponentProps<typeof Appbar> & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (56).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: 'small' | 'medium' | 'large' | 'center-aligned';
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
};
declare const _default: React.ComponentType<Pick<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    elevated?: boolean | undefined;
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof React.RefAttributes<View> | "elevated" | "safeAreaInsets"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (56).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof React.RefAttributes<View> | "elevated" | "safeAreaInsets" | "statusBarHeight"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    elevated?: boolean | undefined;
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof React.RefAttributes<View> | "elevated" | "safeAreaInsets"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (56).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}> & {
    ({ statusBarHeight, style, dark, mode, elevated, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
declare const AppbarHeaderWithTheme: React.ComponentType<Pick<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    elevated?: boolean | undefined;
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof React.RefAttributes<View> | "elevated" | "safeAreaInsets"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (56).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof React.RefAttributes<View> | "elevated" | "safeAreaInsets" | "statusBarHeight"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    elevated?: boolean | undefined;
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof React.RefAttributes<View> | "elevated" | "safeAreaInsets"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (56).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}> & {
    ({ statusBarHeight, style, dark, mode, elevated, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export { AppbarHeaderWithTheme as AppbarHeader };
