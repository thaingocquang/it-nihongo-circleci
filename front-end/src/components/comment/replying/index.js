import React from "react";
import { Input } from "antd";
import "./replying-comment.scss";

const { TextArea } = Input;
function ReplyingComment() {
    const user = {
        avatar: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/280374790_1477115089370427_2274356777150785265_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vpaAxncQIHMAX9LyyTS&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAI3my99glnXmA8khxc2FQ_ttRTB3SmNIxJysHGFc-hQA&oe=637B3806"
    }
    return (
        <div className="replying-comment">
            <img className="img-circle" alt="" src={user.avatar}/>
            <div className="comment">
                <TextArea
                    className="textarea"
                    name="text"
                    placeholder="Viết bình luận..."
                    autoSize={{ maxRows: 5 }}
                    />
            </div>
        </div>
    );
}

export default ReplyingComment;
