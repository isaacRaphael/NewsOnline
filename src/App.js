import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Componets/Navbar';
import CardList from './Componets/CardList';
import Pagination from './Componets/Pagination';
import Title from './Componets/Title';

function App() {
 const [posts, setPosts] = useState([])
 const [loaded , setLoaded] = useState(false)
 const [page , setPage] = useState(1)
 useEffect(() => {
  query()
 } , [])


 async function query(page = 1, size = 6){
  setLoaded(false)
  const APIURL = `https://newsapi.org/v2/everything?q=nigeria&apiKey=a2fa30caa67a4166a7c79c3b536a501b&pageSize=${size}&page=${page}`

  const theQuery = await fetch(APIURL)
  const response = await theQuery.json()

  setPosts(response.articles)
  setLoaded(true)
  console.log(response.articles)  
}

const handlePageChange = (num) => {
  setPage(num)
  query(num)
}

  return (
    <div className="App">
       <Navbar />
       <Title />
       {!loaded && <div className='grid w-full h-[400px] place-items-center'><img src='./loading.gif' className='w-[50px]' alt='loading animation'></img></div>}
       {loaded && <CardList posts={posts}/>}
       {loaded && <Pagination page={page} handlePageChange={handlePageChange}/>}
    </div>
  );
}


export default App;
