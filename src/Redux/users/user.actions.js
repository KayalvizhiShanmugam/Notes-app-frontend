/* eslint-disable eqeqeq */
import axios from "axios"
// eslint-disable-next-line no-unused-vars
import { BASE_URL } from "../../constants/config"
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types"


export const getUser=(obj)=>async(distpatch)=>{

    distpatch({type:LOGIN_USER_LOADING})
    try {
        let data = await axios("https://notes-app-backend-yz5v.onrender.com//user/login",{
            method:"post",
            data:obj
        
            })
            let {message,token,status} = data.data
            if(status==1){
                distpatch({type:LOGIN_USER_SUCCESS,payload:token})
            }else{
                alert(message)
                distpatch({type:LOGIN_USER_ERROR})

            }

    } catch (error) {
        distpatch({type:LOGIN_USER_ERROR})

    }

   





}