import * as types from "./actionTypes";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {sendEmailVerification} from "firebase/auth"
import { toast } from "react-toastify";
export let Signup = (email, password) => {
  return async dispatch => {
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
       dispatch({
         type: "Upload",
        //  payload: uploadData,
       });
      sendEmailVerification(user);
    })
   
  };
};

export let AddBasket = item => ({
  type: types.Addtobasket,
  payload: item,
});
export let removeBasket = id => ({
  type: types.RemoveFromCart,
  payload: id,
});
export let Createuser = (email, password) => {
  return async dispatch => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({
          type: "createData",
          payload: user,
        });
      })
      .catch(error => toast.error(error.message));
  };
};

export let SetcartEmpty = () => ({
  type: types.Set_cart_empty,
});
