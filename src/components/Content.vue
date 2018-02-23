<template>
<div id="ninjas">
    <ul>
        <li v-for="(ninja,index) in ninjas" v-bind:key="index" @click="ninja.show=!ninja.show">
            <h4>{{ninja.name}}</h4>
            <h5 v-show="ninja.show">{{ninja.speciality}}</h5>
        </li>
    </ul>
</div>
</template>
<script>

export default{

    data:function(){
        return{
            ninjas:[
                {name:"Anand Kumar", speciality:"Software Engineer",show:false},
                {name:"Anand Kumar", speciality:"Software Engineer",show:false},
                {name:"Anand Kumar", speciality:"Software Engineer",show:false},
                {name:"Anand Kumar", speciality:"Software Engineer",show:false},
                {name:"Anand Kumar", speciality:"Software Engineer",show:false},
                {name:"Anand Kumar", speciality:"Software Engineer",show:false},
            ]
            }

    }
}
</script>
<style scoped>
#ninjas{
   width:100%;
    max-width: 1200px;
    margin:40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 250px;
    text-align:center;
    padding: 40px;
    border: 1px solid black;
    margin:10px;
}
h1{
    color:white;
    text-align: center;
}
</style>