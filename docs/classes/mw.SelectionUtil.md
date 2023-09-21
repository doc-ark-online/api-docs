[UTILITY](../groups/Core.UTILITY.md) / SelectionUtil

# SelectionUtil <Badge type="tip" text="Class" /> <Score text="SelectionUtil" />

<p class="content-big"> 描边绘制工具 </p>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new SelectionUtil**()  |
| :----- |

### Methods <Score text="Methods" /> 
| **[drawGameObjectSelectionBox](mw.SelectionUtil.md#drawgameobjectselectionbox)**(`StartPoint`: [`Vector2`](mw.Vector2.md), `EndPoint`: [`Vector2`](mw.Vector2.md), `Color`: [`LinearColor`](mw.LinearColor.md), `DurationTime?`: `number`): `void`  |
| :-----|
| 绘制物体选择框|
| **[getGameObjectBySelectionBox](mw.SelectionUtil.md#getgameobjectbyselectionbox)**(`StartPoint`: [`Vector2`](mw.Vector2.md), `EndPoint`: [`Vector2`](mw.Vector2.md), `IsIncludeNonCollidingObjects?`: `boolean`, `IsUseObjectsBoundingBox?`: `boolean`): [`HitResult`](mw.HitResult.md)[]  |
| 获取框选屏幕位置的物体|
| **[setGlobalOutlineParams](mw.SelectionUtil.md#setglobaloutlineparams)**(`Width?`: `number`, `CoveredAlpha?`: `number`, `CoveredEdgeAlpha?`: `number`, `NotCoveredAlpha?`: `number`, `NotCoveredEdgeAlpha?`: `number`): `void`  |
| 设置全局描边参数|

## Methods

### drawGameObjectSelectionBox <Score text="drawGameObjectSelectionBox" /> 

• `Static` **drawGameObjectSelectionBox**(`StartPoint`, `EndPoint`, `Color`, `DurationTime?`): `void` <Badge type="tip" text="client" />

绘制物体选择框

#### Parameters

| `StartPoint` [`Vector2`](mw.Vector2.md) | 鼠标开始位置 |
| :------ | :------ |
| `EndPoint` [`Vector2`](mw.Vector2.md) | 鼠标结束位置 |
| `Color` [`LinearColor`](mw.LinearColor.md) | 选择框颜色 |
| `DurationTime?` `number` | 显示时间 default:0.1 |



<p style="font-size: 14px;"> 使用示例:创建一个名为SelectionExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，鼠标左键框选物体，会绘制出选择框 </p>

```ts
@Component
export default class SelectionExample extends Script {

    touchIndexesStart: Map<number, Vector2> = new Map<number, Vector2>();
    selectedGoes: Array<HitResult> = [];
    touch: TouchInput;

    async onStart() {
        this.touch = new TouchInput();
        await Player.asyncGetLocalPlayer();
        this.touch.onTouch.add((index, location, type) => {
            console.log("ontouch", index, location, type);
            if (type == TouchInputType.TouchBegin) {
                this.onTouchBegin(index, location);
            }
            else if (type == TouchInputType.TouchMove) {
                this.onTouchMove(index, location);
            }
        })
        this.touch.setPlayerController();
    }

    // 开始触摸屏幕，记录初始位置
    onTouchBegin(index: number, location: Vector2) {
        this.touchIndexesStart.set(index, location);
    }

    // 触摸移动, 绘制选择框
    onTouchMove(index: number, location: Vector2) {
        let start = this.touchIndexesStart.get(index);
        if (!start) { return;
}
        SelectionUtil.drawGameObjectSelectionBox(start, location, LinearColor.red, 0.03);
    }
}
```

___

### getGameObjectBySelectionBox <Score text="getGameObjectBySelectionBox" /> 

• `Static` **getGameObjectBySelectionBox**(`StartPoint`, `EndPoint`, `IsIncludeNonCollidingObjects?`, `IsUseObjectsBoundingBox?`): [`HitResult`](mw.HitResult.md)[] <Badge type="tip" text="client" />

获取框选屏幕位置的物体

#### Parameters

| `StartPoint` [`Vector2`](mw.Vector2.md) | 鼠标开始位置 |
| :------ | :------ |
| `EndPoint` [`Vector2`](mw.Vector2.md) | 鼠标结束位置 |
| `IsIncludeNonCollidingObjects?` `boolean` | 是否包含物体非碰撞组件 default:false |
| `IsUseObjectsBoundingBox?` `boolean` | 是否使用物体包围盒 default:false |

#### Returns

| [`HitResult`](mw.HitResult.md)[] | 框选的物体 |
| :------ | :------ |


<p style="font-size: 14px;"> 使用示例:创建一个名为SelectionExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，鼠标左键框选物体，会将框选的物体描边 </p>

```ts
@Component
export default class SelectionExample extends Script {

    touchIndexesStart: Map<number, Vector2> = new Map<number, Vector2>();
    selectedGoes: Array<HitResult> = [];
    touch: TouchInput;

    async onStart() {
        this.creatObjs();
        this.touch = new TouchInput();
        await Player.asyncGetLocalPlayer();
        this.touch.onTouch.add((index, location, type) => {
            console.log("ontouch", index, location, type);
            if (type == TouchInputType.TouchBegin) {
                this.onTouchBegin(index, location);
            } else if (type == TouchInputType.TouchMove) {
                this.onTouchMove(index, location);
            } else if (type == TouchInputType.TouchEnd) {
                this.onTouchEnd(index, location);
            }
        })
        this.touch.setPlayerController();
    }

    //在场景中随机生成一些物体，用于框选
    private creatObjs() {
        const cubeAssetId = "197386";
        for (let i = 0;
i < 50;
i++) {
            GameObject.asyncSpawn({ guid: cubeAssetId }).then(obj => {
                obj.worldLocation = new Vector(MathUtil.randomInt(-500, 500), MathUtil.randomInt(-500, 500), MathUtil.randomInt(-500, 500));
            })
        }
    }

    // 开始触摸屏幕，记录初始位置
    private onTouchBegin(index: number, location: Vector2) {
        this.touchIndexesStart.set(index, location);
    }

    // 触摸移动, 绘制选择框
    private onTouchMove(index: number, location: Vector2) {
        let start = this.touchIndexesStart.get(index);
        if (!start) { return;
}
        SelectionUtil.drawGameObjectSelectionBox(start, location, LinearColor.red, 0.03);
    }

    // 触摸结束，框选对象
    private onTouchEnd(index: number, location: Vector2) {
        let start = this.touchIndexesStart.get(index);
        if (!start) { return;
}
        // 取消上一次框选对象的描边
        this.selectedGoes.forEach(result => {
            let mesh = result.gameObject as Mesh;
            mesh.setOutlineAndColor(false, 1);
        })
        // 框选对象
        this.selectedGoes = SelectionUtil.getGameObjectBySelectionBox(start, location, false, false).filter(result => (result.gameObject instanceof StaticMesh));
        // 未框选对象添加描边
        this.selectedGoes.forEach(result => {
            let mesh = result.gameObject as Mesh;
            mesh.setOutlineAndColor(true, 1);
            //addOutlineEffect(result.gameObject, mw.LinearColor.red, 1, 0, 1, false, false);
        })
        SelectionUtil.setGlobalOutlineParams(4, 0, 0, 0, 1);
    }

}
```

___

### setGlobalOutlineParams <Score text="setGlobalOutlineParams" /> 

• `Static` **setGlobalOutlineParams**(`Width?`, `CoveredAlpha?`, `CoveredEdgeAlpha?`, `NotCoveredAlpha?`, `NotCoveredEdgeAlpha?`): `void` <Badge type="tip" text="client" />

设置全局描边参数

#### Parameters

| `Width?` `number` | 描边宽度（0 ~ 4） default:2 |
| :------ | :------ |
| `CoveredAlpha?` `number` | 被遮挡部分高亮透明度（0 ~ 1） default:0 |
| `CoveredEdgeAlpha?` `number` | 被遮挡部分描边透明度（0 ~ 1） default:1 |
| `NotCoveredAlpha?` `number` | 未被遮挡部分高亮透明度（0 ~ 1） default:0 |
| `NotCoveredEdgeAlpha?` `number` | 未被遮挡部分描边透明度（0 ~ 1） default:1 |


