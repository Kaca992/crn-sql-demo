import { StyleSheet } from 'react-native';
import {BASE_FONT_SIZE} from '../../../style/common';

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

export const FontWeight = StyleSheet.create({
    bold:{
        fontWeight: 'bold'
    },
    normal:{
        fontWeight: 'normal'
    }
})

export const FontStyle = StyleSheet.create({
    italic:{
        fontStyle : 'italic'
    },
    normal:{
        fontStyle : 'normal'
    }
})

export type TextFontType = "h1" | "h2" | "text";