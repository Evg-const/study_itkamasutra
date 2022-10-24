import {addMessage} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        message: state.messagesPage.message,
        newMessage: state.messagesPage.newMessage,
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps,{addMessage}),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;