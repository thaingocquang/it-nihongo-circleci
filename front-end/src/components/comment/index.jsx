import React, { useState, useEffect } from "react";
import { Tooltip } from "antd";
import RepliedComment from "./replied";
import ReplyingComment from "./replying";
import "./comment.scss";

function Comment({ comment }) {
    const [showReplying, setShowReplying] = useState(false);
    const [showRepliedComment, setShowRepliedComment] = useState(false);
    return (
        comment && (
            <div className="comment-container">
                <img
                    className="img-circle"
                    alt=""
                    src={comment.commenter.avatar}
                />
                <div className="ms-2 col-11">
                    <div className="comment-container__text">
                        <a className="user-name" href="/">
                            { comment.commenter.username}
                        </a>
                        <p>{comment.text}</p>
                        {
                            comment.numberOfLike > 0 &&
                            <Tooltip 
                                title={() => comment.listToolTips.map(item=> 
                                    <>{item.fullName !== "" ? item.fullName : item.user.username}<br/></>
                                )}
                                className="icon-like"
                            >
                                <img
                                    className="img-circle"
                                    style={{ width: "18px", height: "18px" }}
                                    src={require("../../assets/images/like.png")}
                                    alt=""
                                />
                                <span>{comment.numberOfLike}</span>
                            </Tooltip>
                        }
                    </div>
                    <div className="comment-container__reply-action ms-3">
                        <p
                            className={
                                !comment.likeState
                                    ? "position-relative"
                                    : "position-relative txt-blue"
                            }
                        >
                            Thích
                        </p>
                        <p
                            onClick={() => {
                                setShowReplying(true);
                                setShowRepliedComment(true);
                            }}
                        >
                            Phản hồi
                        </p>
                        <label>{(comment.createdAt)}</label>
                    </div>
                    <div className="ms-3">
                        {comment.commentsOfComment?.length > 0 && (
                            <>
                                <div className="comment-container__reply">
                                    <div className="me-3 line"> </div>
                                    {showRepliedComment ? (
                                        <span
                                            style={{ fontWeight: "600" }}
                                            onClick={() => {
                                                setShowRepliedComment(
                                                    !showRepliedComment
                                                );
                                            }}
                                        >
                                            Ẩn phản hồi
                                        </span>
                                    ) : (
                                        <span
                                            style={{ fontWeight: "600" }}
                                            onClick={() => {
                                                setShowRepliedComment(
                                                    !showRepliedComment
                                                );
                                            }}
                                        >
                                            {comment.commentsOfComment?.length} Phản hồi
                                        </span>
                                    )}
                                </div>
                                {showRepliedComment &&
                                    comment.commentsOfComment.map((comment) => (
                                        <RepliedComment
                                            repliedComment={comment}
                                        />
                                    ))}
                            </>
                        )}
                        {showReplying && (
                            <ReplyingComment/>
                        )}
                    </div>
                </div>
            </div>
        )
    );
}

export default Comment;
