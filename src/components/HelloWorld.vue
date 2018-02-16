<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <students></students>
  </div>
</template>

<script>
export default {
  props:{
    msg:String
  },
  data:function(){
    return {
      title:"First Vue Cli app"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
