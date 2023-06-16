[Settings](../groups/Core.Settings.md) / AvatarSettings

# AvatarSettings <Badge type="tip" text="Class" /> <Score text="AvatarSettings" />

控制一些优化项的开启关闭

使用示例:创建一个名为"ClassExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，你将在服务器Log中看到对应方法调用信息。代码如下：
```ts
@Core.Class
export default class ClassExample extends Script {

    protected onStart(): void {
       this.RoomSettings();
    }

    public RoomSettings(){
       AvatarSettings.enableOptimization(true);
       let opt = AvatarSettings.isOptimizationEnabled();
       console.log("角色优化是否开启：" + opt);
    }
}
```

## Table of contents

| Methods |
| :-----|
| **[enableOptimization](mw.AvatarSettings.md#enableoptimization)**(`isEnable`: `boolean`): `void` <br> 开启或关闭角色优化(角色裁剪、动画更新率降低等)|
| **[isOptimizationEnabled](mw.AvatarSettings.md#isoptimizationenabled)**(): `boolean` <br> 获取角色优化(角色裁剪、动画更新率降低等)|

## Methods

### enableOptimization <Score text="enableOptimization" /> 

• `Static` **enableOptimization**(`isEnable`): `void` <Badge type="tip" text="client" />

开启或关闭角色优化(角色裁剪、动画更新率降低等)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnable` | `boolean` | 是否开启或关闭角色优化 |


___

### isOptimizationEnabled <Score text="isOptimizationEnabled" /> 

• `Static` **isOptimizationEnabled**(): `boolean` <Badge type="tip" text="client" />

获取角色优化(角色裁剪、动画更新率降低等)


#### Returns

`boolean`

boolean:角色优化是否开启,如果返回值为undefined，请检查是否在客户端调用
