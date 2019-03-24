/**
 * @Author: crazy_mad
 * @Date: 2019/1/27 19:50
 * @Description:
 */
import CmButton from './button/index.js'
import CmCol from './col/index.js'
import CmRow from './row/index.js'
import CmIcon from './icon/index.js'
import CmRadio from './radio/index.js'
import CmNav from './nav/index.js'
import CmPager from './pager/index.js'

const components = [
  CmButton,
  CmCol,
  CmRow,
  CmIcon,
  CmRadio,
  CmNav,
  CmPager
]

export default {
  install: function (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
