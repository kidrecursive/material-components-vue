<template>
  <label
    :class="classes"
    v-bind="$attrs"
    class="mdc-floating-label">
    <slot/>
  </label>
</template>

<script>
import { MDCFloatingLabel } from '@material/floating-label'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    floatAbove: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcFloatingLabel: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-floating-label--float-above': this.floatAbove,
        'mdc-floating-label--shake': this.shake
      }
    }
  },
  mounted () {
    this.mdcFloatingLabel = MDCFloatingLabel.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcFloatingLabel.destroy()
  }
}
</script>
