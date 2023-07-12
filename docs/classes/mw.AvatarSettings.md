[SETTINGS](../groups/Core.SETTINGS.md) / AvatarSettings

# AvatarSettings <Badge type="tip" text="Class" /> <Score text="AvatarSettings" />

控制一些优化项的开启关闭

使用示例:创建一个名为"ClassExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，你将在服务器Log中看到对应方法调用信息。代码如下：
```ts
@Class
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

## Methods