import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from './hooks/useGif.js';

function Tag() {

    const [tag, setTag] = useState('car');
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(true);
    
    // async function fetchData() {
        
    //     setLoading(true);

    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const output = await axios.get(url);
    //     const imageSource = output.data.data.images.downsized_large.url;
    //     // console.log(imageSource)
    //     setGif(imageSource);

    //     setLoading(false)

    // }

    // useEffect(()=> {
    //     fetchData()
    // }, [])

    // function clickHandler() {
    //     fetchData()
    // }

    const {gif, loading, fetchData} = useGif(tag);

    function changeHandler(event) {
        setTag(event.target.value)
    }

    return (
        <div className='w-1/2 bg-blue-400 p-4 flex flex-col rounded-lg border border-black '>
            <h1 className='text-center font-bold text-xl uppercase mt-2 underline'>Random {tag} GIF</h1>
             
            { loading ? (<Spinner/>) : (<img className='mx-auto mt-3' src={gif} alt="Random GIF" width='450px' />) }

            <input onChange={changeHandler} 
            className='mt-4 mb-3 text-md text-center rounded-lg py-2'
            value={tag} />

            <button className='bg-yellow-400 text-lg rounded-lg font-bold py-2' onClick={()=>{fetchData(tag)}}>
                Generate
            </button>
        </div>
    )
}

export default Tag
