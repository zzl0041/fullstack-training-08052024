
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import ImageGallery from './components/ImageGallery';
import SearchableList from './components/SearchableList';
import TodoList from './components/TodoLists';
import FetchAPI from './components/FetchAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import Tabs from './components/Tabs';
import Timer from './components/Timer';
import GraphQL_Apollo from './components/GraphQL_Apollo';
import { Provider } from 'react-redux';
import store from './store';
import UserList from './mockRedux/UserList';
import List from './mockRedux/List';
import SnowflakeOA from './components/Snowflake/SnowflakeOA';
import ItemLeftRight from './components/ItemLeftRight/ItemLeftRight';
import ContactForm from './components/MockInter/ContactForm';
import SmartSearch from './components/HuMock/SmartSearch';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => dispatch({type: 'INCREMENT'});
  const decrement = () => dispatch({type: 'DECREMENT'});

  useEffect(()=>{

  },[])
  
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      setLoading(true);
      fetch(url)
        .then((res) => {
          if(!res.ok){
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
      }, [url]);
      return {data, loading, error};
    };
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts');
    if(loading){
      return <div>Loading...</div>
    }
    if(error){
      return <div>{error}</div>
    }

  return (
    <div className="App">

      {/* <h1>{count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>

      <Tabs/>
      <Timer/>
      <GraphQL_Apollo/> */}
      {/* <SearchableList/>
      <ImageGallery/>
      <TodoList/>
      <FetchAPI/> */}
        {/* <Provider store={store}>
          <UserList />
          <List/>
        </Provider> */}
        {/* <SnowflakeOA/> */}
        {/* <ItemLeftRight/> */}
        {/* <ContactForm/> */}
        <SmartSearch/>
    </div>
    

    
  );
}

export default App;

