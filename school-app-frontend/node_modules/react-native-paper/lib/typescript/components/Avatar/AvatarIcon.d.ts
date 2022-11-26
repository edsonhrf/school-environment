import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
import { IconSource } from '../Icon';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Icon to display for the `Avatar`.
     */
    icon: IconSource;
    /**
     * Size of the avatar.
     */
    size?: number;
    /**
     * Custom color for the icon.
     */
    color?: string;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Icon to display for the `Avatar`.
     */
    icon: IconSource;
    /**
     * Size of the avatar.
     */
    size?: number | undefined;
    /**
     * Custom color for the icon.
     */
    color?: string | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "color" | "size" | "icon" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Icon to display for the `Avatar`.
     */
    icon: IconSource;
    /**
     * Size of the avatar.
     */
    size?: number | undefined;
    /**
     * Custom color for the icon.
     */
    color?: string | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ icon, size, style, theme, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
