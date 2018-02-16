<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <students></students>
  </div>
</template>

<script>
import Students from '../components/Students.vue'

export default {
  components:{
    'students':Students,
  },
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
h1{
  color:green;
}
</style>
