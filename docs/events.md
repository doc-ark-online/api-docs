这一页是GameObject下面的东西（忽略这一行）

`@description` GameObject的基类
`@networkStatus usage`双端


##getBoundingBoxSize{#getBoundingBoxSize}
getBoundingBoxSize(nonColliding?: boolean, includeFromChildActors?: boolean, outer?: Type.Vector): Type.Vector;
`@description` 获取物体包围盒大小
`@effect`调用端生效

:::@precautions
如果 outer 不为空,返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象 
:::

`@param`
 - outer usage:接收转换数据的 Vector 对象 default:null
 - includeFromChildActors usage:如果为 true，则递归子物体 default:false
 - nonColliding usage:表示要在边界框中包含非碰撞组件 default:false
`@Returns`Type.Vector
 
 ***
 
 ##getChildrenBoxCenter{#getChildrenBoxCenter}
getChildrenBoxCenter(outer?: Type.Vector): Type.Vector;
`@description` 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])
`@effect`调用端生效

:::@precautions
如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象 
:::

`@param`
 - outer usage:接收转换数据的 Vector 对象 default:null
`@Returns`Type.Vector
`@example`
  ```ts
     * ```
     * let listener = Events.addFocusListener(this.testFunction);
     * public testFunction() {
     * }
     * // 移除监听
     * listener.disconnect();
     * ```
     ```
