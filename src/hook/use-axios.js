import { useState, useEffect } from 'react';


export default function useAxios(configRequest) {
  const {axiosInstance, method, url, othersConfigs = {}} = configRequest;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...othersConfigs,
        })
  
        setData(res.data);
  
      } catch (err) {
        setError(err.message)
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);


  return [
    data,
    loading,
    error
  ]
}
