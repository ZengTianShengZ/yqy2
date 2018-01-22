/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2018/1/21
 */
export const getFIX_URL = () => {
    let FIX_URL = 'https://yqy.mynatapp.cc'
    const getSystemInfoSync =  wx.getSystemInfoSync()
    if (getSystemInfoSync.platform !== 'devtools') {
        FIX_URL = 'https://yqy.mynatapp.cc'
    } else {
        FIX_URL = 'https://yqy233.com/xcx'
    }
    return FIX_URL = 'https://yqy233.com/xcx'
}