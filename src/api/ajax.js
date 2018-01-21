const storage = require('../libs/storage')
const FIX_URL = require('../utils').getFIX_URL()

const req = function (url, data, method = 'POST') {
    const _url = `${FIX_URL}${url}`
    return new Promise((resolve, reject) => {
        let header = {
            'Accept': 'application/json',
            'content-type': 'application/json' // 默认值
        }
        const token = storage.get('XCX-Admin') || ''
        if (token) {
            header.Authorization = `Bearer ${token}`
        } else {
            if (_url.match('/v1/')) {
                // 跳登录
                wx.navigateTo({url: '../login/index'})
            }
        }
        wx.request({
            url: _url,
            method: method,
            data: data,
            header,
            success: function (res) {
                resolve(res.data)
            },
            fail: function (err) {
                reject(err)
            }
        })
    })
}
module.exports = req
