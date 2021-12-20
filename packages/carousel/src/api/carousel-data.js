import commonApi from './common'

export default {
  async getCarouselData () {
    const res = await commonApi.execute('get', '/test-export?_format=json')
    // eslint-disable-next-line no-debugger
    debugger;
    return res
  }
}