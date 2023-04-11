import axios from 'axios'
  export default async function handler(req, res) {
    const response = await axios.get('http://localhost:3000/api/users')
    res.status(200).json({
        data: response.data,
      });    
  }
  