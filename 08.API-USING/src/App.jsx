import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {



  const getUserById = async(userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  }

  const getPostById = async(postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
    return response.data;
  }

  const getPost = async() => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData);
    
  }

  useEffect(() => {
    getPost();
}, [])

  return (
    <div>
      {/* Ekranda bir şey göstermek için buraya yazabilirsin */}
      <h2>Kullanıcı güncelleme denemesi yapıldı. Konsolu kontrol et!</h2>
    </div>
  )
}

export default App
