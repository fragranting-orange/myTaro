import Taro, { Component, getApp } from '@tarojs/taro'
import { View, Text, MovableArea, MovableView, Video, CoverImage, CoverView, Button, Image } from '@tarojs/components'
import './index.scss'
// import { log } from 'util'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {}
    }
  }
  

  // config = {
  //   navigationBarTitleText: '首页'
  // }

  componentWillMount () {
    // const app = Taro.getApp() 
    // console.log(app.globalData.msg, '111111');

    // app.globalData.msg = 'hahahahahaha';

    // console.log(app)
  }

  componentDidMount () {
    const app = Taro.getApp()
    // console.log(app.globalData.msg, '111111');

    app.globalData.msg = 'hahahahahaha';

    this.setState({
      app
    }, () => {
      console.log(this.state.app)
    })

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 点击弹窗设置
  showModel = () => {
    Taro.showModal({
      title:'xxxx',
      content: 'hello world',
    }).then(res => console.log(res.confirm,res.cancel))
  }

  render () {
    return (
      <View className='container'>
        {this.app.globalData.msg}
        <View className='index' onClick={() => {this.showModel()}}>
          <Text style>Hello world!</Text>
        </View>
        <MovableArea style='height: 200px; width: 200px; background: red;'>
          <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>
        </MovableArea>

        <Video id='myVideo' src='http://player.youku.com/embed/XMzU3MDIzMzE4MA=='>
          <CoverView class='controls'>
            <CoverView class='play' onClick='play'>
              <CoverImage class='img' src='http://www.agri35.com/UploadFiles/img_2_4140028208_2637766024_26.jpg' />
            </CoverView>
          </CoverView>
        </Video>
        {/* modal弹框 */}
        <View className='bg-modal'>
          <View className='message-warpper'>
            <View className='message-top'>
              {/* <View className='message-topTxt'>
                检测到新版本v0.3.33
              </View> */}
              <View className='newVersion-message'>
                已升级至最新版本
              </View>
              {/* <Image className='rocket-img' src='../../images/rocket.jpg' /> */}
            </View>
            <View className='message-content'>
              <View className='new-function'>
                新功能
                <View>【微信支付】</View>
                <View>店面全面支持微信支付</View>
              </View>
              <View className='question-repair'>
                问题修复
                <View>修复了无法分享的BUG</View>
                <View>修复了看不到商品的问题</View>
              </View>
            </View>
            <View className='message-bottom'>
              <Button className='update-btn'>进入新版</Button>
            </View>
          </View>
        </View>
      </View>
      
    )
  }
}
