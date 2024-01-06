import Post from "../post/Post";
import "./posts.scss";
import edina from '../../assets/IMG_0619.JPG'
import zejneb from '../../assets/IMG_1772.jpg'

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Edina Dinar",
      userId: 1,
      profilePic: edina,
      desc: "Nekad, negdje, na nekoj lokaciji...",
      img: edina,
    },
    {
      id: 2,
      name: "Zejneb Dinar",
      userId: 2,
      profilePic: zejneb,
      desc: "Ovo sam ja puna sebe.",
      img: zejneb
    },
  ];

  return <div className="posts">
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>;
};

export default Posts;
