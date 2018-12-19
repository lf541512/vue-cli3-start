
<script>
/* eslint-disable */ 
import PresentationComponent from "./components/PresentationComponent.vue";
// import hoc from "./loadinghoc";
import IsComponent from "./components/iscomponent";
import hoc from './hoc'
let HOCPresentationComponent = hoc(PresentationComponent);
export default {
  name: "app",
  data() {
    return {
      root:{child:0},
      // name:'root',
      // com: PresentationComponent
    };
  },
  render(h){
    return h('Child',{props:{
      input:this.root
    },on: {
      click: this.onClick
    }})
  },
  methods: {
      onClick(){
          this.root.child+=1
        },
    handleClick() {
      // debugger
      // console.log("handleClick",HOCPresentationComponent);
    }
  },
  components: {
    Child:{
      name:'childd',
      // functional:true,
      // render(h,context){
      //   debugger;
      //   return h('span',{on:context.listeners},context.props.input.child)
      // },
      props:['input'],
      render(h){
        debugger;
        return h('span',{on:this.$listeners},this.input.child)
      }
    },
    // PresentationComponent,
    HOCPresentationComponent,
    IsComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
