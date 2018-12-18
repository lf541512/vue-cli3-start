
import Loading from './components/loading'
export default function HOC(WrappedComponent) {
    return {
        props: WrappedComponent.props,
        data() {
            return {
                loading: false
            }
        },
        render(h) {
            debugger;
            const _this = this;
            const slots = Object.keys(this.$slots)
                .reduce((arr, key) => arr.concat(this.$slots[key]), [])
                .map(vnode => {
                    vnode.context = this._self
                    return vnode
                })
            return <div>
                {h(Loading, {
                    props: {
                        loading: this.loading
                    }
                })}
                {h(WrappedComponent, {
                     props:this.$props,
                     attrs: this.$attrs,
                     scopedSlots: this.$scopedSlots,
                    on: {
                        loadingChange(loading) {
                            _this.loading = loading
                        }
                    }
                }, slots)}
            </div>
        }
    }

}

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