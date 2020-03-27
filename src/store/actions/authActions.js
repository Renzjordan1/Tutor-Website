import firebase from "firebase";

export const signIn = credentials => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
        window.location.href = "/dash/account";
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            tel: "",
            school: "Other",
            title: "",
            desc: "",
            grade: "HS Freshman",
            wage: 15,
            rating: 0.0,
            subjectsTeach: [],
            subjectsLearn: [],
            gradesTeach: [
              { item: "6th-8th", check: true, id: 0 },
              { item: "HS Freshman", check: true, id: 1 },
              { item: "HS Sophomore", check: true, id: 2 },
              { item: "HS Junior", check: true, id: 3 },
              { item: "HS Senior", check: true, id: 4 }
            ]
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
