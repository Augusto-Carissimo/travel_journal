import "./css/App.css";
import Header from "./components/Header.js";
import Post from "./components/Post.js";
import data from './data.js'


function App() {
  const posts = data.map(data => {
    return(
        <Post
          key={data.id}
          {...data}
        />)
  })
  return (
    <container className='container'>
      < Header />
      <section className='post-list'>
        {posts}
      </section>
    </container>
  );
}

export default App;
