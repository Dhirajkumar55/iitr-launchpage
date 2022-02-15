import {useState, useEffect} from 'react' ;
//import {useNavigate} from 'react-router';
import './EventTimer.css';
import Realistic from './Realistic';
import NavBar from './NavBar';

const EventTimer = () => {
  //console.log(finalTime);
  // eslint-disable-next-line
  //const [countdownTimer, setcountdownTimer] = useState(10);
 // const navigate = useNavigate();
  const[show,setShow] = useState(false);
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
let interval="";
  useEffect(() => {
    // eslint-disable-next-line
    interval = setInterval(() => setNewTime(), 1000);
  }, []);

  let timer = 10;
  const setNewTime = () => {

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = timer;
    const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if(timer===0){
      clearInterval(interval);
      setState({days:0,hours:0,minutes:0,seconds:0});
      setTimeout(() => setShow(true),3000);
    }
    else{
      if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }
      setState({days:days,hours:hours,minutes:minutes,seconds:seconds});
      timer--;
    }
    
   
  };

  return (
    <div>
      <NavBar/>
      <h3 className="subtitle">We welcome you to the live launch of HydroMetLab Web Application</h3>
      {
        state.days <= 0 && state.hours <= 0 && state.minutes <= 0 && state.seconds <= 0 ? (
          <h4 className="subtitle">It's Ready for Launch.... </h4>
        ):(
          <h4 className="subtitle">Launch Starts in....</h4>
        )
      }
      
      <div className='countdown-wrapper'>
        <div className='time-section' >
          <div className='time' style={{color:"#4dd44d"}}>{state.days || '00'}</div>
          <small className="time-text">
            {
              state.days === "1" ? "day":"days"
            }
          </small>
        </div>
        <div className='time-section'>
          <div className='time'>:</div>
        </div>
        <div className='time-section'>
          <div className='time' style={{color:"#ffcc25"}}>{state.hours || '00'}</div>
          <small className="time-text">Hours</small>
        </div>
        <div className='time-section'>
          <div className='time'>:</div>
        </div>
        <div className='time-section'>
          <div className='time' style={{color:"#ff8d47"}}>{state.minutes || '00'}</div>
          <small className="time-text">Minutes</small>
        </div>
        <div className='time-section'>
          <div className='time'>:</div>
        </div>
        <div className='time-section'>
          <div className='time' style={{color:"#fc5151"}}>{state.seconds || '00'}</div>
          <small className="time-text">Seconds</small>
        </div>
      </div>
      {
          state.days <= 0 && state.hours <= 0 && state.minutes <= 0 && state.seconds <= 0 ? (
            <div>
                <Realistic />
                {show? <div className='button-div'><a href="http://hydrometlab.in" class="button">Launch</a></div>:<div/>}
            </div>
          ):(
              <div></div>
          )
      }
    </div>
  );
};

export default EventTimer;
