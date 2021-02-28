import React from 'react';
import {useEffect,useState} from 'react';
import Home from './homepage/home';
import Questions from './QuestionsPage/Questions';
import { Redirect } from 'react-router';

const PrivatePage = (props) =>{
    // const [token,setToken] = useState({});
    let token;
    let email;
    let QID;
    // useEffect(()=>{
    //     let data = sessionStorage.getItem('userdata');
    //     data = JSON.parse(data);
    //     console.log(data);
    //     if(data){
    //         if(data.details.email)
    //         email = data.details.email;
    //         else
    //             email = data.details.email_iit;
    //         QID = data.details.curQuesID;
    //         setToken({
    //             QID:QID,
    //             email:email,
    //         });
    //         console.log(QID,email);
    //         console.log(token);
    //     }
        
    // },[])
    let data = sessionStorage.getItem('userdata');
        data = JSON.parse(data);
        console.log(data);
        if(data){
            if(data.details.email)
            email = data.details.email;
            else
                email = data.details.email_iit;
            QID = data.details.curQuesID;
            // setToken({
            //     QID:QID,
            //     email:email,
            // });
            console.log(QID,email);
            console.log(token);
    }
    var e = null;
    if(data){
        e = <Questions QID = {QID} email = {email}/>;
    }
    else{
        e = <Redirect to = '/'/>
    }
    return e;
}

export default PrivatePage;