<template>
<div>
    <h1>Students Component....</h1>
    <ul>
        <li v-for="(student,index) in studentList" v-bind:key='index'>{{student}}</li>
    </ul>
</div>
</template>
<script>
export default{
    name:'Students',
    data:function(){
        return {
            studentList:["Anand","Kumar","Kiran"]
        }
    }

}
</script>
<style scoped>
h1{
    color:yellow;
}
</style>