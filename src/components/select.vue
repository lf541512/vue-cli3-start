<template>
    <div>
        <button @click="search">search</button> <button @click="reset">reset</button><button @click="changeItem">changeitem</button>
        <div>
            <item v-for="(obj,index) in options" :option="obj" :key="index+'i'+obj.number"></item>
        </div>
        <changeitem :text='text'></changeitem> 
    </div>

</template>
<script>
import item from './item'
import changeitem from './changeitem'
export default {
    name:'vselect',
    components:{
        item,changeitem
    },
    data(){
        return {
            options:[],
            text:{name:'sfa'},
            numbers:[{"number":"+862158360175","status":0},{"number":"+862181722143","status":1},{"number":"+862137826252","status":1},{"number":"+862137516952","status":0},{"number":"+862180617587","status":1},{"number":"+862129357876","status":0},{"number":"+862158287998","status":0},{"number":"+862158281013","status":1},{"number":"+862127291027","status":0},{"number":"+862154362388","status":0}]
        }
    },
    methods:{
        changeItem(){
            this.text.name="2222"
        },
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

