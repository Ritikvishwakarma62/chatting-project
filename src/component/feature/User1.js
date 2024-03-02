import React, { useState,useRef } from 'react'
import './message.css'
import { NavLink } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import * as YUP from 'yup'
import { useFormik } from 'formik'
import {add} from "../../redux/MessageSlice"

let massageSchema = YUP.object({
    msg: YUP.string().required("Enter Text Message")
})

const User1 = () => {
    let data = useSelector(state => state.messageSlice);
    console.log(data[0])
    let btn = useRef()
    
let dispatch = useDispatch()
    let userid = 1;
    let [msg, setMsg] = useState({
        msg: "",
        userid: 1,
        name : "Ritik"
        
    })

    let msgForm = useFormik({
        validationSchema : massageSchema,
        initialValues: msg,
        onSubmit: (msgDate) => {
             dispatch(add(msgDate))
            
        }
    })

    return (

        <div className="container my-2">
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card chat-app">
                        <div id="plist" className="people-list">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Search..." />
                            </div>
                            <ul className="list-unstyled chat-list mt-2 mb-0">
                                <li className="clearfix">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                                    <div className="about">
                                       
                                        <NavLink to="/user1"  className="name nav-link">{data[0].name}</NavLink>
                                        <button onClick={add} style={{display:"none"}} ref={btn}>click</button>
                                        <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                                    </div>
                                </li>
                                <li className="clearfix ">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                    <div className="about">
                                    <NavLink to="/user2"  className="name nav-link">{data[1].name}</NavLink>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="chat">
                            <div className="chat-header clearfix">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                            {/* <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" /> */}
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                                        </a>
                                        <div className="chat-about mt-2">
                                            <h6 className="m-b-0">{data[0].name}</h6>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-6 hidden-sm text-right">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-history" style={{
                                height: "350px", overflow: "auto",
                                marginBottom: "auto", alignItems: "flex-end"
                            }}>
                                <ul className="m-b-0">
                                    {/* <li className="clearfix">
                            <div className="message-data text-right">
                                <span className="message-data-time">10:10 AM, Today</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                            </div>
                            <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                        </li> */}
                                    {
                                        data.map(value => {
                                            return (
                                                <li key={value.id} className="clearfix" style={{ textAlign: userid == value.userid ? "right" : "left" }}>
                                                    <div className="message my-message">
                                                        <span  >{value.msg}</span>
                                                    </div>
                                                    <div className="message-data" >
                                                        <span className="message-data-time"></span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }


                                </ul>
                            </div>
                            <div className="chat-message clearfix">
                                <form onSubmit={msgForm.handleSubmit}>
                                    <div className="input-group mb-0">
                                        <input type="text" name='msg' className={"form-control "+(msgForm.errors.name && msgForm.touched.name?"is-invaild":"")} onChange={msgForm.handleChange} placeholder="Enter text here..." />
                                        <div className="input-group-prepend">
                                            <button type='submit' className="input-group-text"><i className="fa fa-send fa-2x"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User1