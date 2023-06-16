[mw](Core.mw.md) / NavigationUtil

# NavigationUtil <Badge type="tip" text="Namespace" /> <Score text="NavigationUtil" />

## Table of contents

| Functions |
| :-----|
| **[findPath](mw.NavigationUtil.md#findpath)**(`startPos`: [`Vector`](../classes/mw.Vector.md), `endPos`: [`Vector`](../classes/mw.Vector.md)): [`Vector`](../classes/mw.Vector.md)[] <br> 查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点|

## Functions

### findPath <Score text="findPath" /> 

• **findPath**(`startPos`, `endPos`): [`Vector`](../classes/mw.Vector.md)[] 

查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点


使用示例: 创建一个名为"findPath"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，你将会在编辑器日志窗口中看到打印（注：此接口需要配合寻路区域使用，即statPos和endPos都需要在寻路区域内）
```ts
@Core.Class
export default class findPath extends Script {

    protected onStart(): void {
        let startPos = new Vector(-100,-100,0);
        let endPos = new Vector(0,0,0);
        console.log(NavigationUtil.findPath(startPos,endPos));
    }

    protected onUpdate(dt: number): void {

    }

    protected onDestroy(): void {

    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startPos` | [`Vector`](../classes/mw.Vector.md) | 起点 |
| `endPos` | [`Vector`](../classes/mw.Vector.md) | 终点 |

#### Returns

[`Vector`](../classes/mw.Vector.md)[]

主要路径点
