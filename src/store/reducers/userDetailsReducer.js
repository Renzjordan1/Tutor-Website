const initState = {
  // userDetails: [
  //   {
  //     id: "1",
  //     firstName: "Renz",
  //     lastName: "Tolentino",
  //     title: "Math Tutor",
  //     desc: "I teach 9th-12th",
  //     wage: 15,
  //     rating: 5.0
  //   },
  //   {
  //     id: "2",
  //     firstName: "Gustav",
  //     lastName: "McCarthy",
  //     title: "English Tutor",
  //     desc: "I teach 9th",
  //     wage: 20,
  //     rating: 4.1
  //   },
  //   {
  //     id: "3",
  //     firstName: "Jimmy",
  //     lastName: "James",
  //     title: "Science Tutor",
  //     desc: "I teach 12th",
  //     wage: 30,
  //     rating: 4.5
  //   }
  // ],
  msg: null
};

const userDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "EDIT_USER":
      console.log("edited user", action.userDetails);
      return {
        ...state,
        msg: "Saved!"
      };
    case "EDIT_USER_ERROR":
      console.log("edit user error", action.err);
      return state;
    default:
      return state;
  }
};

export default userDetailsReducer;
