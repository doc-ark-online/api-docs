[Util](Util.Util.md) / SelectionUtil

# SelectionUtil <Badge type="tip" text="Namespace" /> <Score text="SelectionUtil" />

## Table of contents

| Functions |
| :-----|
| **[drawGameObjectSelectionBox](Util.SelectionUtil.md#drawgameobjectselectionbox)**(`StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `EndPoint`: [`Vector2`](../classes/Type.Vector2.md), `Color`: [`LinearColor`](../classes/Type.LinearColor.md), `DurationTime?`: `number`): `void` <br> 绘制物体选择框|
| **[getGameObjectBySelectionBox](Util.SelectionUtil.md#getgameobjectbyselectionbox)**(`StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `EndPoint`: [`Vector2`](../classes/Type.Vector2.md), `IsIncludeNonCollidingObjects?`: `boolean`, `IsUseObjectsBoundingBox?`: `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 获取框选屏幕位置的物体|
| **[setGlobalOutlineParams](Util.SelectionUtil.md#setglobaloutlineparams)**(`Width?`: `number`, `CoveredAlpha?`: `number`, `CoveredEdgeAlpha?`: `number`, `NotCoveredAlpha?`: `number`, `NotCoveredEdgeAlpha?`: `number`): `void` <br> 设置全局描边参数|

## Functions

### drawGameObjectSelectionBox <Score text="drawGameObjectSelectionBox" /> 

• **drawGameObjectSelectionBox**(`StartPoint`, `EndPoint`, `Color`, `DurationTime?`): `void` <Badge type="tip" text="client" />

绘制物体选择框


使用示例:创建一个名为SelectionExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，鼠标左键框选物体，会绘制出选择框
```ts
@Core.Class
export default class SelectionExample extends Core.Script {

    touchIndexesStart: Map<number, Vector2> = new Map<number, Vector2>();
    selectedGoes: Array<Gameplay.HitResult> = [];
    touch: Gameplay.TouchInput;

    async onStart() {
        this.touch = new Gameplay.TouchInput();
        await Gameplay.asyncGetCurrentPlayer();
        this.touch.onTouch.add((index, location, type) => {
            console.log("ontouch", index, location, type);
            if (type == Gameplay.TouchInputType.TouchBegin) {
                this.onTouchBegin(index, location);
            }
            else if (type == Gameplay.TouchInputType.TouchMove) {
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
        SelectionUtil.drawGameObjectSelectionBox(start, location, Type.LinearColor.red, 0.03);
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标开始位置 |
| `EndPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标结束位置 |
| `Color` | [`LinearColor`](../classes/Type.LinearColor.md) | 选择框颜色 |
| `DurationTime?` | `number` | 显示时间 default:0.1 |


___

### getGameObjectBySelectionBox <Score text="getGameObjectBySelectionBox" /> 

• **getGameObjectBySelectionBox**(`StartPoint`, `EndPoint`, `IsIncludeNonCollidingObjects?`, `IsUseObjectsBoundingBox?`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <Badge type="tip" text="client" />

获取框选屏幕位置的物体


使用示例:创建一个名为SelectionExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，鼠标左键框选物体，会将框选的物体描边
```ts
@Core.Class
export default class SelectionExample extends Core.Script {

    touchIndexesStart: Map<number, Vector2> = new Map<number, Vector2>();
    selectedGoes: Array<Gameplay.HitResult> = [];
    touch: Gameplay.TouchInput;

    async onStart() {
        this.creatObjs();
        this.touch = new Gameplay.TouchInput();
        await Gameplay.asyncGetCurrentPlayer();
        this.touch.onTouch.add((index, location, type) => {
            console.log("ontouch", index, location, type);
            if (type == Gameplay.TouchInputType.TouchBegin) {
                this.onTouchBegin(index, location);
            } else if (type == Gameplay.TouchInputType.TouchMove) {
                this.onTouchMove(index, location);
            } else if (type == Gameplay.TouchInputType.TouchEnd) {
                this.onTouchEnd(index, location);
            }
        })
        this.touch.setPlayerController();
    }

    //在场景中随机生成一些物体，用于框选
    private creatObjs() {
        const cubeAssetId = "7669";
        for (let i = 0;
i < 50;
i++) {
            Core.GameObject.asyncSpawn({ guid: cubeAssetId }).then(obj => {
                obj.worldLocation = new Type.Vector(MathUtil.randomInt(-500, 500), MathUtil.randomInt(-500, 500), MathUtil.randomInt(-500, 500));
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
        SelectionUtil.drawGameObjectSelectionBox(start, location, Type.LinearColor.red, 0.03);
    }

    // 触摸结束，框选对象
    private onTouchEnd(index: number, location: Vector2) {
        let start = this.touchIndexesStart.get(index);
        if (!start) { return;
}
        // 取消上一次框选对象的描边
        this.selectedGoes.forEach(result => {
            let mesh = result.gameObject as Gameplay.Mesh;
            mesh.setOutlineAndColor(false, 1);
        })
        // 框选对象
        this.selectedGoes = SelectionUtil.getGameObjectBySelectionBox(start, location, false, false).filter(result => (result.gameObject instanceof Gameplay.StaticMesh));
        // 未框选对象添加描边
        this.selectedGoes.forEach(result => {
            let mesh = result.gameObject as Gameplay.Mesh;
            mesh.setOutlineAndColor(true, 1);
            //Gameplay.addOutlineEffect(result.gameObject, Type.LinearColor.red, 1, 0, 1, false, false);
        })
        SelectionUtil.setGlobalOutlineParams(4, 0, 0, 0, 1);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标开始位置 |
| `EndPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标结束位置 |
| `IsIncludeNonCollidingObjects?` | `boolean` | 是否包含物体非碰撞组件 default:false |
| `IsUseObjectsBoundingBox?` | `boolean` | 是否使用物体包围盒 default:false |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)[]

框选的物体

___

### setGlobalOutlineParams <Score text="setGlobalOutlineParams" /> 

• **setGlobalOutlineParams**(`Width?`, `CoveredAlpha?`, `CoveredEdgeAlpha?`, `NotCoveredAlpha?`, `NotCoveredEdgeAlpha?`): `void` <Badge type="tip" text="client" />

设置全局描边参数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Width?` | `number` | 描边宽度（0 ~ 4） default:2 |
| `CoveredAlpha?` | `number` | 被遮挡部分高亮透明度（0 ~ 1） default:0 |
| `CoveredEdgeAlpha?` | `number` | 被遮挡部分描边透明度（0 ~ 1） default:1 |
| `NotCoveredAlpha?` | `number` | 未被遮挡部分高亮透明度（0 ~ 1） default:0 |
| `NotCoveredEdgeAlpha?` | `number` | 未被遮挡部分描边透明度（0 ~ 1） default:1 |

