<template>
  <div class="container">
    <textarea name="" id="" cols="30" rows="10" v-model="text"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  created () {
    var text = this.$route.params.text
    text = text.replace((/(\n|\t)+([A-Z])/, ''))
    this.text = text
  }
}
</script>

<style lang="stylus" scoped>
::-webkit-scrollbar
  background #fafafa
  width 20px
::-webkit-scrollbar-thumb
  background rgba(154,154,154,0.5)
body
  background rgba(225, 226, 230,1)
.container
  text-align center
textarea
  margin 10px auto
  width 50vw
  height 98vh
  padding 5px
  border 1px dashed rgba(219, 219, 219,1)
  resize none
  outline none
  background rgba(249, 249, 249,0.5)
</style>
