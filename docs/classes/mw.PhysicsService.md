[UTILITY](../groups/UTILITY.UTILITY.md) / PhysicsService

# PhysicsService <Badge type="tip" text="Class" /> <Score text="PhysicsService" />

碰撞组

## Table of contents

### Methods <Score text="Methods" /> 
| **[addCollisionGroup](mw.PhysicsService.md#addcollisiongroup)**(`name`: `string`): `void`   |
| :-----|
| 添加新碰撞组|
| **[deleteCollisionGroup](mw.PhysicsService.md#deletecollisiongroup)**(`name`: `string`): `void`   |
| 删除已有碰撞组|
| **[getAvailableCollisionGroupsCount](mw.PhysicsService.md#getavailablecollisiongroupscount)**(): `number`   |
| 获取当前可剩余使用碰撞组数量|
| **[getCollisionBetweenGroups](mw.PhysicsService.md#getcollisionbetweengroups)**(`group1`: `string`, `group2`: `string`): `boolean`   |
| 获取两碰撞组之间的碰撞关系(是否可发生碰撞)|
| **[getValidCollisionGroups](mw.PhysicsService.md#getvalidcollisiongroups)**(): `string`[]   |
| 获取当前已添加的碰撞组名列表|
| **[isCollisionGroupValid](mw.PhysicsService.md#iscollisiongroupvalid)**(`name`: `string`): `boolean`   |
| 检测碰撞组是否有效(已添加过)|
| **[renameCollisionGroup](mw.PhysicsService.md#renamecollisiongroup)**(`previousName`: `string`, `newName`: `string`): `void`   |
| 重命名碰撞组|
| **[setCollisionBetweenGroups](mw.PhysicsService.md#setcollisionbetweengroups)**(`group1`: `string`, `group2`: `string`, `collidable`: `boolean`): `void`   |
| 设置俩碰撞组之间的碰撞关系(是否可发生碰撞)|

## Methods

### addCollisionGroup <Score text="addCollisionGroup" /> 

• `Static` **addCollisionGroup**(`name`): `void` 

添加新碰撞组

#### Parameters

| `name` `string` | 碰撞组名 range: 不限制 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:在场景中创建一个名为 CollisionGroup 的脚本，并拖入场景中，并复制以下代码进入脚本。按下 1 后可在编辑器窗口客户端内看到输出 "GroupA,GroupB,GroupC"
</span>

```ts
@Component
export default class CollisionGroup extends Script {

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        PhysicsService.addCollisionGroup("GroupA");
        PhysicsService.addCollisionGroup("GroupB");
        PhysicsService.setCollisionBetweenGroups("GroupA", "GroupB", false);

        // 创建模拟物理的球体A并设置碰撞组为GroupA
        InputUtil.onKeyDown(Keys.One, ()=>{
            PhysicsService.addCollisionGroup("GroupC");
            console.log(PhysicsService.getValidCollisionGroups());
        })
    }
}
```

___

### deleteCollisionGroup <Score text="deleteCollisionGroup" /> 

• `Static` **deleteCollisionGroup**(`name`): `void` 

删除已有碰撞组

#### Parameters

| `name` `string` | 碰撞组名 range: 不限制 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:在场景中创建一个名为 CollisionGroup 的脚本，并拖入场景中，并复制以下代码进入脚本。按下 1 后可在编辑器窗口客户端内看到输出"GroupB"
</span>

```ts
@Component
export default class CollisionGroup extends Script {

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        PhysicsService.addCollisionGroup("GroupA");
        PhysicsService.addCollisionGroup("GroupB");
        PhysicsService.setCollisionBetweenGroups("GroupA", "GroupB", false);

        // 创建模拟物理的球体A并设置碰撞组为GroupA
        InputUtil.onKeyDown(Keys.One, ()=>{
            PhysicsService.deleteCollisionGroup("GroupA");
            console.log(PhysicsService.getValidCollisionGroups());
        })
    }

    protected onUpdate(dt: number): void {

    }

    // 脚本被销毁时最后一帧执行完调用此函数
    protected onDestroy(): void {

    }
}
```

___

### getAvailableCollisionGroupsCount <Score text="getAvailableCollisionGroupsCount" /> 

• `Static` **getAvailableCollisionGroupsCount**(): `number` 

获取当前可剩余使用碰撞组数量

#### Returns

| `number` | 剩余可用碰撞组数量 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 在场景中创建一个名为 CollisionGroup 的脚本，并拖入场景中，并复制以下代码进入脚本。按下 1 后可在编辑器窗口客户端内看到输出 "8"
</span>

```ts
@Component
export default class CollisionGroup extends Script {

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        PhysicsService.addCollisionGroup("GroupA");
        PhysicsService.addCollisionGroup("GroupB");
        PhysicsService.setCollisionBetweenGroups("GroupA", "GroupB", false);

        // 创建模拟物理的球体A并设置碰撞组为GroupA
        InputUtil.onKeyDown(Keys.One, ()=>{
            console.log(PhysicsService.getAvailableCollisionGroupsCount());
        })
    }
}
```

___

### getCollisionBetweenGroups <Score text="getCollisionBetweenGroups" /> 

• `Static` **getCollisionBetweenGroups**(`group1`, `group2`): `boolean` 

获取两碰撞组之间的碰撞关系(是否可发生碰撞)

#### Parameters

| `group1` `string` | 碰撞组名 1 range: 不限制 |
| :------ | :------ |
| `group2` `string` | 碰撞组名 2 range: 不限制 |

#### Returns

| `boolean` | 碰撞关系(是否可发生碰撞) |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 在场景中创建一个名为 CollisionGroup 的脚本，并拖入场景中，并复制以下代码进入脚本。按下 1 后可在编辑器窗口客户端内看到输出 "false"
</span>

```ts
@Component
export default class CollisionGroup extends Script {

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        PhysicsService.addCollisionGroup("GroupA");
        PhysicsService.addCollisionGroup("GroupB");
        PhysicsService.setCollisionBetweenGroups("GroupA", "GroupB", false);

        // 创建模拟物理的球体A并设置碰撞组为GroupA
        InputUtil.onKeyDown(Keys.One, ()=>{
            console.log(PhysicsService.getCollisionBetweenGroups("GroupA", "GroupB"));
        })
    }
}
```

___

### getValidCollisionGroups <Score text="getValidCollisionGroups" /> 

• `Static` **getValidCollisionGroups**(): `string`[] 

获取当前已添加的碰撞组名列表

#### Returns

| `string`[] | 当前已添加的碰撞组名列表 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 在场景中创建一个名为 CollisionGroup 的脚本，并拖入场景中，并复制以下代码进入脚本。按下1后可在编辑器窗口客户端内看到输出 "GroupA,GroupB"
</span>

```ts
@Component
export default class CollisionGroup extends Script {

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        PhysicsService.addCollisionGroup("GroupA");
        PhysicsService.addCollisionGroup("GroupB");
        PhysicsService.setCollisionBetweenGroups("GroupA", "GroupB", false);

        // 创建模拟物理的球体A并设置碰撞组为GroupA
        InputUtil.onKeyDown(Keys.One, ()=>{
            console.log(PhysicsService.getValidCollisionGroups());
        })
    }
}
```

___

### isCollisionGroupValid <Score text="isCollisionGroupValid" /> 

• `Static` **isCollisionGroupValid**(`name`): `boolean` 

检测碰撞组是否有效(已添加过)

#### Parameters

| `name` `string` | 碰撞组名 range: 不限制 |
| :------ | :------ |

#### Returns

| `boolean` | 碰撞组是否有效 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:在场景中创建一个名为 CollisionGroup 的脚本，并拖入场景中，并复制以下代码进入脚本。按下 1 后可在编辑器窗口客户端内看到输出 "false"
</span>

```ts
@Component
export default class CollisionGroup extends Script {

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        PhysicsService.addCollisionGroup("GroupA");
        PhysicsService.addCollisionGroup("GroupB");
        PhysicsService.setCollisionBetweenGroups("GroupA", "GroupB", false);

        // 创建模拟物理的球体A并设置碰撞组为GroupA
        InputUtil.onKeyDown(Keys.One, ()=>{
            console.log(PhysicsService.isCollisionGroupValid("GroupC"));
        })
    }
}
```

___

### renameCollisionGroup <Score text="renameCollisionGroup" /> 

• `Static` **renameCollisionGroup**(`previousName`, `newName`): `void` 

重命名碰撞组

#### Parameters

| `previousName` `string` | 碰撞组名 range: 不限制 |
| :------ | :------ |
| `newName` `string` | 新碰撞组名 range: 不限制 |


<span style="font-size: 14px;">
使用示例:在场景中创建一个名为CollisionGroup的脚本，并拖入场景中，并复制以下代码进入脚本。按下1后可在编辑器窗口客户端内看到输出"GroupB,GroupC"
</span>

```ts
@Component
export default class CollisionGroup extends Script {

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        PhysicsService.addCollisionGroup("GroupA");
        PhysicsService.addCollisionGroup("GroupB");
        PhysicsService.setCollisionBetweenGroups("GroupA", "GroupB", false);

        // 创建模拟物理的球体A并设置碰撞组为GroupA
        InputUtil.onKeyDown(Keys.One, ()=>{
            PhysicsService.renameCollisionGroup("GroupA","GroupC");
            console.log(PhysicsService.getValidCollisionGroups());
        })
    }

    protected onUpdate(dt: number): void {

    }

    // 脚本被销毁时最后一帧执行完调用此函数
    protected onDestroy(): void {

    }
}
```

___

### setCollisionBetweenGroups <Score text="setCollisionBetweenGroups" /> 

• `Static` **setCollisionBetweenGroups**(`group1`, `group2`, `collidable`): `void` 

设置俩碰撞组之间的碰撞关系(是否可发生碰撞)

#### Parameters

| `group1` `string` | 碰撞组名1 range: 不限制 |
| :------ | :------ |
| `group2` `string` | 碰撞组名2 range: 不限制 |
| `collidable` `boolean` | 是否可碰撞 |


<span style="font-size: 14px;">
使用示例: 在场景中创建一个名为CollisionGroup的脚本，并拖入场景中，并复制以下代码进入脚本。按下1和2会看到场景中生成了两个小球，并推动距离最近的小球去撞击另一个，会发现玩家可以与球体发生碰撞，但两个小球间可穿透。
</span>

```ts
@Component
export default class CollisionGroup extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        PhysicsService.addCollisionGroup("GroupA");
        PhysicsService.addCollisionGroup("GroupB");
        PhysicsService.setCollisionBetweenGroups("GroupA", "GroupB", false);

        // 创建模拟物理的球体A并设置碰撞组为GroupA
        InputUtil.onKeyDown(Keys.One, ()=>{
            this.serverCreateBall(new Vector(300, 0, 0), "GroupA", true);
        })

        // 创建正常碰撞的球体B并设置碰撞组为GroupB
        InputUtil.onKeyDown(Keys.Two, ()=>{
            this.serverCreateBall(new Vector(600, 0, 0), "GroupB", false);
        })
    }

    @mw.RemoteFunction(mw.Server)
    serverCreateBall(pos:Vector, Group:string, bPhysicsSimulate:boolean)
    {
        GameObject.asyncSpawn("197388", {replicates:true}).then((obj)=>{
            let ball  = obj as mw.Model;
            ball.worldTransform.position = pos;
            if (bPhysicsSimulate)
            {
                ball.physicsEnabled = true;
                ball.massEnabled = true;
                ball.mass = 50;
            }
            ball.collisionGroup = Group;
        })
    }
}
```
