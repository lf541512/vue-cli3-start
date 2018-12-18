<template>
<div>
 <div v-if="isLoading">loading...</div>
    <div v-else>complete</div>
</div>
   
</template>
<script>
export default {
    name: 'loading',
    props: ['loading'],
    computed:{
        isLoading(){
            return this.loading
        }
    }
}
</script>


