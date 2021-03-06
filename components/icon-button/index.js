import IconButton from './IconButton.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-icon-button', IconButton)
  }
}
export default plugin

initPlugin(plugin)
