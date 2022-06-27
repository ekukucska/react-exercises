import React, { useEffect, useState } from "react"; 
import { JSON_PLACEHOLDER_POSTS_URL } from "../../constants/URLs";

const UseEffect = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  // Can be used for ex. to cleanup after an unfinished API fetch like here
  useEffect(() => {
    console.log("Effect");
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(JSON_PLACEHOLDER_POSTS_URL, { signal: signal })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => {
        setError(err);
      });
    return () => {
      console.log("Cleanup");
      controller.abort();
    };
  }, [show]);

  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };

  console.log('Render');

  return (
    <>
      <h4>Placeholder API Data:</h4>
      <div>
        <button onClick={showPost}>Show Posts</button>
        <p>Posts:</p>
        {show &&
          (!error ? (
            posts.map((post) => (
              <ul key={post.id}>
                <li>{post.title}</li>
              </ul>
            ))
          ) : (
            <p>{error}</p>
          ))
        }
      </div>
      <p><i>*This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it.</i></p>
    </>
  );
};

export default UseEffect;
