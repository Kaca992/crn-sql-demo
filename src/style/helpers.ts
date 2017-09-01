import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const hscale = (size: number) => width / guidelineBaseWidth * size;
const vscale = (size: number) => height / guidelineBaseHeight * size;

//scale but with a factor
const mhscale = (size: number, factor = 1) => size + ( hscale(size) - size ) * factor;
const mvscale = (size: number, factor = 1) => size + ( vscale(size) - size ) * factor;

export {mhscale, mvscale};