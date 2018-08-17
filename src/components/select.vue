<template>
    <div>
        <button @click="search">search</button> <button @click="reset">reset</button>
        <div>
            <item v-for="(obj,index) in options" :option="obj" :key="index+'i'+obj.number"></item>
        </div>
    </div>

</template>
<script>
import item from './item'
export default {
    name:'vselect',
    components:{
        item
    },
    data(){
        return {
            options:[],
            numbers:[{"number":"+862158360175","status":0},{"number":"+862181722143","status":1},{"number":"+862137826252","status":1},{"number":"+862137516952","status":0},{"number":"+862180617587","status":1},{"number":"+862129357876","status":0},{"number":"+862158287998","status":0},{"number":"+862158281013","status":1},{"number":"+862127291027","status":0},{"number":"+862154362388","status":0}]
        }
    },
    methods:{
        reset(){
            this.options=this.numbers.slice(0);
        },
        search(){
            this.options=this.numbers.filter(item=>{
                return item.number.indexOf("75")>-1;
            }).map(item=>{
                return {...item}
                })
        }
    }
}
</script>

