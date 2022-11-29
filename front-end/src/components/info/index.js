import React from "react";
import useAuth from "../../hooks/useAuth";
import "./info.scss";

function Info() {
    const {user} = useAuth()
    return (
        <div className="info-container">
            <div className="d-flex my-4">
                <img src={require("../../assets/images/gender.png")} alt=""/>
                <div className="ms-4">
                    <p>{user.UserInfo.gender ? "Nam" : "Nữ"}</p>
                    <span className="text">Giới tính</span>
                </div>
            </div>
            <div className="d-flex my-4">
                <img src={require("../../assets/images/birthday.png")} alt=""/>
                <div className="ms-4">
                    <p>{ user.UserInfo.birthday? (new Date(user.UserInfo.birthday)).toLocaleDateString() : ""}</p>
                    <span className="text">Ngày sinh</span>
                </div>
            </div>
            <div className="d-flex my-4">
                <img src={require("../../assets/images/location.png")} alt=""/>
                <div className="ms-4">
                    <p>{user.UserInfo.address}</p>
                    <span className="text">Nơi sống</span>
                </div>
            </div>
            <div className="d-flex my-4">
                <img src={require("../../assets/images/email.png")} alt="" />
                <div className="ms-4">
                    <p>{user.email}</p>
                    <span className="text">Email</span>
                </div>
            </div>
            <div className="d-flex my-4">
                <img src={require("../../assets/images/phone.png")} alt="" />
                <div className="ms-4">
                    <p>{user.UserInfo.phone_number}</p>
                    <span className="text">Số điện thoại</span>
                </div>
            </div>
        </div>
    );
}

export default Info;
