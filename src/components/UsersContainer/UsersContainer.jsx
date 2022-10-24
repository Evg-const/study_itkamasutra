import {connect} from "react-redux";
import UsersAPIcomponent from "./UsersAPIcomponent/UsersAPIcomponent";
import {toggleFollow, requestUsers} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalCount,
    getUsers,
} from "../../redux/users-selectors";


const mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    requestUsers,
    toggleFollow
})(UsersAPIcomponent);