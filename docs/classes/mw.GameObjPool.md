[Utility](../groups/Core.Utility.md) / GameObjPool

# GameObjPool <Badge type="tip" text="Class" /> <Score text="GameObjPool" />

GameObject对象池

使用示例:创建一个名为GameObjPoolExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在原点生成一个方块，并在5秒后消失
```ts
@Core.Class
export default class GameObjPoolExample extends Script {

    protected onStart(): void {
        this.createCube();
    }

    //通过对象池动态创建一个方块
    public createCube(): void {
        const cubeAssetId = "7669";
        GameObjPool.asyncSpawn(cubeAssetId, GameObjPoolSourceType.Asset).then(obj => {
            obj.worldLocation = new Vector(0, 0, 0);
            setTimeout(() => {
                //5秒后回收该方块
                GameObjPool.despawn(obj);
            }, 5000);
        });
    }
}
```

## Table of contents

| Methods |
| :-----|
| **[destroy](mw.GameObjPool.md#destroy)**(): `void` <br> 销毁对象池全局实例|
| **[asyncSpawn](mw.GameObjPool.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`guid`: `string`, `type?`: [`GameObjPoolSourceType`](../enums/mw.GameObjPoolSourceType.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步生成一个对象|
| **[clear](mw.GameObjPool.md#clear)**(`guid`: `string`, `type?`: [`GameObjPoolSourceType`](../enums/mw.GameObjPoolSourceType.md)): `void` <br> 清除对象池中该GUID对应的所有对象|
| **[clearAll](mw.GameObjPool.md#clearall)**(): `void` <br> 清除对象池里的所有对象|
| **[despawn](mw.GameObjPool.md#despawn)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 归还一个对象|
| **[spawn](mw.GameObjPool.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`guid`: `string`, `type?`: [`GameObjPoolSourceType`](../enums/mw.GameObjPoolSourceType.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 生成一个对象|

## Methods

### destroy <Score text="destroy" /> 

• **destroy**(): `void` 

销毁对象池全局实例



___

### asyncSpawn <Score text="asyncSpawn" /> 

• `Static` **asyncSpawn**<`T`\>(`guid`, `type?`): `Promise`<`T`\> 

异步生成一个对象

::: warning Precautions

注意需要把原始资源预加载

:::


使用示例:创建一个名为GameObjPoolExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在原点生成一个方块，并在5秒后消失
```ts
@Core.Class
export default class GameObjPoolExample extends Script {

    protected onStart(): void {
        this.createCube();
    }

    //通过对象池动态创建一个方块
    public createCube(): void {
        const cubeAssetId = "7669";
        GameObjPool.asyncSpawn(cubeAssetId, GameObjPoolSourceType.Asset).then(obj => {
            obj.worldLocation = new Vector(0, 0, 0);
            setTimeout(() => {
                //5秒后回收该方块
                GameObjPool.getInstance().despawn(obj);
            }, 5000);
        });
    }
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](mw.GameObject.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  资源GUID |
| `type?` | [`GameObjPoolSourceType`](../enums/mw.GameObjPoolSourceType.md) |  资源类型 default: 资源库中的资源 |

#### Returns

`Promise`<`T`\>

生成的对象

___

### clear <Score text="clear" /> 

• `Static` **clear**(`guid`, `type?`): `void` 

清除对象池中该GUID对应的所有对象


使用示例:创建一个名为GameObjPoolExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会生成10个方块，每个方块的位置不同，5秒后全部被销毁
```ts
@Core.Class
export default class GameObjPoolExample extends Script {

    protected onStart(): void {
        if (SystemUtil.isClient()) {
            this.createCube();
        }
    }

    //通过对象池动态创建多个方块
    public createCube(): void {
        const cubeAssetId = "7669";
        //创建10个方块 且位置不重叠
        for (let i = 0;
i < 10;
i++) {
            GameObjPool.asyncSpawn(cubeAssetId, GameObjPoolSourceType.Asset).then(obj => {
                obj.worldLocation = new Vector(i * 300, 0, 0);
                GameObjPool.despawn(obj);
//回收该对象但不隐藏
                obj.worldLocation = new Vector(i * 300, 0, 0);
                obj.setVisibility(Type.PropertyStatus.On);
            });
        }
        setTimeout(() => {
            GameObjPool.clear(cubeAssetId);
//将对象池中通过cubeAssetId创建的并且已回收的对象销毁
        }, 5000);
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  资源GUID |
| `type?` | [`GameObjPoolSourceType`](../enums/mw.GameObjPoolSourceType.md) |  资源类型 default: 资源库中的资源 |


___

### clearAll <Score text="clearAll" /> 

• `Static` **clearAll**(): `void` 

清除对象池里的所有对象


使用示例:创建一个名为GameObjPoolExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会生成10个方块以及10个球体，每个方块和球体的位置不同，5秒后有一半被销毁
```ts
@Core.Class
export default class GameObjPoolExample extends Script {

    protected onStart(): void {
        if (SystemUtil.isClient()) {
            this.createCube();
        }
    }

    //通过对象池动态创建多个不同物体并销毁
    public createCube(): void {
        const cubeAssetId = "7669";
        const cubeAssetId2 = "7675";
        //创建10个方块 且位置不重叠
        for (let i = 0;
i < 10;
i++) {
            GameObjPool.asyncSpawn(cubeAssetId, GameObjPoolSourceType.Asset).then(obj => {
                obj.worldLocation = new Vector(i * 300, 0, 0);
                if (i <= 5) return;
//只回收前5个方块
                GameObjPool.despawn(obj);
//回收该对象但不隐藏
                obj.worldLocation = new Vector(i * 300, 0, 0);
                obj.setVisibility(Type.PropertyStatus.On);
            });
        }
        //创建10个球体 且位置不重叠
        for (let i = 0;
i < 10;
i++) {
            GameObjPool.asyncSpawn(cubeAssetId2, GameObjPoolSourceType.Asset).then(obj => {
                obj.worldLocation = new Vector(i * 300, 300, 0);
                if (i <= 5) return;
//只回收前5个球体
                GameObjPool.despawn(obj);
//回收该对象但不隐藏
                obj.worldLocation = new Vector(i * 300, 300, 0);
                obj.setVisibility(Type.PropertyStatus.On);
            });
        }
        setTimeout(() => {
            GameObjPool.clearAll();
//将对象池中所有已回收的对象销毁
        }, 5000);
    }
}
```


___

### despawn <Score text="despawn" /> 

• `Static` **despawn**(`obj`): `void` 

归还一个对象


使用示例:创建一个名为GameObjPoolExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在原点生成一个方块，并在5秒后消失
```ts
@Core.Class
export default class GameObjPoolExample extends Script {

    protected onStart(): void {
        this.createCube();
    }

    //通过对象池动态创建一个方块
    public createCube(): void {
        const cubeAssetId = "7669";
        GameObjPool.asyncSpawn(cubeAssetId, GameObjPoolSourceType.Asset).then(obj => {
            obj.worldLocation = new Vector(0, 0, 0);
            setTimeout(() => {
                //5秒后回收该方块
                GameObjPool.despawn(obj);
            }, 5000);
        });
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`GameObject`](mw.GameObject.md) |  要归还的对象 |


___

### spawn <Score text="spawn" /> 

• `Static` **spawn**<`T`\>(`guid`, `type?`): `T` 

生成一个对象

::: warning Precautions

注意如果是资源库中的资源，需要把原始资源预加载

:::


使用示例:创建一个名为GameObjPoolExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在原点生成一个方块
```ts
@Core.Class
export default class GameObjPoolExample extends Script {

    protected onStart(): void {
        this.createCube();
    }

    //通过对象池动态创建一个方块
    public createCube(): void {
        const cubeAssetId = "7669";
        AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
            let obj = GameObjPool.getInstance().spawn(cubeAssetId);
            obj.worldLocation = new Vector(0, 0, 0);
        });
    }
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](mw.GameObject.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  资源GUID |
| `type?` | [`GameObjPoolSourceType`](../enums/mw.GameObjPoolSourceType.md) |  资源类型 default: 资源库中的资源 |

#### Returns

`T`

生成的对象
