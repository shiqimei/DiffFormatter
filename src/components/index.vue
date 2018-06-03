<template>
  <div class="index" @dragover.prevent="dragover" @drop.prevent="drop($event)">
    <div class="title">different.txt文件格式化工具</div>
    <div class="container" :class="{ dragover: dragOverActive}">
      <i class="fa fa-cloud-upload"></i>
      <p class="prompt">把文件拖拽到这里开始格式化</p>
      <p class="or">或者</p>
      <button class="button is-success" @click="button">点击选择文件</button>
      <input type="file" id="files" name="files" accept="txt" style="display:none" @change="filechange($event)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      dragOverActive: false
    }
  },
  methods: {
    button () {
      document.getElementById('files').click()
    },
    filechange (event) {
      var reader = new FileReader()
      reader.onload = (event) => this.$router.push({
        name: 'result',
        params: {
          text: event.target.result // 将传入的文本内容当做参数传给结果页
        }
      })
      reader.readAsText(event.target.files[0])
    },
    dragover () {
      this.dragOverActive = true
    },
    drop (event) {
      this.dragOverActive = false
      var reader = new FileReader()
      reader.onload = (event) => this.$router.push({
        name: 'result',
        params: {
          text: event.target.result // 将传入的文本内容当做参数传给结果页
        }
      })
      reader.readAsText(event.dataTransfer.files[0])
    }
  }
}
</script>

<style lang="stylus" scoped>
.element::-webkit-scrollbar {display:none}
html{overflow: hidden;}
.index
  width 100vw
  height 100vh
  text-align center
.title
  margin 40px auto 0
  width 728px
  height 25px
  font-family '幼圆'
  font-size 25px
  color #555
.container
  margin 20px auto
  height 338px
  width 728px
  border-radius  15px
  background rgba(249, 249, 249,1)
  color #777
  i
    margin-top 80px
    font-size 40px
  .prompt
    font-family '微软雅黑'
    font-size 28px
  .or
    color #c3c3c3
    margin-top:5px
  .button
    font-weight 200
    font-family '微软雅黑'
    margin-top 15px
    background rgba(92, 184, 92,1)
    &:hover
      background rgba(68, 157, 68,1)
.dragover
  border 2px dashed rgba(219, 219, 219,1)
</style>
