import React, {useState, useEffect} from 'react'
import './Footer.scss'

export default function Footer() {
    const [year, setYear] = useState('');

    const getYear = () => {
        setYear(new Date().getFullYear())
    }
    useEffect(() => {
        getYear();
    }, []);

  return (
    <div className='footer'>
        <p>copyright &#9400; {year}</p>
    </div>
  )
}
