import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = {
    /**
     * Determines whether clicking outside the dialog dismiss it.
     */
    dismissable?: boolean;
    /**
     * Callback that is called when the user dismisses the dialog.
     */
    onDismiss?: () => void;
    /**
     * Determines Whether the dialog is visible.
     */
    visible: boolean;
    /**
     * Content of the `Dialog`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<Props, "style" | "children" | "visible" | "onDismiss" | "dismissable"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined; /**
     * Callback that is called when the user dismisses the dialog.
     */
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ children, dismissable, onDismiss, visible, style, theme, }: Props): JSX.Element;
    Content: {
        (props: import("./DialogContent").Props): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("./DialogActions").Props): JSX.Element;
        displayName: string;
    };
    Title: React.ComponentType<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: InternalTheme;
    }, keyof import("react-native").TextProps> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined; /**
         * Callback that is called when the user dismisses the dialog.
         */
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: InternalTheme;
    }> & {
        ({ children, theme, style, ...rest }: import("./DialogTitle").Props): JSX.Element;
        displayName: string;
    }, {}>;
    ScrollArea: {
        (props: import("./DialogScrollArea").Props): JSX.Element;
        displayName: string;
    };
    Icon: {
        ({ size, color, icon }: import("./DialogIcon").Props): JSX.Element | null;
        displayName: string;
    };
}, {}>;
export default _default;
