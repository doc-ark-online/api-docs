[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / SpringArm

# SpringArm <Badge type="tip" text="Class" /> <Score text="SpringArm" />

弹簧臂

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[collisionEnabled](mw.SpringArm.md#collisionenabled)**(): `boolean`  |
| :-----|
| 启用碰撞|
| **[collisionInterpSpeed](mw.SpringArm.md#collisioninterpspeed)**(): `number`  |
| 碰撞插值速度,该值用于调整摄像机从碰撞状态恢复为非碰撞状态的速度,用于使摄像机碰撞效果更加平滑;|
| **[length](mw.SpringArm.md#length)**(): `number`  |
| 弹簧臂长度|
| **[localTransform](mw.SpringArm.md#localtransform)**(): [`Transform`](mw.Transform.md)  |
| 弹簧臂相对变换|
| **[useControllerRotation](mw.SpringArm.md#usecontrollerrotation)**(): `boolean`  |
| 使用控制器控制旋转|
| **[worldTransform](mw.SpringArm.md#worldtransform)**(): [`Transform`](mw.Transform.md)  |
| 弹簧臂世界变换|

## Accessors

### collisionEnabled <Score text="collisionEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **collisionEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **collisionEnabled**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


启用碰撞


::: warning Precautions

开启后弹簧臂才会检测碰撞的物体并收缩至离挂载目标最近的碰撞物体处
注意:要修改检测轨迹必须通过修改弹簧臂长度(TargetArmLength)以及targetOffset、slotOffset来实现，诸如直接修改弹簧臂位置的方式会导致偏移处不触发碰撞收缩

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


启用碰撞


::: warning Precautions

开启后弹簧臂才会检测碰撞的物体并收缩至离挂载目标最近的碰撞物体处
注意:要修改检测轨迹必须通过修改弹簧臂长度(TargetArmLength)以及targetOffset、slotOffset来实现，诸如直接修改弹簧臂位置的方式会导致偏移处不触发碰撞收缩

:::

```ts

```

#### Parameters

| `value` `boolean` | 是否启用 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:将使用到的资源:"26950"拖入优先加载栏。创建一个名为"Example_SpringArm_CollisionEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成10根柱子用作触发摄像机弹簧杆碰撞，按下键盘“1”，启用/禁用摄像机弹簧杆碰撞。你可以看到禁用摄像机弹簧杆碰撞摄像机碰撞柱子不同的效果.代码如下:

</span>

```ts
@Component
export default class Example_SpringArm_CollisionEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        if(SystemUtil.isServer()) {
            // 生成10根柱子用作摄像机弹簧杆碰撞
            for (let i = 0;
i < 10;
i++) {
                GameObject.spawn({guid: "26950", transform: new Transform(new Vector(100, i * 100, 0), Rotation.zero, Vector.one)});
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，启用/禁用摄像机弹簧杆碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂的碰撞 " + myCamera.springArm.collisionEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用摄像机弹簧杆移动碰撞检测
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂移动碰撞检测 " + myCamera.springArm.collisionEnabled);
            });
        }
    }
}
```
___

### collisionInterpSpeed <Score text="collisionInterpSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **collisionInterpSpeed**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **collisionInterpSpeed**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


碰撞插值速度,该值用于调整摄像机从碰撞状态恢复为非碰撞状态的速度,用于使摄像机碰撞效果更加平滑;


::: warning Precautions

默认值是2,生效范围0-20,值越大速度越快,当等于0时,会关闭摄像机碰撞插值效果;
该速度不是固定的,而是会由快变慢

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


碰撞插值速度,该值用于调整摄像机从碰撞状态恢复为非碰撞状态的速度,用于使摄像机碰撞效果更加平滑;


::: warning Precautions

默认值是2,生效范围0-20,值越大速度越快,当等于0时,会关闭摄像机碰撞插值效果;
该速度不是固定的,而是会由快变慢

:::

```ts

```

#### Parameters

| `value` `number` | 是否启用 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:将使用到的资源:"26950"拖入优先加载栏。创建一个名为"Example_SpringArm_CollisionEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成10根柱子用作触发摄像机弹簧杆碰撞，按下键盘“1”，启用/禁用摄像机弹簧杆碰撞。你可以看到禁用摄像机弹簧杆碰撞摄像机碰撞柱子不同的效果.代码如下:

</span>

```ts
@Component
export default class Example_SpringArm_CollisionEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        if(SystemUtil.isServer()) {
            // 生成10根柱子用作摄像机弹簧杆碰撞
            for (let i = 0;
i < 10;
i++) {
                GameObject.spawn({guid: "26950", transform: new Transform(new Vector(100, i * 100, 0), Rotation.zero, Vector.one)});
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，启用/禁用摄像机弹簧杆碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂的碰撞 " + myCamera.springArm.collisionEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用摄像机弹簧杆移动碰撞检测
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂移动碰撞检测 " + myCamera.springArm.collisionEnabled);
            });
        }
    }
}
```
___

### length <Score text="length" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **length**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **length**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


弹簧臂长度


::: warning Precautions

调整摄像机与挂点之间的距离

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


弹簧臂长度


::: warning Precautions

调整摄像机与挂点之间的距离

:::

#### Parameters

| `value` `number` | 弹簧臂长度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为"Example_SpringArm_Length"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按住键盘“3”，增加摄像机弹簧臂的长度，按住键盘“4”，减少摄像机弹簧臂的长度.你将在场景中看到摄像机弹簧杆伸缩的效果.代码如下:

</span>

```ts
@Component
export default class Example_SpringArm_Length extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按住键盘“3”，增加摄像机弹簧臂的长度
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按住键盘“4”，减少摄像机弹簧臂的长度
            InputUtil.onKeyPress(Keys.Four, () => {
                myCamera.springArm.length -= 1;
            });
        }
    }
}
```
___

### localTransform <Score text="localTransform" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **localTransform**(): [`Transform`](mw.Transform.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **localTransform**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


弹簧臂相对变换



#### Returns

| [`Transform`](mw.Transform.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


弹簧臂相对变换


::: warning Precautions

弹簧臂的相对变换，用于设置弹簧臂的相对位置、相对旋转以及相对缩放

:::

#### Parameters

| `value` [`Transform`](mw.Transform.md) | 变换 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为"Example_SpringArm_LocalTransform"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原.你将在场景中看到摄像机偏移的效果并在控制台看到打印的变化后的摄像机弹簧臂的本地变换.代码如下:

</span>

```ts
@Component
export default class Example_SpringArm_LocalTransform extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按住键盘“3”，增加摄像机弹簧臂的长度
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按住键盘“4”，减少摄像机弹簧臂的长度
            InputUtil.onKeyPress(Keys.Four, () => {
                myCamera.springArm.length -= 1;
            });
        }
    }
}
```
___

### useControllerRotation <Score text="useControllerRotation" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **useControllerRotation**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **useControllerRotation**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


使用控制器控制旋转


::: warning Precautions

开启后，使用控制器的旋转作为摄像机的旋转

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


使用控制器控制旋转


::: warning Precautions

开启后，使用控制器的旋转作为摄像机的旋转

:::

#### Parameters

| `value` `boolean` | 是否使用控制器控制旋转 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为"Example_SpringArm_UseControllerRotation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒.你将在场景中看到禁用控制器操作摄像机后的无法控制摄像机旋转的效果.代码如下:

</span>

```ts
@Component
export default class Example_SpringArm_UseControllerRotation extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按住键盘“3”，增加摄像机弹簧臂的长度
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按住键盘“4”，减少摄像机弹簧臂的长度
            InputUtil.onKeyPress(Keys.Four, () => {
                myCamera.springArm.length -= 1;
            });
        }
    }
}
```
___

### worldTransform <Score text="worldTransform" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **worldTransform**(): [`Transform`](mw.Transform.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **worldTransform**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


弹簧臂世界变换


::: warning Precautions

弹簧臂的世界变换，用于设置弹簧臂的世界位置、世界旋转以及世界缩放

:::


#### Returns

| [`Transform`](mw.Transform.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


弹簧臂世界变换


::: warning Precautions

弹簧臂的世界变换，用于设置弹簧臂的世界位置、世界旋转以及世界缩放

:::

#### Parameters

| `value` [`Transform`](mw.Transform.md) | 变换 |
| :------ | :------ |


</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为"Example_SpringArm_WorldTransform"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原.你将在场景中看到摄像机偏移的效果并在控制台看到打印的变化后的摄像机弹簧臂的世界变换.代码如下:

</span>

```ts
@Component
export default class Example_SpringArm_WorldTransform extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按住键盘“3”，增加摄像机弹簧臂的长度
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按住键盘“4”，减少摄像机弹簧臂的长度
            InputUtil.onKeyPress(Keys.Four, () => {
                myCamera.springArm.length -= 1;
            });
        }
    }
}
```
