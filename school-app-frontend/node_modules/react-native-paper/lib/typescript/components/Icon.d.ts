import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import type { InternalTheme } from '../types';
declare type IconSourceBase = string | ImageSourcePropType;
export declare type IconSource = IconSourceBase | Readonly<{
    source: IconSourceBase;
    direction: 'rtl' | 'ltr' | 'auto';
}> | ((props: IconProps & {
    color: string;
}) => React.ReactNode);
declare type IconProps = {
    size: number;
    allowFontScaling?: boolean;
};
declare type Props = IconProps & {
    color?: string;
    source: any;
    /**
     * @optional
     */
    theme: InternalTheme;
};
export declare const isValidIcon: (source: any) => boolean;
export declare const isEqualIcon: (a: any, b: any) => boolean;
declare const _default: React.ComponentType<Pick<IconProps & {
    color?: string | undefined;
    source: any;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "source" | "color" | keyof IconProps> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<IconProps & {
    color?: string | undefined;
    source: any;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & (({ source, color, size, theme, ...rest }: Props) => any), {}>;
export default _default;
