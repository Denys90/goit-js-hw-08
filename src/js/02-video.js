import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const newPlayer = new player(iframe);

const CURRENT_NAME_KEY = 'videoplayer-current-time';

newPlayer.on('play', function () {
  console.log('played the video!');
});

const currentTime = function ({ seconds }) {
  const currentTime = localStorage.setItem(
    CURRENT_NAME_KEY,
    JSON.stringify(seconds)
  );
};
let time = Number(localStorage.getItem(CURRENT_NAME_KEY));

newPlayer.on('timeupdate', throttle(currentTime, 500));

newPlayer
  .setCurrentTime(time)
  // .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
