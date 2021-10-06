import React, { PureComponent } from 'react';
import connect from '../store/connect';
import { fetchHomeMultidataAction } from '../store/action';


class Header extends PureComponent {
    componentDidMount() {
        this.props.fetchSagaData();
    }
    render() {
        return (
            <div>
                <hr />
                <div>Redux-Sage的使用</div>
                <ul>
                    {this.props.banner.map((item) => {
                        return <li key={item.acm}>{item.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    banner: state.banner,
    recommend: state.recommend
});

const mapDispatchToProps = disptch => ({
    fetchSagaData() {
        disptch(fetchHomeMultidataAction)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);