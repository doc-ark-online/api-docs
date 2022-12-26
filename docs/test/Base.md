[Gameplay](../modules/Gameplay.Gameplay.md) / CharacterAnimation

# CharacterAnimation <Badge type="tip" text="Class" />

extends [CharacterBase](../classes/Gameplay.Gameplay.CharacterBase.md)

<pre>
为了方便使用与结构统一, 将姿态也抽象出一个对象, 使用方式和动画对象类似.
</pre>

## Table of contents

| Properties                                                                                                                                                                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [blendMode](Base.md#substance-blendmode): [Gameplay](../modules/Gameplay.Gameplay.md).[StanceBlendMode](../enums/Gameplay.Gameplay.StanceBlendMode.md) <br> 姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身). |

<!-- #### Properties  inherited from XXX（希望这里是可折叠区域）

| Name | Description |
| :------ | :------ |
| [blendMode](Base.md#substance-blendmode): [Gameplay](../modules/Gameplay.Gameplay.md).[StanceBlendMode](../enums/Gameplay.Gameplay.StanceBlendMode.md) <br> 姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身). |
| [blendMode](Base.md#substance-blendmode): [Gameplay](../modules/Gameplay.Gameplay.md).[StanceBlendMode](../enums/Gameplay.Gameplay.StanceBlendMode.md) <br> 姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身). |
| [blendMode](Base.md#substance-blendmode): [Gameplay](../modules/Gameplay.Gameplay.md).[StanceBlendMode](../enums/Gameplay.Gameplay.StanceBlendMode.md) <br> 姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身). |
| [blendMode](Base.md#substance-blendmode): [Gameplay](../modules/Gameplay.Gameplay.md).[StanceBlendMode](../enums/Gameplay.Gameplay.StanceBlendMode.md) <br> 姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身). | -->

<!-- ### Methods
| Name | Description |
| :----------------- | :----------------- |
| [loadStance](Base.md#character-loadstance)(guid: [string](https://www.runoob.com/typescript/ts-string.html), sync = true): [Gameplay](../modules/Gameplay.Gameplay.md).[SubStance](../classes/Gameplay.Gameplay.SubStance.md); | 创建一个二级姿态对象并返回, 可在任意端调用. |
| public [play()](Base.md#substance-play-substance-stop): [boolean](https://www.runoob.com/typescript/ts-type.html); | 播放这个姿态对象, 并返回执行结果.|
| public [stop()](Base.md#substance-play-substance-stop): boolean; | 停止这个姿态对象, 并返回执行结果.|
| [stopStance](Base.md#character-stopstance)(sync = true): void; | 停止任何正在播放的姿态, 当你不想保存执行play()后的姿态对象时, 可以直接调用这个方法停止姿态. |
 -->

| Methods                                                                                                                                                                                                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [loadStance](Base.md#character-loadstance)(guid: [string](https://www.runoob.com/typescript/ts-string.html), sync = true): [Gameplay](../modules/Gameplay.Gameplay.md).[SubStance](../classes/Gameplay.Gameplay.SubStance.md); <br> 创建一个二级姿态对象并返回, 可在任意端调用. |
| public [play()](Base.md#substance-play-substance-stop): [boolean](https://www.runoob.com/typescript/ts-type.html); <br> 播放这个姿态对象, 并返回执行结果.                                                                                                                       |
| public [stop()](Base.md#substance-play-substance-stop): boolean; <br> 停止这个姿态对象, 并返回执行结果.                                                                                                                                                                         |
| [stopStance](Base.md#character-stopstance)(sync = true): void; <br> 停止任何正在播放的姿态, 当你不想保存执行 play()后的姿态对象时, 可以直接调用这个方法停止姿态.                                                                                                                |

## Methods

### [loadStance](Base.md#character-loadstance)(guid: [string](https://www.runoob.com/typescript/ts-string.html), sync = true): [Gameplay](../modules/Gameplay.Gameplay.md).[SubStance](../classes/Gameplay.Gameplay.SubStance.md)

创建一个二级姿态对象并返回, 可在任意端调用.

**guid**参数传入预制姿态资源**GUID**时, 会直接创建对应姿态; 传入**动画资源 GUID**时, 会创建单动画姿态模板, 并将模板的动画槽位设置为指定的动画资源(动态创建单动画姿态).
**sync**参数代表对姿态对象的操作是否会同步其他端.

::: warning Precautions
即使在服务器上调用 loadStance(), 如果 sync 参数置为 false, 也不会同步操作到客户端.
:::

```ts
/**
 * @description 创建一个二级姿态对象
 * @effect 调用端生效
 * @param guid usage: 预制姿态资源guid或动画资源guid
 * @param sync usage: 是否自动同步
 */
loadStance(guid: string, sync = true): Gameplay.SubStance;
```

### SubStance.blendMode

姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身).

如果这个姿态是通过**预制姿态资源 GUID**创建的, 那么它的默认值为 StanceBlendMode.**None**, 它会按照资源上的 blendMode 参数指定混合模式;
如果是通过**动画资源 GUID**创建的, 那么它的默认值为 StanceBlendMode.**WholeBody**.

::: warning Precautions
(临时, 预计 021 修改)**不应该**把**动画资源 GUID**创建的姿态的混合模式置为 StanceBlendMode.**None**, 因为动画资源没有 blendMode 参数. 虽然不会报错, 但它确实会创建出一个姿态, 而且看不到任何表现.
:::

```ts
/**
 * @description 混合模式
 * @precautions 无法对正常播放的姿态进行修改
 */
blendMode: Gameplay.StanceBlendMode;
```

```ts
/**
 * @description 姿态混合模式
 */
enum StanceBlendMode {
  /** 不指定 */
  None,
  /** 只混合上半身 */
  BlendUpper,
  /** 只混合下半身 */
  BlendLower,
  /** 全身混合 */
  WholeBody,
}
```

### SubStance.play/SubStance.stop

播放 / 停止这个姿态对象, 并返回执行结果.

这个操作是否会自动**同步**多端, 取决于调用 Character.**loadStance()**时传入的**sync**参数.
返回的**执行结果**, 在**不自动同步**时多数情况下**可靠**; 在**自动同步**时完全**不可靠**, 总是会返回 true, 因为无法判断其他端的执行情况

```ts
/**
 * @description 播放姿态
 * @effect 可选同步
 */
public play(): boolean;
```

```ts
/**
 * @description 停止姿态
 * @effect 可选同步
 */
public stop(): boolean;
```

### Character.stopStance

停止任何正在播放的姿态, 当你不想保存执行 play()后的姿态对象时, 可以直接调用这个方法停止姿态.
**sync**参数代表了这个操作是否会自动**同步**多端. 因为默认值是 true, 所以对**单端对象**操作时需要把它置为**false**.

::: warning Precautions
虽然允许多端同步播放并在单端停止播放, 但你要自己承担出现奇怪现象的责任
:::

```ts
/**
 * @description 停止正在播放的姿态
 * @effect 可选同步
 * @param sync usage: 是否自动同步
 */
stopStance(sync = true): void;
```

## Example

### XXX-1

在角色初始化完成后, 可以执行下面的代码, 让所有客户端的角色全身播放一个持枪的姿态

```ts
// 通过预制姿态GUID, 创建姿态对象(别忘了预加载资源)
this.stanceProxy = this.character.loadStance("49096", true); // [!code  focus]
// 修改姿态的混合模式为全身(默认是不指定, 如果你不修改它, 它会按照资源本身的blendMode参数进行播放, 即只在上半身播放)
this.stanceProxy.blendMode = Gameplay.StanceBlendMode.WholeBody;
// 播放这个姿态
this.stanceProxy.play();
```

当你想停止它时, 可以执行下面的代码

```ts
this.stanceProxy.stop();
```

### XXX-2

在角色初始化完成后, 可以执行下面的代码, 仅让这个客户端的角色下半身播放一个坐下的姿态

```ts
// 通过动画GUID, 创建姿态对象(别忘了预加载资源)
let stanceProxy = this.character.loadStance("29741", false);
// 修改姿态的混合模式为下半身(默认是全身)
stanceProxy.blendMode = Gameplay.StanceBlendMode.BlendLower;
// 播放这个姿态
stanceProxy.play();
```

当你想停止它时, 可以执行下面的代码

```ts
this.character.stopStance(false);
```
