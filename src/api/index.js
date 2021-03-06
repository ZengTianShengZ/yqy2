const ajax = require('./ajax')
const FIX_URL = require('../utils').getFIX_URL()

exports.login = (data) => ajax('/login', data)

exports.getDynamic = (data) => ajax('/v2/getConditionDynamic', data)

exports.getDetailDynamic = (data) => ajax('/v2/getDetailDynamic', data)

exports.getConditionComment = (data) => ajax('/v2/getConditionComment', data)

exports.sumitCommont = (data) => ajax('/v1/commont', data)

exports.postDynamic = (data) => ajax('/v1/postDynamic', data)

exports.joinYqy = (data) => ajax('/v1/joinYqy', data)

exports.getUserJoinList = (data) => ajax('/v1/getUserJoinList', data)

exports.getUserDynamicList = (data) => ajax('/v1/getUserDynamicList', data)

exports.deleteUserDynamic = (data) => ajax('/v1/deleteUserDynamic', data)

exports.loginUrl = `${FIX_URL}/v2/login`

exports.uptokenURL = `${FIX_URL}/v2/qnUptoken`