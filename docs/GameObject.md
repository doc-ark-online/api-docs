Gameobject 的基类

`@networkStatus`双端

## getBoundingBoxSize {#getBoundingBoxSize}

getBoundingBoxSize(nonColliding?: boolean, includeFromChildActors?: boolean, outer?: Type.Vector): Type.Vector;

`@description`
获取物体包围盒大小

`@effect`
调用端生效

::: tip @precautions
如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象
这里本该是一个亮块
:::

`@param`

- nonColliding usage:表示要在边界框中包含非碰撞组件 default:false
- includeFromChildActors usage:如果为 true，则递归子物体 default:false
- outer usage:接收转换数据的 Vector 对象 default:null

`@returns`Type.Vector

---

## getChildrenBoxCenter {#getChildrenBoxCenter}

getChildrenBoxCenter(outer?: Type.Vector): Type.Vector;

`@description` 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

`@effect` 调用端生效

::: tip @precautions
如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象
这里本该是一个亮块
:::

`@param`

- outer usage:接收转换数据的 Vector 对象 default:null

`@returns`Type.Vector

`@example`随便捞的代码

```ts
function ref<T>(value: T): Ref<UnwrapRef<T>>;

interface Ref<T> {
  value: T;
}
```

这是代码介绍

---
