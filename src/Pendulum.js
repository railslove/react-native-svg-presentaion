import React from 'react'
import {Dimensions} from 'react-native'
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg'
const {height, width} = Dimensions.get('window')
class Pendulum extends React.Component {
  render () {
    return (
      <Svg height={height} width={width}>
        <Line x1={0} y1={0} x2={width} y2={0} stroke='#1D7098' strokeWidth='6' />
        <Defs>
          <RadialGradient id='radial' cx='25' cy='25' rx='65' ry='55' fx='250' fy='25'>
            <Stop offset='0' stopColor='#26D9FD' stopOpacity='0.7' />
            <Stop offset='1' stopColor='#1D7098' stopOpacity='0.8' />
          </RadialGradient>
        </Defs>
        <Defs>
          <LinearGradient id='linear' x1={0} y1={100} x2={5} y2={100}>
            <Stop offset='10%' stopColor='#2D7098' />
            <Stop offset='60%' stopColor='#26D9FD' />
          </LinearGradient>
        </Defs>
        <G rotate='0' origin={`${width / 2},3`}>
          <Line x1={width / 2} y1={3} x2={width / 2} y2={125} stroke='url(#linear)' strokeWidth='6' />
          <Circle cx={width / 2} cy='155' r='30' fill='url(#radial)' />
          <Circle cx={width / 2} cy='3' r='6' fill='#1D7098' />
        </G>
      </Svg>
    )
  }
}

export default Pendulum
