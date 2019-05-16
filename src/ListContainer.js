import {connect} from 'react-redux';
import {addComment} from "./actions";
import MyButton from "./MyButton";

const mapDispatchToProps = dispatch => ({
    addComment: text => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(MyButton)