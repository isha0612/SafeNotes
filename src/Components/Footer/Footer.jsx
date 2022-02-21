import React, {useState, useEffect, useContext} from 'react'
import DataContext from '../../Context/DataContext'
import './Footer.scss'

export default function Footer() {
    const context = useContext(DataContext);

    const [year, setYear] = useState('');

    const getYear = () => {
        setYear(new Date().getFullYear())
    }
    
    useEffect(() => {
        getYear();
    }, []);

  return (
    <div className={context.light ? 'footer' : 'footer footer-dark'}>
        <p>copyright &#9400; {year}</p>
        <p>google keep clone</p>
    </div>
  )
}
