[GAMEPLAY](../groups/Core.GAMEPLAY.md) / NavigationUtil

# NavigationUtil <Badge type="tip" text="Class" /> <Score text="NavigationUtil" />

路径查询。

## Table of contents

| Methods |
| :-----|
| **[findPath](mw.NavigationUtil.md#findpath)**(`startPos`: [`Vector`](mw.Vector.md), `endPos`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)[] <br> 查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点|
| **[follow](mw.NavigationUtil.md#follow)**(`relatedObject`: [`GameObject`](mw.GameObject.md), `target`: [`GameObject`](mw.GameObject.md), `radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 跟随目标|
| **[navigateTo](mw.NavigationUtil.md#navigateto)**(`relatedObject`: [`GameObject`](mw.GameObject.md), `position`: [`Vector`](mw.Vector.md), `radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 寻路移动|
| **[stopFollow](mw.NavigationUtil.md#stopfollow)**(`relatedObject`: [`GameObject`](mw.GameObject.md)): `void` <br> 停止跟随|
| **[stopNavigateTo](mw.NavigationUtil.md#stopnavigateto)**(`relatedObject`: [`GameObject`](mw.GameObject.md)): `void` <br> 导航停止|

## Methods

### findPath <Score text="findPath" /> 

• `Static` **findPath**(`startPos`, `endPos`): [`Vector`](mw.Vector.md)[] 

查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点


使用示例: 创建一个名为"findPath"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，你将会在编辑器日志窗口中看到打印（注：此接口需要配合寻路区域使用，即statPos和endPos都需要在寻路区域内）
```ts
export default class findPath extends Script {

    protected onStart(): void {
        let startPos = new Vector(-100,-100,0);
        let endPos = new Vector(0,0,0);
        console.log(NavigationUtil.findPath(startPos,endPos));
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startPos` | [`Vector`](mw.Vector.md) | 起点 |
| `endPos` | [`Vector`](mw.Vector.md) | 终点 |

#### Returns

[`Vector`](mw.Vector.md)[]

主要路径点

___

### follow <Score text="follow" /> 

• `Static` **follow**(`relatedObject`, `target`, `radius?`, `OnSuccess?`, `OnFail?`): `void` 

跟随目标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relatedObject` | [`GameObject`](mw.GameObject.md) | 寻路作用对象 |
| `target` | [`GameObject`](mw.GameObject.md) | 被跟随目标 |
| `radius?` | `number` | 距目标半径 default:0 |
| `OnSuccess?` | () => `void` | 成功回调 default:null |
| `OnFail?` | () => `void` | 失败回调 default:null |


___

### navigateTo <Score text="navigateTo" /> 

• `Static` **navigateTo**(`relatedObject`, `position`, `radius?`, `OnSuccess?`, `OnFail?`): `void` 

寻路移动


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relatedObject` | [`GameObject`](mw.GameObject.md) | 寻路作用对象 |
| `position` | [`Vector`](mw.Vector.md) | 目标位置 |
| `radius?` | `number` | 距目标半径 default:0 |
| `OnSuccess?` | () => `void` | 成功回调 default:null |
| `OnFail?` | () => `void` | 失败回调 default:null |


___

### stopFollow <Score text="stopFollow" /> 

• `Static` **stopFollow**(`relatedObject`): `void` 

停止跟随


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relatedObject` | [`GameObject`](mw.GameObject.md) | 寻路作用对象 |


___

### stopNavigateTo <Score text="stopNavigateTo" /> 

• `Static` **stopNavigateTo**(`relatedObject`): `void` 

导航停止


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relatedObject` | [`GameObject`](mw.GameObject.md) | 寻路作用对象 |

