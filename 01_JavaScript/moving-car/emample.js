// 键盘上下左右对应的Keycode
const KeyValue = {
  left: 'ArrowLeft',
  up: 'ArrowUp',
  right: ' ArrowRight',
  down: 'ArrowDown',
}
// 车型对应的图片资源
const CarTypeImg = {
  tractors: './images/car1.png',
  truck: './images/car2.png',
  motor: './images/car3.png',
  roadster: './images/car4.png',
  electromobile: './images/car5.png',
  bike: './images/car6.png',
}

// 和游戏相关的dom
let gameMapDom = null //playground
let carDom = null //img
let speedSelectDom = null //speed
let carTypeSelectDom = null //type

// 保存的localstorage key
const StorageKey = 'Task4_Key'
// 车头方向
let carHeadDirection = 'right'

// 初始化游戏
function initGame() {
  gameMapDom = document.querySelector('.playground')
  carTypeSelectDom = document.querySelector('#type-group')
  speedSelectDom = document.querySelector('#speed-group')
  carDom = document.querySelector('#vehicle') //img
}

window.addEventListener('keydown', moveCar)

// 键盘方向
let direction
function moveCar(event, KeyValue) {
  event.key
  switch (KeyValue) {
    case KeyValue.left:
      direction = 'left'
      break
    case KeyValue.right:
      direction = 'right'
      break
    case KeyValue.top:
      direction = 'top'
      break
    case KeyValue.down:
      direction = 'down'
      break

    default:
      break
  }
}
initGame()
