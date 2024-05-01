import { useEffect, useState } from 'react';
import Main from './components/Main'
import SideBar from './components/SideBar';
import Footer from './components/Footer';

export default function App() {

    const [data, setData] = useState(null) 
    const [loading, setLoading] = useState(false)
    const  [showModal, setShowModal] = useState(false)
    
    function handleToggleModal(){
        setShowModal(!showModal)
    }
    
    useEffect(()=>{
        
        async function fetchApiData() {
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
            const url = 'https://api.nasa.gov/planetary/apod'+`?api_key=${NASA_KEY}`
            try{
                const res = await fetch(url)
                const apiData = res.json()
                // console.log(apiData)
                setData(apiData)
                console.log(apiData)  

            }catch(err){
                console.log(err.message)
            }
        }

        fetchApiData()

    },[])

    
    return (
        <>
            { data 
                ? <Main /> 
                : <div className='loadingState'><i className="fa-solid fa-gear"></i></div>
            }

            { showModal && <SideBar toggleModal={handleToggleModal} /> }

            { data && <Footer toggleModal={handleToggleModal} /> }
        </>
    )
}
