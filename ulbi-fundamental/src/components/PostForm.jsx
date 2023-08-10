import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                type={"text"}
                onChange={e => setPost({...post, title: e.target.value})}
                placeholder={"Название поста"}
                value={post.title}
            />
            <MyInput
                type={"text"}
                placeholder={"Описание поста"}
                onChange={e => setPost({...post, body: e.target.value})}
                value={post.body}
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;