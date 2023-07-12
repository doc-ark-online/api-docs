[GAMEPLAY](../groups/Core.GAMEPLAY.md) / SpringArm

# SpringArm <Badge type="tip" text="Class" /> <Score text="SpringArm" />

弹簧臂

## Table of contents

| Accessors |
| :-----|
| **[collisionEnabled](mw.SpringArm.md#collisionenabled)**(): `boolean` <br> 启用碰撞|
| **[length](mw.SpringArm.md#length)**(): `number` <br> 弹簧臂长度|
| **[localTransform](mw.SpringArm.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 弹簧臂相对变换|
| **[movementCollisionDetectionEnabled](mw.SpringArm.md#movementcollisiondetectionenabled)**(): `boolean` <br> 启用移动碰撞检测|
| **[useControllerRotation](mw.SpringArm.md#usecontrollerrotation)**(): `boolean` <br> 使用控制器控制旋转|
| **[worldTransform](mw.SpringArm.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 弹簧臂世界变换|

## Accessors

### collisionEnabled <Score text="collisionEnabled" /> 

• `get` **collisionEnabled**(): `boolean` <Badge type="tip" text="client" />

启用碰撞


::: warning Precautions

开启后弹簧臂才会检测碰撞的物体并收缩至离挂载目标最近的碰撞物体处
注意:要修改检测轨迹必须通过修改弹簧臂长度(TargetArmLength)以及targetOffset、slotOffset来实现，诸如直接修改弹簧臂位置的方式会导致偏移处不触发碰撞收缩

:::

使用示例:将使用到的资源:"26950"拖入优先加载栏。创建一个名为"Example_SpringArm_CollisionEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成10根柱子用作触发摄像机弹簧杆碰撞，按下键盘“1”，启用/禁用摄像机弹簧杆碰撞。你可以看到禁用摄像机弹簧杆碰撞摄像机碰撞柱子不同的效果.代码如下:
```ts
@Class
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
                myCamera.springArm.movementCollisionDetectionEnabled = !myCamera.springArm.movementCollisionDetectionEnabled;
                console.log("摄像机弹簧臂移动碰撞检测 " + myCamera.springArm.movementCollisionDetectionEnabled);
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **collisionEnabled**(`value`): `void` <Badge type="tip" text="client" />

启用碰撞


::: warning Precautions

开启后弹簧臂才会检测碰撞的物体并收缩至离挂载目标最近的碰撞物体处
注意:要修改检测轨迹必须通过修改弹簧臂长度(TargetArmLength)以及targetOffset、slotOffset来实现，诸如直接修改弹簧臂位置的方式会导致偏移处不触发碰撞收缩

:::

使用示例:将使用到的资源:"26950"拖入优先加载栏。创建一个名为"Example_SpringArm_CollisionEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成10根柱子用作触发摄像机弹簧杆碰撞，按下键盘“1”，启用/禁用摄像机弹簧杆碰撞。你可以看到禁用摄像机弹簧杆碰撞摄像机碰撞柱子不同的效果.代码如下:
```ts
@Class
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
                myCamera.springArm.movementCollisionDetectionEnabled = !myCamera.springArm.movementCollisionDetectionEnabled;
                console.log("摄像机弹簧臂移动碰撞检测 " + myCamera.springArm.movementCollisionDetectionEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否启用 |


___

### length <Score text="length" /> 

• `get` **length**(): `number` <Badge type="tip" text="client" />

弹簧臂长度


::: warning Precautions

调整摄像机与挂点之间的距离

:::

使用示例:创建一个名为"Example_SpringArm_Length"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按住键盘“3”，增加摄像机弹簧臂的长度，按住键盘“4”，减少摄像机弹簧臂的长度.你将在场景中看到摄像机弹簧杆伸缩的效果.代码如下:
```ts
@Class
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

#### Returns

`number`

• `set` **length**(`value`): `void` <Badge type="tip" text="client" />

弹簧臂长度


::: warning Precautions

调整摄像机与挂点之间的距离

:::

使用示例:创建一个名为"Example_SpringArm_Length"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按住键盘“3”，增加摄像机弹簧臂的长度，按住键盘“4”，减少摄像机弹簧臂的长度.你将在场景中看到摄像机弹簧杆伸缩的效果.代码如下:
```ts
@Class
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 弹簧臂长度 |


___

### localTransform <Score text="localTransform" /> 

• `get` **localTransform**(): [`Transform`](mw.Transform.md) <Badge type="tip" text="client" />

弹簧臂相对变换


使用示例:创建一个名为"Example_SpringArm_LocalTransform"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原.你将在场景中看到摄像机偏移的效果并在控制台看到打印的变化后的摄像机弹簧臂的本地变换.代码如下:
```ts
@Class
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

#### Returns

[`Transform`](mw.Transform.md)

• `set` **localTransform**(`value`): `void` <Badge type="tip" text="client" />

弹簧臂相对变换


::: warning Precautions

弹簧臂的相对变换，用于设置弹簧臂的相对位置、相对旋转以及相对缩放

:::

使用示例:创建一个名为"Example_SpringArm_LocalTransform"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原.你将在场景中看到摄像机偏移的效果并在控制台看到打印的变化后的摄像机弹簧臂的本地变换.代码如下:
```ts
@Class
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Transform`](mw.Transform.md) | 变换 |


___

### movementCollisionDetectionEnabled <Score text="movementCollisionDetectionEnabled" /> 

• `get` **movementCollisionDetectionEnabled**(): `boolean` <Badge type="tip" text="client" />

启用移动碰撞检测


::: warning Precautions

开启后在碰撞到物体(摄像机碰撞类型必须为MoveCollison)时会在摄像机停止移动后一段时间才收缩

:::

使用示例:将使用到的资源:"26950"拖入优先加载栏。创建一个名为"Example_SpringArm_MovementCollisionDetectionEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成10根柱子用作触发摄像机弹簧杆碰撞，开启摄像机弹簧杆碰撞后，按下键盘“2”，启用/禁用摄像机弹簧杆移动碰撞检测。你可以看到禁用摄像机弹簧杆移动碰撞检测后摄像机碰撞柱子不同的效果.代码如下:
```ts
@Class
export default class Example_SpringArm_MovementCollisionDetectionEnabled extends Script {
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
                myCamera.springArm.movementCollisionDetectionEnabled = !myCamera.springArm.movementCollisionDetectionEnabled;
                console.log("摄像机弹簧臂移动碰撞检测 " + myCamera.springArm.movementCollisionDetectionEnabled);
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **movementCollisionDetectionEnabled**(`value`): `void` <Badge type="tip" text="client" />

启用移动碰撞检测


::: warning Precautions

开启后在碰撞到物体(摄像机碰撞类型必须为MoveCollison)时会在摄像机停止移动后一段时间才收缩

:::

使用示例:将使用到的资源:"26950"拖入优先加载栏。创建一个名为"Example_SpringArm_MovementCollisionDetectionEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成10根柱子用作触发摄像机弹簧杆碰撞，开启摄像机弹簧杆碰撞后，按下键盘“2”，启用/禁用摄像机弹簧杆移动碰撞检测。你可以看到禁用摄像机弹簧杆移动碰撞检测后摄像机碰撞柱子不同的效果.代码如下:
```ts
@Class
export default class Example_SpringArm_MovementCollisionDetectionEnabled extends Script {
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
                myCamera.springArm.movementCollisionDetectionEnabled = !myCamera.springArm.movementCollisionDetectionEnabled;
                console.log("摄像机弹簧臂移动碰撞检测 " + myCamera.springArm.movementCollisionDetectionEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否启用 |


___

### useControllerRotation <Score text="useControllerRotation" /> 

• `get` **useControllerRotation**(): `boolean` <Badge type="tip" text="client" />

使用控制器控制旋转


::: warning Precautions

开启后，使用控制器的旋转作为摄像机的旋转

:::

使用示例:创建一个名为"Example_SpringArm_UseControllerRotation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒.你将在场景中看到禁用控制器操作摄像机后的无法控制摄像机旋转的效果.代码如下:
```ts
@Class
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

#### Returns

`boolean`

• `set` **useControllerRotation**(`value`): `void` <Badge type="tip" text="client" />

使用控制器控制旋转


::: warning Precautions

开启后，使用控制器的旋转作为摄像机的旋转

:::

使用示例:创建一个名为"Example_SpringArm_UseControllerRotation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒.你将在场景中看到禁用控制器操作摄像机后的无法控制摄像机旋转的效果.代码如下:
```ts
@Class
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否使用控制器控制旋转 |


___

### worldTransform <Score text="worldTransform" /> 

• `get` **worldTransform**(): [`Transform`](mw.Transform.md) <Badge type="tip" text="client" />

弹簧臂世界变换


::: warning Precautions

弹簧臂的世界变换，用于设置弹簧臂的世界位置、世界旋转以及世界缩放

:::

使用示例:创建一个名为"Example_SpringArm_WorldTransform"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原.你将在场景中看到摄像机偏移的效果并在控制台看到打印的变化后的摄像机弹簧臂的世界变换.代码如下:
```ts
@Class
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

#### Returns

[`Transform`](mw.Transform.md)

• `set` **worldTransform**(`value`): `void` <Badge type="tip" text="client" />

弹簧臂世界变换


::: warning Precautions

弹簧臂的世界变换，用于设置弹簧臂的世界位置、世界旋转以及世界缩放

:::

使用示例:创建一个名为"Example_SpringArm_WorldTransform"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原.你将在场景中看到摄像机偏移的效果并在控制台看到打印的变化后的摄像机弹簧臂的世界变换.代码如下:
```ts
@Class
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Transform`](mw.Transform.md) | 变换 |

