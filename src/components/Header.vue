<template>
<header>
    <h1>{{title}}</h1>
</header>
</template>
<script>

export default{

    data:function(){
        return{
            title:"Nijas"
        }
    }
}
</script>
<style scoped>
header{
    background-color: aquamarine;
    padding:10px;
}
h1{
    color:white;
    text-align: center;
}
</style>