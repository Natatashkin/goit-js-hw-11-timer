import './styles.css';
import CountdownTimer from './js/CountdownTimer'; 

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 8, 2021, 15:44:00')
});


