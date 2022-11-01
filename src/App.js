import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript', body: 'Description'},
        {id: 3, title: 'Javascript', body: 'Description'}
    ]);



    const createPost = (newPost) => {
            setPosts([...posts, newPost])
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
