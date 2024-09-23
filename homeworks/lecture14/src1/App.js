import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [card, setCard] = useState(null);
  const [repos, setRepos] = useState([])

  const url = "https://api.github.com/users";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setCard(response.data[0])
        const reposResponse = await axios.get(response.data[0].repos_url);
        setRepos(reposResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  
  const handleClick = async (index) =>{
    setCard(data[index])
    try{
      const response = await axios.get(data[index].repos_url)
      setRepos(response.data)
    }catch(err){
    console.error(err)
  }
  }

  return (
    <div className = 'container'>
      <ul className="left">
        <li className="header">
          <span className="first">ID</span>
          <span className="second">Username</span>
          <span className="third">Image</span>
        </li>
        {data.map((item, index) => (
          <li key={index} className = 'user-item' onClick={() => handleClick(index)}>
            <span className="first">{item.id}</span>
            <span className="second">{item.login}</span>
            <span className="third">
              <img
                src={item.avatar_url}
                alt={item.login}
                width="50"
                height="50"
              />
            </span>
          </li>
        ))}
      </ul>

      {card &&<div className="right">
        <img src={card.avatar_url} alt={card.login} width="100" height="100" />
        <span className="username">Username: {card.login}</span>
        <h3>Repositories:</h3>
        <ul>{repos.map((item, index)=>{
          <li key = {index}>  
          <a href={item.html_url} target="_blank" rel="noopener noreferrer">
          {item.name}
          </a>
        </li>
        })}
        </ul>
      </div>}
    </div>
  );
}
