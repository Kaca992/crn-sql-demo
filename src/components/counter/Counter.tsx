import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


interface ICounterProps {
    value?: number;
    onBtnClick(value: number): void;
    onResetClick(): void;
}

export default class Counter extends React.Component<ICounterProps, any> {
  constructor(props: ICounterProps){
      super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Counter: {this.props.value}</Text>
        <Button title='Add' onPress={() => this.props.onBtnClick(1)} />
        <Button title='Subtract' onPress={() => this.props.onBtnClick(-1)} />
        <Button title='Reset' onPress={() => this.props.onResetClick()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})