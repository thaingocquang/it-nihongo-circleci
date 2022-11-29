import React, { useState, useRef } from "react";
import { Carousel, Input, Tooltip } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import Comment from "../../components/comment";
import { listPostsImages } from "../../utils";
import "./post.scss";
const { TextArea } = Input;
function Post({ post }) {
    const slider = useRef();
    const [showComment, setShowComment] = useState(false);
    return (
        <div className="post-container">
            <div className="post-content">
                <div className="mx-3">
                    <div className="d-flex align-items-center">
                        <div className="shape-circle">
                            <img
                                className="img-circle"
                                style={{ width: "50px", height: "50px" }}
                                alt=""
                                src={post.user.avatar}
                            />
                        </div>
                        <div className="ms-3">
                            <a className="user-name" href="/">
                                {post.user.username}
                            </a>
                            <br />
                            <span>{post.datetime}</span>
                        </div>
                    </div>
                    <p className="mt-2">{post.text}</p>
                </div>
                <div className="position-relative">
                    <Carousel
                        className="post-container__list-images"
                        ref={(ref) => {
                            slider.current = ref;
                        }}
                    >
                        {listPostsImages.map((image) => (
                            <img alt="" src={image} />
                        ))}
                    </Carousel>
                    <div
                        className="post-container__list-images__btn-prev"
                        onClick={() => slider.current.prev()}
                    >
                        <img
                            alt=""
                            src={require("../../assets/images/btn-prev.png")}
                        />
                    </div>
                    <div
                        className="post-container__list-images__btn-next"
                        onClick={() => slider.current.next()}
                    >
                        <img
                            alt=""
                            src={require("../../assets/images/btn-next.png")}
                        />
                    </div>
                </div>
                <div className="post-container__bottom mx-3 mt-2">
                    <div className="d-flex align-item-center">
                        {post.numberOfLike > 0 && (
                            <Tooltip
                                title={() =>
                                    post.listToolTips.map((item) => (
                                        <>
                                            {item}
                                            <br />
                                        </>
                                    ))
                                }
                                style={{
                                    cursor: "pointer",
                                    whiteSpace: "pre-wrap",
                                }}
                                className="underline"
                            >
                                <img
                                    className="img-circle"
                                    style={{ width: "20px" }}
                                    src={require("../../assets/images/like.png")}
                                    alt=""
                                />
                                <span className="ms-2">
                                    {post.numberOfLike}
                                </span>
                            </Tooltip>
                        )}
                        {post.commentsOfPost.length > 0 && (
                            <div className="ms-auto underline">
                                <span onClick={() => setShowComment(true)}>
                                    {post.commentsOfPost.length + 1} bình luận
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="post-container__bottom__action">
                        <div
                            className={
                                !post.likeState
                                    ? "col-4 d-flex justify-content-center"
                                    : "col-4 d-flex justify-content-center txt-blue"
                            }
                        >
                            {post.likeState ? (
                                <LikeFilled className="icon" />
                            ) : (
                                <LikeOutlined className="icon" />
                            )}

                            <p>Thích</p>
                        </div>
                        <div
                            className="col-4"
                            onClick={() => setShowComment(true)}
                        >
                            <p>Bình luận</p>
                        </div>
                        <div className="col-4">
                            <p>Chia sẻ</p>
                        </div>
                    </div>
                    <div className="post-container__bottom__comment col-12">
                        <img
                            className="img-circle"
                            alt=""
                            src={post.user.avatar}
                        />
                        <div className="comment">
                            <TextArea
                                className="textarea"
                                name="text"
                                placeholder="Viết bình luận..."
                                autoSize={{ maxRows: 5 }}
                                // onKeyDown={(e) => handleEnter(e)}
                            />
                        </div>
                    </div>
                    {showComment &&
                        post.commentsOfPost?.length > 0 &&
                        post.commentsOfPost.map((comment, index) => (
                            <Comment comment={comment} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Post;
