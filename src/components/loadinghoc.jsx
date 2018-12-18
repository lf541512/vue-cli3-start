
import Loading from './components/loading'
const LoadingHOC = (WrappedComponent) =>
    class WrapperComponent extends Component {
        constructor(props) {
            super(props)
            this.onLoadingChang = this.onLoadingChang.bind(this)
        }
        onLoadingChang(loading) {
            this.setState({ loading: loading })
        }
        render() {
            return (<div>
                <Loading loading={this.loading}></Loading>
                <WrappedComponent {...this.props} 
                    onLoadingChang={this.onLoadingChang} />;
            </div>)
        }
    }
export default LoadingHOC;


