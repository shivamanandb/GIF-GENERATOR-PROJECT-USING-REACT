import Spinner from './Spinner';
import useGif from './hooks/useGif.js';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// console.log(process.env.REACT_APP_GIPHY_API_KEY)

function Random() {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(true);
    
    // async function fetchData() {
        
    //     setLoading(true);

    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const output = await axios.get(url);
    //     const imageSource = output.data.data.images.downsized_large.url;
    //     // console.log(imageSource)
    //     setGif(imageSource);

    //     setLoading(false)

    // }

    // useEffect(()=> {
    //     fetchData()
    // }, [])

    const {gif, loading, fetchData} = useGif()

    return (
        <div className='w-1/2 bg-green-400 flex flex-col rounded-lg border border-black '>
            <h1 className='text-center font-bold text-xl uppercase mt-2 underline'>A Random GIF</h1>
             
            { loading ? (<Spinner/>) : (<img className='mx-auto mt-3' src={gif} alt="Random GIF" width='450px' />) }

            <button className='m-4 bg-yellow-400 text-lg rounded-lg font-bold py-2' onClick={()=>fetchData()}>
                Generate
            </button>
        </div>
    )
}

export default Random
