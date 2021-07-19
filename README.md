# vue-hoverbox-al


## 一、使用方式

- 1、安装

  ```shell
  npm install --save vue-hoverbox-al
  ```

- 2、在组件中引用

  ```ts
  import HoverBox from "vue-hoverbox-al";
  @Component({
    components: {
        "vue-hoverbox-al": HoverBox
    }
  })
  ```

  ```html
  <vue-hoverbox-al @hoverIn="hoverin($el)" @hoverOut="hoverout($el)"></vue-hoverbox-al>
  ```



## 二、主要的参数

|       参数        |    类型    | 说明                           | 默认值  |
| :---------------: | :--------: | ------------------------------ | ------- |
|     `hoverIn`     | `Function` | 鼠标进去区域的回调              |       |
|     `hoverOut`    | `Function` | 鼠标离开区域的回调              |       |
|      `click`      | `Function` | 点击区域的回调                  |       |
