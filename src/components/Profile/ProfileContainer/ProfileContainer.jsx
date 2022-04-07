import React from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {addPost, getStatus, setUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../../hoc/withRouter";


class ProfileApiComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.authUserId;
        this.props.setUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

let profileContainer =compose(
    connect(mapStateToProps, {setUserProfile, addPost, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileApiComponent)


export default profileContainer;

