import './styles.css';
import CountdownTimer from './js/CountdownTimer'; 

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 5, 2021, 23:16:00')
});


