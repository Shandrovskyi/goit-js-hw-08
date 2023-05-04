
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const playerElement = document.querySelector('#vimeo-player');
const player = new Player(playerElement);


player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));


const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
