/**
 * Created by guangqiang on 2017/8/26.
 */

/** 网络请求工具类的拓展类，便于后期网络层修改维护 **/

import HttpUtils from './HttpUtils'
import {API_URL, MIAMI_URL, TIME_MOVIE_URL, TIME_TICKET_URL} from '../../../constants/urlConfig'
import {ApiSource} from '../../../constants/commonType'
/**
 * GET 请求
 * @param url
 * @param params
 * @param source
 * @param callback
 * @returns {{promise: Promise}}
 */
const getFetch = (url, params, source, callback) => {

  switch (source) {
    case ApiSource.MIAMIMUSIC:
      url = `${MIAMI_URL}${url}`
      break
    case ApiSource.TIMEMOVIE:
      url = `${TIME_MOVIE_URL}${url}`
      break
    case ApiSource.TIMETICKET:
      url = `${TIME_TICKET_URL}${url}`
      break
    default:
      url = `${API_URL}${url}`
      break
  }

  let promise = HttpUtils.getRequest(url, params)

  if (callback && typeof callback === 'function') {
    promise.then(response => callback(response))
  }

  return promise
}

/**
 * POST 请求
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
const postFetch = (url, params, callback) => {

  let promise = HttpUtils.postRequrst(url, params)

  if (callback && typeof callback === 'function') {
    promise.then((response) => {
      return callback(response)
    })
  }
  return promise
}

export {getFetch, postFetch}