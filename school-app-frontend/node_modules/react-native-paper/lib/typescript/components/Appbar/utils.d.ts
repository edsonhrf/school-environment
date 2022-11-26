import React from 'react';
import type { ColorValue } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type AppbarModes = 'small' | 'medium' | 'large' | 'center-aligned';
export declare const getAppbarColor: (theme: InternalTheme, elevation: number, customBackground?: ColorValue, elevated?: boolean) => ColorValue;
declare type RenderAppbarContentProps = {
    children: React.ReactNode;
    isDark: boolean;
    shouldCenterContent?: boolean;
    isV3: boolean;
    renderOnly?: React.ComponentType<any>[];
    renderExcept?: React.ComponentType<any>[];
    mode?: AppbarModes;
};
export declare const DEFAULT_APPBAR_HEIGHT = 56;
export declare const modeAppbarHeight: {
    small: number;
    medium: number;
    large: number;
    'center-aligned': number;
};
export declare const modeTextVariant: {
    small: string;
    medium: string;
    large: string;
    'center-aligned': string;
};
export declare const renderAppbarContent: ({ children, isDark, shouldCenterContent, isV3, renderOnly, renderExcept, mode, }: RenderAppbarContentProps) => (string | number | React.ReactFragment | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>)[];
export {};
