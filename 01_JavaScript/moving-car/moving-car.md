## 项目使用知识点

flex 布局学习
javascript 事件监听
键盘事件
浏览器本地存储 localstorage
css 定位 position
ES6 模板字符串

## 遇到的问题

1. 把\<script>放在\<head>里的话，因为加载顺序获取不到 dom（null）

2. 用 switch() 控制 img 的 top 值，carTop-- 只执行里一次，停在 -1，把 let 变量挪到全局就好了

```js
+ let carTop = 0
+ let carLeft = 0

function moveCar(event) {
  console.log('触发' + event.key)
  - let carTop = 0
  - let carLeft = 0

  // if (event.key == ArrowUp)
    switch (event.key) {
      case 'ArrowUp':
        carTop--
        console.log(carTop)
        vehicle.style.top = carTop + 'rem'
        break
      default:
        break
    }
}
```

3. sessionStorage 保存的数据是字符串类型，保存车的坐标时要num => string

```js
sessionStorage.setItem('selectedLeft', carLeft.toString())
```

