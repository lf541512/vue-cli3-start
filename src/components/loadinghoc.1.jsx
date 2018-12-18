

const HOC = (WrappedComponent, otherArg) =>{
    return class WrapperComponent extends Component {
            render() {
                return (<div>
                    <WrappedComponent {...this.props} 
                        onLoadingChange={this.onLoadingChange} />;
                </div>)
            }
        }
}
    
export default HOC;



