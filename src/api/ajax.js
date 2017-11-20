// const utils = require('../libs/lib/utils');
const FIX_URL = 'https://yqy.mynatapp.cc'
const req = function (url, data, method = 'POST') {
    const _url = `${FIX_URL}${url}`
    // const options = utils.extend({}, data);
    return new Promise((resolve, reject) => {
        wx.request({
            url: _url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json' // 默认值
            },
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
