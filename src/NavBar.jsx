import './Navbar.css';
import Confetti from 'react-confetti';
import {useState,useRef,useEffect} from 'react';



function NavBar(){
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confettiRef = useRef(null);
    
    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
      }, [])

    return(
        <div>
            <header className="header"  ref={confettiRef}>
                <h1 className="title">HydroMetLab</h1>
                <Confetti
                    recycle={true}
                    numberOfPieces={100}
                    width={width}
                    height={height}
                />
            </header>
            
        </div>
       
    )
}

export default NavBar;