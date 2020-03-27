export const editUser = userDetails => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    console.log(getState());
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("users")
      .doc(userId)
      .update({
        ...userDetails
      })
      .then(() => {
        dispatch({ type: "EDIT_USER", userDetails });
      })
      .catch(err => {
        dispatch({ type: "EDIT_USER_ERROR", err });
      });
  };
};
