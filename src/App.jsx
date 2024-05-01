import { useEffect, useState } from 'react';
import Main from './components/Main'
import SideBar from './components/SideBar';
import Footer from './components/Footer';

export default function App() {

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
                const data = res.json()
                // console.log('DATA\n', data)
                console.log(data)

            }catch(err){
                console.log(err.message)
            }
        }

        fetchApiData()

    },[])

    
    return (
        <>
            <Main />
            { showModal && (<SideBar toggleModal={handleToggleModal} />) }
            <Footer toggleModal={handleToggleModal} /> 
        </>
    )
}
