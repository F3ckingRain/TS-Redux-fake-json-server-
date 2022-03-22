import React, {useEffect, useState} from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading} = postAPI.useFetchAllUsersQuery(limit)

    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идёт загрузка...</h1>}
                {error && <h1>Ошибка при загрузке</h1>}          
            </div>
        </div>
    )
}

export default PostContainer2;