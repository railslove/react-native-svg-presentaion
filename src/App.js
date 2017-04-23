import React, {Component} from 'react'
import {StyleSheet, Easing, Text, Dimensions, View, Animated, Button, ScrollView} from 'react-native'
import Svg, {Circle, Line} from 'react-native-svg'
import Pendulum from './Pendulum'
const {width} = Dimensions.get('window')

class ButtonsBoard extends Component {
  constructor (props) {
    super(props)
    this.state = {c1: 'red', c2: 'red', c3: 'red', c4: 'red'}
  }
  render () {
    return (
      <View>
        <View style={styles.buttonConteiner}>
          <Button style={styles.button} title='99 Problems' onPress={() => { this.setState({c1: 'yellow'}) }} color={this.state.c1} />
        </View>
        <View style={styles.buttonConteiner}>
          <Button style={styles.button} title='99 Problems' onPress={() => { this.setState({c2: 'yellow'}) }} color={this.state.c2} />
        </View>
        <View style={styles.buttonConteiner}>
          <Button style={styles.button} title='99 Problems' onPress={() => { this.setState({c3: 'yellow'}) }} color={this.state.c3} />
        </View>
        <View style={styles.buttonConteiner}>
          <Button style={styles.button} title='99 Problems' onPress={() => { this.setState({c4: 'yellow'}) }} color={this.state.c4} />
        </View>
      </View>
    )
  }
}

class SvgCirclesBoard extends Component {
  constructor (props) {
    super(props)
    this.state = {c1: 'red', c2: 'red', c3: 'red', c4: 'red'}
  }
  render () {
    return (
      <Svg height={90} width={width} >
        <Circle cx='60' cy='50' r='35' fill={this.state.c1} onPressIn={() => { this.setState({c1: 'blue'}) }} onPressOut={() => { this.setState({c1: 'yellow'}) }} />
        <Circle cx='140' cy='50' r='35' fill={this.state.c2} onPressIn={() => { this.setState({c2: 'blue'}) }} onPressOut={() => { this.setState({c2: 'yellow'}) }} />
        <Circle cx='220' cy='50' r='35' fill={this.state.c3} onPressIn={() => { this.setState({c3: 'blue'}) }} onPressOut={() => { this.setState({c3: 'yellow'}) }} />
        <Circle cx='300' cy='50' r='35' fill={this.state.c4} onPressIn={() => { this.setState({c4: 'blue'}) }} onPressOut={() => { this.setState({c4: 'yellow'}) }} />
      </Svg>
    )
  }
}

class SvgAnimation extends Component {
  constructor (props) {
    super(props)
    this.swingPendulum = this.swingPendulum.bind(this)
    this.swingValue = new Animated.Value(0.5)
  }

  swingPendulum () {
    Animated.sequence([
      Animated.timing(this.swingValue, { toValue: 1, duration: 1500, easing: Easing.linear() }),
      Animated.timing(this.swingValue, { toValue: 0, duration: 1500, easing: Easing.linear() })
    ]).start(() => { this.swingPendulum() })
  }
  render () {
    const spin = this.swingValue.interpolate({inputRange: [0, 0.5, 1], outputRange: ['130deg', '175deg', '220deg']})
    return (
      <View>
        <Svg width={width} height={3}>
          <Line x1={0} y1={0} x2={width} y2={0} stroke='#1D7098' strokeWidth='6' />
        </Svg>
        <Animated.View style={{
          position: 'relative',
          bottom: 100,
          width: width,
          height: width,
          transform: [{rotate: spin}]
        }}>
          <Pendulum />
        </Animated.View>
        <Button title='swing!' onPress={this.swingPendulum} />
      </View>
    )
  }
}

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {c1: 'red', c2: 'red', c3: 'red', c4: 'red'}
  }

  render () {
    return (
      <ScrollView>
        <Text style={styles.headerText}>SVG Animaiton</Text>
        <SvgAnimation />
        <Text style={styles.headerText}>SVG press events</Text>
        <SvgCirclesBoard />
        <Text style={styles.headerText}>Button press events</Text>
        <ButtonsBoard />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10
  },
  buttonConteiner: {
    paddingHorizontal: 30,
    paddingVertical: 4
  }
})
