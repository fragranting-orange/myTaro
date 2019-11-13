import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './test.scss'

export default class Test extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='test'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
