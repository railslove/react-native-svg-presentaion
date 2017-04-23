import React from 'react'
import {Dimensions} from 'react-native'
import Svg, { Circle, G, LinearGradient, RadialGradient, Line, Defs, Stop} from 'react-native-svg'
const {height, width} = Dimensions.get('window')
class Pendulum extends React.Component {
  render () {
    const referenceLength = width / 2
    return (
      <Svg height={height} width={width}>
        <Defs>
          <RadialGradient id='radial' cx='25' cy='25' rx='65' ry='55' fx='250' fy='25'>
            <Stop offset='0' stopColor='#26D9FD' stopOpacity='0.7' />
            <Stop offset='1' stopColor='#1D7098' stopOpacity='0.8' />
          </RadialGradient>
        </Defs>
        <Defs>
          <LinearGradient id='linear' x1={0} y1={100} x2={6} y2={100}>
            <Stop offset='10%' stopColor='#2D7098' stopOpacity={0.9} />
            <Stop offset='60%' stopColor='#26D9FD' stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <G>
          <Line x1={referenceLength} y1={60} x2={referenceLength} y2={referenceLength - 20} stroke='url(#linear)' strokeWidth='6' />
          <Circle cx={referenceLength} cy={referenceLength} r='20' fill='url(#radial)' />
          <Circle cx={referenceLength} cy={20} r='40' fill='url(#radial)' />
        </G>
      </Svg>
    )
  }
}

export default Pendulum
