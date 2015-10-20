// Ionic项目中的全局级配置
angular.module('global', [])
  .constant('GlobalVariable', {
    // 服务器地址
    SERVER_PATH: 'http://192.168.1.35:7004/mobileCCWS',

    // 微信参数配置
    CORPID: 'wx097b1de1078a4382',                                                         //公众号Id
    REDIRECT_URI: 'http://www.epochsoft.com.cn/#/oAuth',                                  //回调地址
    PROVIDER_SECRET: 'czKEm7ndF-gVzJvl-lzeKZIY0rJNJf_cGWmS2visO3BPKyDGAle1U3atMbNtMpfV'   //管理组秘钥
  })
  .value('GlobalValue',{
    // 引导页判断是否第一次使用应用
    FIRST_USE:false
});
