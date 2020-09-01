<template>
  <button class="special-button test" type="button" :disabled="isDisabled"><slot></slot></button>
</template>

<script>
export default {
  name: 'SpecialButton',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>