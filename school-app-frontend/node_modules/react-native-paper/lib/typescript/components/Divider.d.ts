import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { $RemoveChildren, InternalTheme } from '../types';
export declare type Props = $RemoveChildren<typeof View> & {
    /**
     * @renamed Renamed from 'inset' to 'leftInset` in v5.x
     * Whether divider has a left inset.
     */
    leftInset?: boolean;
    /**
     * @supported Available in v5.x with theme version 3
     *  Whether divider has a horizontal inset on both sides.
     */
    horizontalInset?: boolean;
    /**
     * @supported Available in v5.x with theme version 3
     *  Whether divider should be bolded.
     */
    bold?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<$RemoveChildren<typeof View> & {
    /**
     * @renamed Renamed from 'inset' to 'leftInset` in v5.x
     * Whether divider has a left inset.
     */
    leftInset?: boolean | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     *  Whether divider has a horizontal inset on both sides.
     */
    horizontalInset?: boolean | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     *  Whether divider should be bolded.
     */
    bold?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "bold" | "style" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "leftInset" | "horizontalInset"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<typeof View> & {
    /**
     * @renamed Renamed from 'inset' to 'leftInset` in v5.x
     * Whether divider has a left inset.
     */
    leftInset?: boolean | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     *  Whether divider has a horizontal inset on both sides.
     */
    horizontalInset?: boolean | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     *  Whether divider should be bolded.
     */
    bold?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & (({ leftInset, horizontalInset, style, theme, bold, ...rest }: Props) => JSX.Element), {}>;
export default _default;
