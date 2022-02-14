import {useState, useEffect} from 'react' ;
//import {useNavigate} from 'react-router';
import './EventTimer.css';
import Realistic from './Realistic';
import NavBar from './NavBar';

const EventTimer = () => {
  //console.log(finalTime);
  // eslint-disable-next-line
  const [countdownDate, setCountdownDate] = useState(new Date('Feb 16, 22 21:08:50 GMT+05:30').getTime());
 // const navigate = useNavigate();
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

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      
      const distanceToDate = countdownDate - currentTime;
      
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      
      if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        console.log("Time Reached")
        clearInterval(interval);
      }
      else{
          days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
      }
    
      setState({ days: days, hours: hours, minutes, seconds });
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
          <div className='time' style={{color:"#4dd44d"}}>{state.days || '0'}</div>
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
                <a href="/info" class="button">Launch</a>
            </div>
          ):(
              <div></div>
          )
      }
    </div>
  );
};

export default EventTimer;
