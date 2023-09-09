// *************************** //
// ******** General ********** //
// *************************** //

const vehicle = document.getElementById('vehicle')
const type = document.getElementById('type-group')
const speed = document.getElementById('speed-group')

let carTop = 2
let carLeft = 4
let speedValue = 0.2

// *************************** //
// ****** 移动vehicel ********* //
// *************************** //

function moveCar(event) {
  console.log('触发' + event.key + '，车速：' + speedValue)

  // if (event.key == ArrowUp)
  switch (event.key) {
    case 'ArrowUp':
      carTop -= speedValue
      console.log(carTop)
      // 移动距离
      vehicle.style.top = carTop + 'rem'
      // 改变方向
      vehicle.style.transform = 'rotate(270deg)'

      break
    case 'ArrowRight':
      carLeft += speedValue
      vehicle.style.left = carLeft + 'rem'
      vehicle.style.transform = 'rotate(0)'

      break
    case 'ArrowDown':
      carTop += speedValue
      vehicle.style.top = carTop + 'rem'
      vehicle.style.transform = 'rotate(90deg)'

      break
    case 'ArrowLeft':
      carLeft -= speedValue
      vehicle.style.left = carLeft + 'rem'
      vehicle.style.transform = 'rotate(180deg)'

      break

    default:
      break
  }
  // 储存车辆位置
  sessionStorage.setItem('selectedTop', carTop.toString())
  sessionStorage.setItem('selectedLeft', carLeft.toString())
}

// 监听：window 范围内触发keydown事件时执行 moveCar()
window.addEventListener('keydown', moveCar)

// *************************** //
// ******** 改变车型 ********** //
// *************************** //

function toggleType(event) {
  // console.log(event.target.value)
  // console.log(vehicle.src)
  vehicle.src = `./img/car${event.target.value}.png`
  // 储存车辆类型
  sessionStorage.setItem('selectedType', vehicle.src)

  type?.blur()
}
type?.addEventListener('change', toggleType)

// *************************** //
// ******** 改变速度 ********** //
// *************************** //

function toggleSpeed(event) {
  // console.log(event.target.value)
  speedValue = event.target.value * 0.2
  // 储存速度
  sessionStorage.setItem('selectedSpeed', speedValue)

  speed?.blur()
}

speed?.addEventListener('change', toggleSpeed)

// 在页面加载时检索存储的值
window.addEventListener('load', function () {
  // 类型、速度、坐标
  const storedType = sessionStorage.getItem('selectedType')
  const storedSpeed = sessionStorage.getItem('selectedSpeed')
  const storedTop = sessionStorage.getItem('selectedTop')
  const storedLeft = sessionStorage.getItem('selectedLeft')

  if (storedType) {
    vehicle.src = storedType
    type.option[storedType].classList.add('selected')
  }
  if (storedSpeed) {
    speedValue = parseFloat(storedSpeed)
    console.log('sessionStorage:' + speedValue)
  }
  if (storedTop) {
    carTop = parseFloat(storedTop)
  }
  if (storedLeft) {
    carLeft = parseFloat(storedLeft)
  }
})
