import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Pie } from 'react-native-pathjs-charts'

// create a component
class Overview extends Component {
    render() {
        let data = [{
          "name": "Free Space(GB)",
          "space": 120
        }, {
          "name": "Used Space(GB)",
          "space": 500
        }]
    
        let options = {
          margin: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          width: 350,
          height: 350,
          color: '#2980B9',
          r: 50,
          R: 150,
          legendPosition: 'topLeft',
          animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
          },
          label: {
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            color: '#ECF0F1'
          }
        }
    
        return (
          <View style={styles.container}>
            <Pie data={data}
              options={options}
              accessorKey="space"
              margin={{top: 20, left: 20, right: 20, bottom: 20}}
              color="#2980B9"
              pallete={
                [
                  {'r':25,'g':99,'b':201},
                  {'r':24,'g':175,'b':35}
                ]
              }
              r={50}
              R={150}
              legendPosition="bottomLeft"
              label={{
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                color: '#ECF0F1'
              }}
              />
          </View>
        )
      }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

export default Overview;
