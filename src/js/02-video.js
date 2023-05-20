import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new player(iframe);

const CURRENT_NAME_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

const currentTime = function ({ seconds }) {
  localStorage.setItem(CURRENT_NAME_KEY, JSON.stringify(seconds));
  let time = Number(localStorage.getItem(CURRENT_NAME_KEY));
  console.log(time);
};

player.on('timeupdate', throttle(currentTime, 500));
