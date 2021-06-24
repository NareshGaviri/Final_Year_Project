import React from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { _signOut } from "../../Authentication/middleware/index";
function Container(props) {
  const { _signOut, auth } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Presentation
        auth={auth}
        _signOut={_signOut}
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state.firebase.auth.uid);
  const { auth } = state.firebase;
  console.log(state)
  return {
    auth: auth,
    people :state.firestore
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _signOut: () => dispatch(_signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
