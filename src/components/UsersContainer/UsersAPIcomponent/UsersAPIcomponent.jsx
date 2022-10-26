import React from 'react';
import Users from './Users/Users';
import Preloader from "../../Common/Preloader/Preloader";

class UsersAPIcomponent extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
        }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching &&
                <Preloader/>
            }
                <Users
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    toggleFollow = {this.props.toggleFollow}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                />
        </>
    }
}

export default UsersAPIcomponent