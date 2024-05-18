import { useEffect, useState } from 'react';
import Main from './components/Main'
import SideBar from './components/SideBar';
import Footer from './components/Footer';

export default function App() {

    const [data, setData] = useState(null) 
    const [cach, setCash] = useState(null)
    const  [showModal, setShowModal] = useState(false)
    
    function handleToggleModal(){
        setShowModal(!showModal)
    }
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    
    useEffect(()=>{

        async function fetchApiData() {
            const url = 'https://api.nasa.gov/planetary/apod'+`?api_key=${NASA_KEY}`

            const today = (new Date()).toDateString()
            const localKey = `NASA-${today}`
            if (localStorage.getItem(localKey)){
                const apiData = JSON.parse(localStorage.getItem(localKey))
                setData(apiData)
                console.log('Fetched from cach')
                return
            }

            setCash(data)
            localStorage.clear()

            try{

                const res = await fetch(url)
                const apiData = await res.json()
                
                if(apiData.media_type !== 'image'){
                    setData(cach)
                    return
                }

                localStorage.setItem(localKey, JSON.stringify(apiData))
                setData(apiData)
                console.log(apiData)
                console.log('Fetched from API today')
   
            }catch(err){
                console.log(err.message)
            }
        }

        fetchApiData()
    },[NASA_KEY])

    
    return (
        <>
            { data 
                ? <Main data={data} /> 
                : <div className='loadingState'><i className="fa-solid fa-gear"></i></div>
            }

            { showModal && <SideBar data={data} toggleModal={handleToggleModal} /> }

            { data && <Footer data={data} toggleModal={handleToggleModal} /> }
        </>
    )
}
