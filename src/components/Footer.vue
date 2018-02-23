<template>
<footer>
    <p>{{copyright}}</p>
</footer>
</template>
<script>

export default{

    data:function(){
        return{
            copyright:"@ By Anand Kumar"
        }
    }
}
</script>
<style scoped>
footer{
    background-color: darkkhaki;
    padding:10px;
}
p{
    color:white;
    text-align: center;
}
</style>