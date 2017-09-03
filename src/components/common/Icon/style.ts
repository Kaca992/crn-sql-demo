import { StyleSheet } from 'react-native';
import {BASE_FONT_SIZE} from '../../../style/common';

export type ICON_TYPES = "sm" | "med" | "lg" | "xlg";
export const ICON_SIZES = ({
        sm: BASE_FONT_SIZE,
        med: BASE_FONT_SIZE * 2,
        lg: BASE_FONT_SIZE * 4,
        xlg: BASE_FONT_SIZE * 8
});

export const styles = StyleSheet.create({
        iconStyle: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
        }
});



