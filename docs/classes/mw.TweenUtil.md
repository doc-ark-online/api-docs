[UTILITY](../groups/Core.UTILITY.md) / TweenUtil

# TweenUtil <Badge type="tip" text="Class" /> <Score text="TweenUtil" />

<span class="content-big">

补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。

</span>
你只需告诉它哪些属性要更改，当补间结束运行时它们应该具有哪些最终值，以及这需要多长时间，
补间引擎将负责计算从起始点到结束点的值。

<span style="font-size: 14px;">

使用示例: 创建一个名为TweenExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下G键，会在场景中随机生成一个导弹并按照设定轨迹飞往目的地。

</span>

```ts
@Component
export default class TweenExample extends Script {

    protected async onStart(): Promise<void> {
        this.useUpdate = true;
        if (SystemUtil.isClient()) {
            let char = (await Player.asyncGetLocalPlayer()).character;
            InputUtil.onKeyDown(Keys.G, async () => {
                let daoDan = new DaoDanScript(char.worldTransform.position, new Vector(Math.random() * 1000, Math.random() * 1000, 0));
            })
        }
    }

    protected onUpdate(dt: number): void {
        TweenUtil.TWEEN.update();
    }

}

class DaoDanScript {

    //导弹预制体
    private prefab: GameObject

    //构造函数，new的时候传入一个位置来进行初始化
    constructor(bornPos: Vector, toPos: Vector) {
        this.init(bornPos, toPos)
    }

    //初始化DaoDan
    private async init(bornPos: Vector, toPos: Vector) {
        // 使用对象池来创建预制体，并设置预制体的位置
        const bombAssetId = "44948";
        const fireAssetId = "13404";
        const cubeAssetId = "197386";
        this.prefab = await GameObjPool.asyncSpawn(cubeAssetId, GameObjPoolSourceType.Asset);
        this.prefab.setVisibility(PropertyStatus.Off, false);
        GameObject.asyncSpawn({ guid: bombAssetId }).then(obj => {
            obj.attachToGameObject(this.prefab);
            obj.localTransform.position = new Vector(0, 0, 0);
            obj.localTransform.rotation = new Rotation(0, -90, 0);
        })
        EffectService.playOnGameObject(fireAssetId, this.prefab, {position:new Vector(0, 0, 0), rotation:new Rotation(0, -90, 0), scale: new Vector(2, 2, 2)});
        this.prefab.worldTransform.position = bornPos;
        this.fireToPos(toPos);
    }

    //导弹飞向一个坐标
    private async fireToPos(targetPos: Vector) {
        // 先播放起飞动画
        this.fireReadyAnim()

        // 在目标位置创建一个特效（预警特效）
        EffectService.playAtPosition("155714", targetPos, {loopCount:1});

        // 将起点坐标解构（方便Tween进行过渡）
        let startLoc = { x: this.prefab.worldTransform.position.x, y: this.prefab.worldTransform.position.y, z: this.prefab.worldTransform.position.z }
        // 将目标点坐标解构（方便Tween进行过渡）
        let targetLoc = { x: targetPos.x, y: targetPos.y, z: targetPos.z }

        // 上一帧位置
        let lastPos: Vector = this.prefab.worldTransform.position.clone()
        // 当前帧位置
        let nowPos: Vector = Vector.zero
        // 中间商位置（避免频繁去new Vector）
        let tempPos: Vector = Vector.zero

        // 创建起点为导弹位置的一个Tween
        const newTween = new TweenUtil.Tween(this.prefab.worldTransform.position.clone())

        newTween.to({
            // X轴飞行路径（这些路径点可以自由定义）
            x: [
                startLoc.x + 1000 + Math.random() * 2000,
                startLoc.x + 3000 + Math.random() * 2000,
                startLoc.x + 5000 + Math.random() * 2000,
                targetLoc.x],

            // Y轴飞行路径（这些路径点可以自由定义）
            y: [
                startLoc.y + 1000 + Math.random() * 2000,
                startLoc.y + 3000 + Math.random() * 2000,
                startLoc.y + 5000 + Math.random() * 2000,
                targetLoc.y],

            // Z轴飞行路径（这些路径点可以自由定义）
            z: [
                550 + Math.random() * 1000,
                750 + Math.random() * 1000,
                950 + Math.random() * 1000,
                750 + Math.random() * 1000,
                550 + Math.random() * 1000,
                targetLoc.z]
        // 整个过程持续3000毫秒
        }, 3000)

            //Linear插值：完全线性，拐弯没有过渡，直来直去;
Bezier插值：全程平滑，整个过程都被平滑成一条曲线;
CatmullRom插值：拐弯平滑，只在拐弯处进行平滑
            // 使用CatmullRom插值
            .interpolation(TweenUtil.Interpolation.CatmullRom)
            .onUpdate((value) => {
                // 每次循环，将value（过渡值）赋值给tempPos和nowPos用于运算
                tempPos.set(value.x, value.y, value.z)
                nowPos.set(value.x, value.y, value.z)
                // 将火箭的坐标设置为过渡值
                this.prefab.worldTransform.position = tempPos
                // 根据上一帧位置和这一帧位置，计算火箭的实时朝向
                this.prefab.worldRotation = nowPos.subtract(lastPos).toRotation()
                // 将此帧值赋值给lastPos，用于下一次运算
                lastPos.set(value.x, value.y, value.z)
            })

        // 当Tween播放完毕时
        newTween.onComplete(() => {
            const bombEffectId = "7786";
            // 在结束位置播放一个爆炸特效
            EffectService.playEffectAtLocation(bombEffectId, this.prefab.worldTransform.position, 1)
            // 重置火箭的旋转
            this.prefab.worldTransform.rotation = Rotation.zero
            // 将火箭归还给预制体
            GameObjPool.despawn(this.prefab)
        })

        // 等一秒钟再开始播放（是为了等起飞动画播放完）
        setTimeout(() => {
            newTween.start()
        }, 1000);
    }

    //起飞阶段动画
    private fireReadyAnim() {
        let tempRotate: Rotation = Rotation.zero
        let startPos: Vector = this.prefab.worldTransform.position.clone()

        let tweenA = new TweenUtil.Tween({ y: 0 }).to({ y: 60 + Math.random() * 30 }, 1000).onUpdate((value) => {
            tempRotate.y = value.y
            this.prefab.worldTransform.rotation = tempRotate
        }).start().easing(TweenUtil.Easing.Cubic.Out)

        let tweenB = new TweenUtil.Tween(startPos).to(startPos.clone().add(new mw.Vector(0, 0, Math.random() * 100)), 1000).onUpdate((value) => {
            this.prefab.worldTransform.position = value
        }).start().easing(TweenUtil.Easing.Cubic.Out)
    }
}
```

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new TweenUtil**()  |
| :----- |

### Properties <Score text="Properties" /> 
| **[TWEEN](mw.TweenUtil.md#tween)**: [`TweenGroup`](mw.TweenGroup.md)  |
| :-----|
| 全局补间组单例。在创建补间时，如不特别指定，默认添加到该补间组|
| **[nextId](mw.TweenUtil.md#nextid)**: () => `number`  |
| 获取下一个ID的全局方法|

## Properties

### TWEEN <Score text="TWEEN" /> 

▪ `Static` **TWEEN**: [`TweenGroup`](mw.TweenGroup.md)

全局补间组单例。在创建补间时，如不特别指定，默认添加到该补间组

___

### nextId <Score text="nextId" /> 

▪ `Static` **nextId**: () => `number` <Badge type="tip" text="other" />

#### Type declaration

• (): `number`

获取下一个ID的全局方法


##### Returns

`number`

下一个ID
