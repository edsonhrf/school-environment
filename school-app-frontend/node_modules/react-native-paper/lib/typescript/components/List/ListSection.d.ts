import * as React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Title text for the section.
     */
    title?: string;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Title text for the section.
     */
    title?: string | undefined;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}, "title" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "titleStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Title text for the section.
     */
    title?: string | undefined;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}> & {
    ({ children, title, titleStyle, style, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
