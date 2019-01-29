/**
 * @Author: crazy_mad
 * @Date: 2019/1/27 19:50
 * @Description:
 */
import CmButton from './button/index.js'
import CmCol from './col/index.js'
import CmRow from './row/index'

const components = [
  CmButton,
  CmCol,
  CmRow
]

export default {
  install: function (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
