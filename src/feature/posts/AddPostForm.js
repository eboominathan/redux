import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postsAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers)


  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postsAdded(title, content,userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
  ))
  return (
    <section>
      <h2>Add New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select name="postAuthor" 
        value={userId}
            onChange={onAuthorChanged}
        
        >
            <option value="">Select Author</option>
            {userOptions}</select>
        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Button
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
