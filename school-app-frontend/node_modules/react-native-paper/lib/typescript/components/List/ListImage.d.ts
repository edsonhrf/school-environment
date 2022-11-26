import * as React from 'react';
import { StyleProp, ImageSourcePropType, ImageStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = {
    source: ImageSourcePropType;
    variant?: 'image' | 'video';
    style?: StyleProp<ImageStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<Props, "source" | "style" | "variant"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ style, source, variant, theme }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
