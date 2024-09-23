import { BrowserRouter as Router,Routes, Route, useNavigate, useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  return(
  <Router>
   <Routes>
    <Route path = '/' element = {<Home />} />
    <Route path = '/home' element = {<Home />} />
    <Route path = '/login' element = {<Login />} />
    <Route path = '/users' element = {<Login />} />
    <Route path ='/getUser' element={<GetUser />} />
    <Route path = '/getUserInfo/:login' element={<GetMoreInfo />}/>
    <Route path = '/homepage' element = {<Homepage />} />
    <Route path = '/logout' element = {<Logout />} />
   </Routes>
  </Router>
  )
}


function Home(){
  return(
    <>
    <h1>home </h1>
    <a href='/login'>login</a>
    </>
  )
}

function Login(){
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(username)
    console.log(password)
    if(password.toString()=='123456' && username.toString()=='123456'){
      navigate('/getUser')}
    else{
      navigate('/homepage')
    }
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e) =>{
      setUsername(e.target.value)
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
}

  return(
  <>
    <h2>login </h2>
    <form onSubmit={handleSubmit}>
    <div>username: <input onChange={handleUsername} /></div>
    <div>password: <input onChange={handlePassword}/></div>
    <button >submit</button>
    </form>
  </>
  )
}


function Homepage(){
  return(<>
    <h2>welcome home</h2>
    <p>username</p>
    <a href='/logout'>logout</a>
  </>)
}

function Logout(){
    return(
    <>
      <h2>Logout</h2>
      <a href='/home'>back to home</a>
    </>)
}

function GetUser(){
    const url = "https://api.github.com/users";
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (err) {
         console.log(err.message)
        }
      };
      fetchData()
    }, [])
    const navigate = useNavigate();
    const handleClick = (login) =>{
      // <Link to={`/getUserInfo/${item.login}`} />
      navigate(`/getUserInfo/${login}`);
    }
    return(
      <div>
      <ul className="left">
          <li className="header" style={{display:'flex'}}>
            <span className="first" style={{width:'15%'}}>ID</span>
            <span className="second" style={{width:'25%'}}>Username</span>
            <span className="third" style={{width:'40%'}}>Image</span>
          </li>
          {data.map((item, index) => (
            <li key={index} className = 'user-item' style={{display:'flex'}} >
              <span className="first" style={{width:'15%'}}>{item.id}</span>
              <span className="second" style={{width:'25%'}}>{item.login}</span>
              <span className="third" style={{width:'40%'}}>
                <img
                  // onClick={()=>handleClick(item.login)}
                  src={item.avatar_url}
                  alt={item.login}
                  width="50"
                  height="50"
                />
              </span>
            </li>
          ))}
      </ul>
      </div>
      )
  }

function GetMoreInfo(){
  const {login} = useParams();
  const [userDetail, setUserDetail] = useState(null)
  useEffect(()=>{
    const getUser = async () =>{
      try{ const response = await axios(`https://api.github.com/users/${login}`)
      setUserDetail(response.data)}
      catch(err){
      console.log(err)
    } 
  }
    getUser()
    
  },[login])

  return(
    <>
    {userDetail && (
      <div>
         <h1>{userDetail.name}</h1>
          <p>ID: {userDetail.id}</p>
          <p>Username: {userDetail.login}</p>
          <p>Bio: {userDetail.bio ? userDetail.bio : 'No bio available'}</p>
          <p>Location: {userDetail.location ? userDetail.location : 'Unknown'}</p>
          <p>Public Repos: {userDetail.public_repos}</p>
          <p>Followers: {userDetail.followers}</p>
          <p>Following: {userDetail.following}</p>
          <img
            src={userDetail.avatar_url}
            alt={userDetail.login}
            width="150"
            height="150"
          />
          <p>
            <a href={userDetail.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
      </div>
    )}
    <a href='/home'>back to home</a>
    </>
  )
}

export default App;