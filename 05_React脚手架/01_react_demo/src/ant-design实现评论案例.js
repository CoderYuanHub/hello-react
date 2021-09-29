import React, { Component, Fragment, PureComponent } from 'react';
import moment from 'moment';
import { Comment, Tooltip, Avatar, Button, Input } from 'antd';

class Common extends Component {
    render() {
        const actions = [
            <span key="comment-basic-reply-to">Reply to</span>,
        ];
        const { commonList } = this.props;
        return (
            <Fragment>
                { commonList && commonList.length ? commonList.map(item => {
                    return <Comment
                        key={item}
                        actions={actions}
                        author={<a href="/#">Han Solo</a>}
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                {item}
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                }) : ''}

            </Fragment>
        )
    }
}

export default class CommentCpn extends PureComponent {
    constructor() {
        super();
        this.state = {
            content: '',
            commonList: []
        }
    }
    render() {
        return (
            <div>
                <hr />
                <h2>使用ant-design库实现一个简单的评论列表</h2>
                <Common commonList={this.state.commonList} />
                <>
                    <Input.TextArea rows={4}
                        value={this.state.content}
                        onChange={e => this.handleChange(e)} />
                    <Button type="primary" onClick={() => this.handleClick()}>提交</Button>
                </>
            </div>
        )
    }
    // 输入框的值
    handleChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    // 提交事件
    handleClick() {
        const commonList = this.state.commonList;
        commonList.push(this.state.content);
        this.setState({
            commonList: commonList,
            content: ""
        })
    }
}
