
import { createHOC } from 'vue-hoc';
export default function HOC(WrappedComponent) {
    return createHOC(WrappedComponent,{},
        {
            props: {
                name: 'hoc'
            }  
        })
  }



  // export default function HOC(WrappedComponent) {
  //   return {
  //     props: WrappedComponent.props,
  //     mounted() {
  //       console.log('mounted')
  //     },
  //     render(h) {
  //       return h(WrappedComponent, {
  //         on: this.$listeners,
  //         attrs: this.$attrs,
  //         props:Object.assign({}, this.$props, {name: 'HOC'})
  //       })
  //     }
  //   }
  // }


// export default function HOC(WrappedComponent) {
//     return {
//       props: WrappedComponent.props,
//       mounted() {
//         console.log('mounted')
//       },
//       render(h) {
//         console.log(this.$attrs)
//         const slots = Object.keys(this.$slots)
//         .reduce((arr, key) => arr.concat(this.$slots[key]), [])
//         .map(vnode => {
//           vnode.context = this._self
//           return vnode
//         })
//         return h(WrappedComponent, {
//           on: this.$listeners,
//           attrs: this.$attrs,
//           scopedSlots: this.$scopedSlots,
//           props:Object.assign({}, this.$props, {name: 'HOC'})
//         },slots)
//       }
//     }
//   }



// export default function HOC(WrappedComponent) {
//     return {
//     functional: true,
//       mounted() {
//         console.log('mounted')
//       },
//       render(h,context) {
//         // context.children.forEach(element => {
//         //     ielement.context=context
//         // });
          
//         // console.log(this.$attrs)
//         // const slots = Object.keys(this.$slots)
//         // .reduce((arr, key) => arr.concat(this.$slots[key]), [])
//         // .map(vnode => {
//         //   vnode.context = this._self
//         //   return vnode
//         // })
//         return h(WrappedComponent, context.data,context.children)
//       }
//     }
//   }

