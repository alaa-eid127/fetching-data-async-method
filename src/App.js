import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => { getData() }, [])
  const getData = async () => {
    try {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
      const response = await request.json();
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h1 className='title'>API Post</h1>
      {loading && <div> A moment please...</div>}
      {error && <div>there is a problem fetching the post data-{error}</div>}
      {data.map(item => (
        <div className='myPosts' key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
