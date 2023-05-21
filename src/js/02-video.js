import throttle from 'lodash.throttle';
import vimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

const CURRENT_NAME_KEY = 'videoplayer-current-time';

const getCurrentTime = ({ seconds }) => {
  localStorage.setItem(CURRENT_NAME_KEY, seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 500));
player.setCurrentTime(localStorage.getItem(CURRENT_NAME_KEY) || 0);
