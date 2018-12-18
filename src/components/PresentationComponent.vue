
<template>
  <div>
     <p>============{{name}}===========</p>
    <button @click="showLoading">showLoading</button>
    <button @click="hideLoading">hideLoading</button>
     <slot name="slot1"/> <!-- 具名插槽 -->
     <p>------- 分割线 ---------</p>
    <slot/>
    </div>
</template>

<script>
export default {
  name: 'PresentationComponent',
  props: {
    test: Number,
    name: String
  },
  methods: {
    showLoading() {
      this.$emit('loadingChange',true)
    },
    hideLoading() {
      this.$emit('loadingChange',false)
    }
  }
}
</script>


