<template>
    <div>item {{text}}</div>
</template>
<script>

var count=0;
export default {
    name:'item',
    props:{
        option:Object
    },
    data(){
         console.log("data",this.option.count);
        let currentOption=this.option;
        currentOption.count=count++;
        return {
            text:this.option.number,
            currentOption
        }
    },
    beforeCreate(){
 console.log("beforeCreate",this.option.count);
    },
    created(){
 console.log("created",this.option.count);
    },
    destroyed(){
        console.log("destroyed",this.currentOption.count);
    }
}
</script>

