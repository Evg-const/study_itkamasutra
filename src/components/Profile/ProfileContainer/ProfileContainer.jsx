import React, {useEffect} from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {addPost, getStatus, setUserProfile, updateStatus, savePhoto} from "../../../redux/profile-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../../hoc/withRouter";


class ProfileApiComponent extends React.Component {

    isOwner = false;

    refreshProfile(){
        let userId = this.props.match ? this.props.match.params.userId : this.props.authUserId;
        this.isOwner = (userId === this.props.authUserId);
        this.props.setUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match && this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        } else if(!this.props.match && this.props.match !== prevProps.match){
            this.refreshProfile();
        }
    }
    render() {
        return (
            <div>
                <Profile {...this.props}
                     isOwner={this.isOwner}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
                     updateStatus={this.props.updateStatus}/>
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
    connect(mapStateToProps, {setUserProfile, addPost, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileApiComponent)


export default profileContainer;

