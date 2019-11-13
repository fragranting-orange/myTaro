import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.globalData = {
      msg: 'hello wx!!!'
    }
  }
  
  componentWillMount () {
    
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/test/test'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tarBar: {
      color: '#7F8389',
      selectedColor: '#FF4D4F',
      backgroundColor: '#FFFFFF',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: '',
          selectedIconPath: ''
        },
        {
          pagePath: 'pages/test/test',
          text: 'test',
          iconPath: '',
          selectedPath: ''
        }
      ]
    }
  }

  

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
