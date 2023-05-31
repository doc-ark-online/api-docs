[Gameplay](../groups/Gameplay.Gameplay.md) / SpringArm

# SpringArm <Badge type="tip" text="Class" /> <Score text="SpringArm" />

弹簧臂

## Table of contents

| Accessors |
| :-----|
| **[collisionEnabled](Gameplay.SpringArm.md#collisionenabled)**(): `boolean` <br> 启用碰撞|
| **[length](Gameplay.SpringArm.md#length)**(): `number` <br> 弹簧臂长度|
| **[localTransform](Gameplay.SpringArm.md#localtransform)**(): [`Transform`](Type.Transform.md) <br> 弹簧臂相对变换|
| **[movementCollisionDetectionEnabled](Gameplay.SpringArm.md#movementcollisiondetectionenabled)**(): `boolean` <br> 启用移动碰撞检测|
| **[offset](Gameplay.SpringArm.md#offset)**(): [`Vector`](Type.Vector.md) <br> 弹簧臂挂点偏移|
| **[useControllerRotation](Gameplay.SpringArm.md#usecontrollerrotation)**(): `boolean` <br> 使用控制器控制旋转|
| **[worldTransform](Gameplay.SpringArm.md#worldtransform)**(): [`Transform`](Type.Transform.md) <br> 弹簧臂世界变换|

## Accessors

### collisionEnabled <Score text="collisionEnabled" /> 

• `get` **collisionEnabled**(): `boolean` <Badge type="tip" text="client" />

启用碰撞


::: warning Precautions

开启后弹簧臂才会检测碰撞的物体并收缩至离挂载目标最近的碰撞物体处
 注意:要修改检测轨迹必须通过修改弹簧臂长度(TargetArmLength)以及targetOffset、slotOffset来实现，诸如直接修改弹簧臂位置的方式会导致偏移处不触发碰撞收缩

:::

使用示例:生成10根柱子用作摄像机弹簧杆碰撞，提供按键方法操作弹簧臂的碰撞效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "26950";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        if(SystemUtil.isServer()) {
            // 生成10根柱子用作摄像机弹簧杆碰撞
            for (let i = 0;
i < 10;
i++) {
                GameObject.spawn({guid: "26950", transform: new Type.Transform(new Type.Vector(100, i * 20), Type.Rotation.zero, Type.Vector.one)});
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 摄像机y轴偏移-200
            myCamera.offset = new Type.Vector(0, -200, 0);
            // 添加一个按键方法：按下键盘“1”，启用/禁用摄像机弹簧杆碰撞
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂的碰撞 " + myCamera.springArm.collisionEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用摄像机弹簧杆移动碰撞检测
            InputUtil.onKeyDown(Type.Keys.Two, () => {
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

使用示例:生成10根柱子用作摄像机弹簧杆碰撞，提供按键方法操作弹簧臂的碰撞效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "26950";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        if(SystemUtil.isServer()) {
            // 生成10根柱子用作摄像机弹簧杆碰撞
            for (let i = 0;
i < 10;
i++) {
                GameObject.spawn({guid: "26950", transform: new Type.Transform(new Type.Vector(100, i * 20), Type.Rotation.zero, Type.Vector.one)});
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 摄像机y轴偏移-200
            myCamera.offset = new Type.Vector(0, -200, 0);
            // 添加一个按键方法：按下键盘“1”，启用/禁用摄像机弹簧杆碰撞
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂的碰撞 " + myCamera.springArm.collisionEnabled);
            });
            // 添加一个按键方法：按下键盘“3”，启用/禁用摄像机弹簧杆移动碰撞检测
            InputUtil.onKeyDown(Type.Keys.Two, () => {
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

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 5;
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

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 6;
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

• `get` **localTransform**(): [`Transform`](Type.Transform.md) <Badge type="tip" text="client" />

弹簧臂相对变换


使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 1;
            });
        }
    }
}
```

#### Returns

[`Transform`](Type.Transform.md)

• `set` **localTransform**(`value`): `void` <Badge type="tip" text="client" />

弹簧臂相对变换


::: warning Precautions

弹簧臂的相对变换，用于设置弹簧臂的相对位置、相对旋转以及相对缩放

:::

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 2;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Transform`](Type.Transform.md) | 变换 |


___

### movementCollisionDetectionEnabled <Score text="movementCollisionDetectionEnabled" /> 

• `get` **movementCollisionDetectionEnabled**(): `boolean` <Badge type="tip" text="client" />

启用移动碰撞检测


::: warning Precautions

开启后在碰撞到物体(摄像机碰撞类型必须为MoveCollison)时会在摄像机停止移动后一段时间才收缩

:::

使用示例:生成10根柱子用作摄像机弹簧杆碰撞，提供按键方法操作弹簧臂的碰撞效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "26950";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        if(SystemUtil.isServer()) {
            // 生成10根柱子用作摄像机弹簧杆碰撞
            for (let i = 0;
i < 10;
i++) {
                GameObject.spawn({guid: "26950", transform: new Type.Transform(new Type.Vector(100, i * 20), Type.Rotation.zero, Type.Vector.one)});
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 摄像机y轴偏移-200
            myCamera.offset = new Type.Vector(0, -200, 0);
            // 添加一个按键方法：按下键盘“1”，启用/禁用摄像机弹簧杆碰撞
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂的碰撞 " + myCamera.springArm.collisionEnabled);
            });
            // 添加一个按键方法：按下键盘“4”，启用/禁用摄像机弹簧杆移动碰撞检测
            InputUtil.onKeyDown(Type.Keys.Two, () => {
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

使用示例:生成10根柱子用作摄像机弹簧杆碰撞，提供按键方法操作弹簧臂的碰撞效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "26950";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        if(SystemUtil.isServer()) {
            // 生成10根柱子用作摄像机弹簧杆碰撞
            for (let i = 0;
i < 10;
i++) {
                GameObject.spawn({guid: "26950", transform: new Type.Transform(new Type.Vector(100, i * 20), Type.Rotation.zero, Type.Vector.one)});
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 摄像机y轴偏移-200
            myCamera.offset = new Type.Vector(0, -200, 0);
            // 添加一个按键方法：按下键盘“1”，启用/禁用摄像机弹簧杆碰撞
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂的碰撞 " + myCamera.springArm.collisionEnabled);
            });
            // 添加一个按键方法：按下键盘“5”，启用/禁用摄像机弹簧杆移动碰撞检测
            InputUtil.onKeyDown(Type.Keys.Two, () => {
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

### offset <Score text="offset" /> 

• `get` **offset**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="client" />

弹簧臂挂点偏移


::: warning Precautions

弹簧臂挂点相对偏移

:::

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 7;
            });
        }
    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

• `set` **offset**(`value`): `void` <Badge type="tip" text="client" />

弹簧臂挂点偏移


::: warning Precautions

弹簧臂挂点相对偏移

:::

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 8;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector`](Type.Vector.md) | 挂点偏移 |


___

### useControllerRotation <Score text="useControllerRotation" /> 

• `get` **useControllerRotation**(): `boolean` <Badge type="tip" text="client" />

使用控制器控制旋转


::: warning Precautions

开启后，使用控制器的旋转作为摄像机的旋转

:::

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 8;
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

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 9;
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

• `get` **worldTransform**(): [`Transform`](Type.Transform.md) <Badge type="tip" text="client" />

弹簧臂世界变换


::: warning Precautions

弹簧臂的相对变换，用于设置弹簧臂的相对位置、相对旋转以及相对缩放

:::

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 3;
            });
        }
    }
}
```

#### Returns

[`Transform`](Type.Transform.md)

• `set` **worldTransform**(`value`): `void` <Badge type="tip" text="client" />

弹簧臂世界变换


::: warning Precautions

用于设置弹簧臂的世界位置、世界旋转以及世界缩放

:::

使用示例:提供按键方法修改弹簧臂的属性，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，切换摄像机弹簧臂的偏移(0, 100, 100)，2秒后复原
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.offset = new Type.Vector(0, 100, 100);
                console.log("摄像机弹簧臂的本地变换 " + myCamera.springArm.localTransform);
                console.log("摄像机弹簧臂的世界变换 " + myCamera.springArm.worldTransform);
                setTimeout(() => {
                    myCamera.springArm.offset = Type.Vector.zero;
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用控制器操作摄像机的旋转5秒
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.springArm.useControllerRotation = false;
                setTimeout(() => {
                    myCamera.springArm.useControllerRotation = true;
                }, 5000);
            });
            // 添加一个按键方法：按下键盘“Up”，增加摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Up, () => {
                myCamera.springArm.length += 1;
            });
            // 添加一个按键方法：按下键盘“Dowm”，减少摄像机弹簧臂的长度
            InputUtil.onKeyDown(Type.Keys.Down, () => {
                myCamera.springArm.length -= 4;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Transform`](Type.Transform.md) | 变换 |

