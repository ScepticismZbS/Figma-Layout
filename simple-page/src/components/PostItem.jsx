import React from "react";
import postImage from "../img/postImg.jpg"

const PostItem = () => {
    return(
        <div className="post">
            <img src={postImage} alt="postImage" width='200px' heigh='220px' />
            <hr style={{border: '2px solid #F7654A', backgroundColor: '#F7654A', marginTop: '20px', marginBottom: '20px'}}/>
            <h3>Арена</h3>
            <p>Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
        </div>
    );
};

export default PostItem