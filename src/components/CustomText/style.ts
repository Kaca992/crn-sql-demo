import { StyleSheet } from 'react-native';
import {BASE_FONT_SIZE} from '../../style/common';

let baseFontSize = 16;

export const TextSize = StyleSheet.create({
        h1:{
              fontSize: BASE_FONT_SIZE * 2
        },

        h2:{
               fontSize: BASE_FONT_SIZE * 1.5
        },

        text:{
                fontSize: BASE_FONT_SIZE
        }
});

export const TextWeight = StyleSheet.create({
    bold:{
        fontWeight: 'bold'
    },
    normal:{
        fontWeight: 'normal'
    }
})

export type TextFontType = "h1" | "h2" | "text";