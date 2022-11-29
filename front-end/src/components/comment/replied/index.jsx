import React from "react";
import { Tooltip } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./replied-comment.scss";

function RepliedComment({ repliedComment }) {
    return (
        <div className="reply-comment-container">
            <img className="img-circle" alt="" style={{ width: "30px", height: "30px" }} src={repliedComment?.user.avatar} />
            <div className="ms-2">
                <div className="reply-comment-container__text">
                    <a className="user-name" href="/">
                        {repliedComment.user.username}
                    </a>
                    <p>{repliedComment.text}</p>
                    {repliedComment.numberOfLike > 0 && (
                        <Tooltip
                            title={() =>
                                repliedComment.listToolTips.map((item) => (
                                    <>{item}<br /></>
                                ))
                            }
                            className="icon-like"
                        >
                            <img
                                className="img-circle"
                                style={{ width: "18px", height: "18px" }}
                                src={require("../../../assets/images/like.png")}
                                alt=""
                            />
                            <span>{repliedComment.numberOfLike}</span>
                        </Tooltip>
                    )}
                </div>
                <div className="reply-comment-container__reply-action ms-3">
                    <p
                        className={
                            !repliedComment.likeState
                                ? "position-relative"
                                : "position-relative txt-blue"
                        }
                    >
                        Thích
                    </p>
                    <label>{(repliedComment.createdAt)}</label>
                </div>
            </div>
        </div>
    );
}

export default RepliedComment;
