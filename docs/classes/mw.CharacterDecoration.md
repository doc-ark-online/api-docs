[AVATAR](../groups/Core.AVATAR.md) / CharacterDecoration

# CharacterDecoration <Badge type="tip" text="Class" /> <Score text="CharacterDecoration" />

<p class="content-big"> 角色挂件插槽 </p>

<p class="content-big"> 除了可以随意的更换人物衣服，脸，身体，还可以在给人物增加更多装饰物。 </p>

<p class="content-big"> CharacterDecoration 如何使用呢？ </p>

<p class="content-big"> CharacterDescription 在 slotAndDecoration 中定义了一个名为 slot 的只读属性，其类型为 ArrayLike，表示一个类数组对象。数组的每个元素是一个对象类型，该对象具有以下属性： </p>

<p class="content-big"> · slotOffset：一个可选的只读属性，表示插槽位置和方向的信息。 </p>

<p class="content-big"> · decoration：一个可选的只读属性，表示物品的信息。是一个 CharacterDecoration 自定义类型，包含有关物品的附加装饰信息。 </p>

<p class="content-big"> 可以通过索引访问，添加左侧栏中已有资源的装饰物，如武器戒指光环等。如何使用详情请看下方接口及示例代码。 </p>

## Hierarchy

- `Array`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`\>

  ↳ **`CharacterDecoration`**

## Table of contents

### Constructors <Score text="Constructors" /> 

### Properties <Score text="Properties" /> 

### Methods <Score text="Methods" /> 
| [[iterator]](mw.CharacterDecoration.md#[iterator]) |
| [[unscopables]](mw.CharacterDecoration.md#[unscopables]) |
| **[add](mw.CharacterDecoration.md#add)**(`decoration`: `string` \, `attachmentOffset?`: [`Transform`](mw.Transform.md)): `void`  |
| 向当前外观插槽中添加一个挂件|
| **[at](mw.CharacterDecoration.md#at)**(`index`): `undefined` \| `{ `[at](mw.CharacterDecoration.md#at)tachmentAssetId`: `string` ; `[at](mw.CharacterDecoration.md#at)tachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `[at](mw.CharacterDecoration.md#at)tachmentOffset?`: [`Transform`](mw.Transform.md)  }` |
| **[clear](mw.CharacterDecoration.md#clear)**(`isDestroy?`: `boolean`): `void`  |
| 清空当前外观插槽的所有挂件|
| **[concat](mw.CharacterDecoration.md#concat)**(`...items`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`[] |
| **[copyWithin](mw.CharacterDecoration.md#copywithin)**(`target`, `start`, `end?`): [`CharacterDecoration`](mw.CharacterDecoration.md) |
| **[delete](mw.CharacterDecoration.md#delete)**(`attachmentGameObject`: [`GameObject`](mw.GameObject.md), `isDestroy?`: `boolean`): `void`  |
| 从当前插槽中删除一个挂件|
| **[entries](mw.CharacterDecoration.md#entries)**(): `IterableIterator`<[`number`, `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`]\> |
| **[every](mw.CharacterDecoration.md#every)**<`S`: extends `Object`\>(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `unknown`, `thisArg?`: `any`): this is S[] |
| **[fill](mw.CharacterDecoration.md#fill)**(`value`: `Object`, `start?`: `number`, `end?`: `number`): [`CharacterDecoration`](mw.CharacterDecoration.md) |
| **[filter](mw.CharacterDecoration.md#filter)**<`S`: extends `Object`\>(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `unknown`, `thisArg?`: `any`): `S`: extends `Object`[] |
| **[find](mw.CharacterDecoration.md#find)**<`S`: extends `Object`\>(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `index`: `number`, `obj`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `unknown`, `thisArg?`: `any`): `undefined` \| `S`: extends `Object` |
| **[findIndex](mw.CharacterDecoration.md#findindex)**(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `index`: `number`, `obj`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `unknown`, `thisArg?`: `any`): `number` |
| **[flat](mw.CharacterDecoration.md#flat)**<`A`: `A`, `D`: extends `number` = ``1``\>(`this`: `A`, `depth?`: `D`): `FlatArray`<`A`: `A`, `D`: extends `number` = ``1``\>[] |
| **[flatMap](mw.CharacterDecoration.md#flatmap)**<`U`: `U`, `This`: `undefined`\>(`callback`: (`this`: `This`, `value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `U` \, `thisArg?`: `This`): `U`: `U`[] |
| **[includes](mw.CharacterDecoration.md#includes)**(`searchElement`: `Object`, `fromIndex?`: `number`): `boolean` |
| **[indexOf](mw.CharacterDecoration.md#indexof)**(`searchElement`: `Object`, `fromIndex?`: `number`): `number` |
| **[join](mw.CharacterDecoration.md#join)**(`separator?`: `string`): `string` |
| **[keys](mw.CharacterDecoration.md#keys)**(): `IterableIterator`<`number`\> |
| **[lastIndexOf](mw.CharacterDecoration.md#lastindexof)**(`searchElement`: `Object`, `fromIndex?`: `number`): `number` |
| **[map](mw.CharacterDecoration.md#map)**<`U`: \>(`callbackfn`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `U`, `thisArg?`: `any`): `U`: [] |
| **[pop](mw.CharacterDecoration.md#pop)**(): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }` |
| **[push](mw.CharacterDecoration.md#push)**(`...items`: `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`[]): `number` |
| **[reduce](mw.CharacterDecoration.md#reduce)**(`callbackfn`: (`previousValue`: `U`: , `currentValue`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `currentIndex`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `U`: ): `Object` |
| **[reduceRight](mw.CharacterDecoration.md#reduceright)**(`callbackfn`: (`previousValue`: `U`: , `currentValue`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `currentIndex`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `U`: ): `Object` |
| **[reverse](mw.CharacterDecoration.md#reverse)**(): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`[] |
| **[shift](mw.CharacterDecoration.md#shift)**(): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }` |
| **[slice](mw.CharacterDecoration.md#slice)**(`start?`: `number`, `end?`: `number`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`[] |
| **[some](mw.CharacterDecoration.md#some)**(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``[]) => `unknown`, `thisArg?`: `any`): `boolean` |
| **[sort](mw.CharacterDecoration.md#sort)**(`compareFn?`: (`a`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``, `b`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }``) => `number`): [`CharacterDecoration`](mw.CharacterDecoration.md) |
| **[splice](mw.CharacterDecoration.md#splice)**(`start`: `number`, `deleteCount?`: `number`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`[] |
| **[toLocaleString](mw.CharacterDecoration.md#tolocalestring)**(): `string` |
| **[toString](mw.CharacterDecoration.md#tostring)**(): `string` |
| **[unshift](mw.CharacterDecoration.md#unshift)**(`...items`: `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`[]): `number` |
| **[values](mw.CharacterDecoration.md#values)**(): `IterableIterator`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`\> |
| **[from](mw.CharacterDecoration.md#from)**<`T`: \>(`arrayLike`: `ArrayLike`<`T`\>): `T`: [] |
| **[isArray](mw.CharacterDecoration.md#isarray)**(`arg`: `any`): arg is any[] |
| **[of](mw.CharacterDecoration.md#of)**<`T`: \>(`...items`: `T`[]): `T`: [] |

## Properties

## Methods

### [iterator] <Score text="" /> 

• **[iterator]**(): `IterableIterator`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`\>

Iterator

#### Returns

| `IterableIterator`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`\> | Array.\_\_@iterator@112 |
| :------ | :------ |

___

### [unscopables] <Score text="" /> 

• **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

| `Object` | Array.\_\_@unscopables@152 |
| :------ | :------ |

___

### add <Score text="add" /> 

• **add**(`decoration`, `attachmentOffset?`): `void` 

向当前外观插槽中添加一个挂件

#### Parameters

| `decoration` `string` \| [`GameObject`](mw.GameObject.md) | 挂件 |
| :------ | :------ |
| `attachmentOffset?` [`Transform`](mw.Transform.md) | 挂件transform信息 default:null |



::: warning Precautions

挂件只支持模型对象

:::

<p style="font-size: 14px;"> 使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Add"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下: </p>

```ts
@Component
export default class Example_CharacterDecoration_Add extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法:按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.clear(true);
                }
            });
        }
    }
}
```

___

### at <Score text="at" /> 

• **at**(`index`): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`

Returns the item located at the specified index.

___

### clear <Score text="clear" /> 

• **clear**(`isDestroy?`): `void` 

清空当前外观插槽的所有挂件

#### Parameters

| `isDestroy?` `boolean` | 是否销毁 default:false |
| :------ | :------ |



<p style="font-size: 14px;"> 使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Clear"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下: </p>

```ts

#### Parameters

| `index` `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |
| :------ | :------ |

#### Returns

| `undefined` \| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  } | Array.at |
| :------ | :------ |
@Component
export default class Example_CharacterDecoration_Clear extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法:按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.clear(true);
                }
            });
#### Parameters

| `isDestroy?` `boolean` | 是否销毁 default:false |
| :------ | :------ |


___

### concat <Score text="concat" /> 

• **concat**(`...items`): { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

___

### copyWithin <Score text="copyWithin" /> 

• **copyWithin**(`target`, `start`, `end?`): [`CharacterDecoration`](mw.CharacterDecoration.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

___

### delete <Score text="delete" /> 

• **delete**(`attachmentGameObject`, `isDestroy?`): `void` 

从当前插槽中删除一个挂件

#### Parameters

| `attachmentGameObject` [`GameObject`](mw.GameObject.md) | 挂件 |
| :------ | :------ |
| `isDestroy?` `boolean` | 是否销毁 default:false |



<p style="font-size: 14px;"> 使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Delete"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下: </p>

```
@Component
export default class Example_CharacterDecoration_Delete extends Script {

#### Parameters

| `target` `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| :------ | :------ |
| `start` `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` `number` | If not specified, length of the this object is used as its default value. |

#### Returns

| [`CharacterDecoration`](mw.CharacterDecoration.md) | Array.copyWithin |
| :------ | :------ |
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法:按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {

#### Parameters

| `...items` `ConcatArray`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`\>[] | Additional arrays and/or items to add to the end of the array. |
| :------ | :------ |

#### Returns

| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`[] | Array.concat |
| :------ | :------ |

#### Returns

| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`[] | Array.concat |
| :------ | :------ |
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.clear(true);
                }
            });
        }
    }
}
```ts

#### Parameters

| `attachmentGameObject` [`GameObject`](mw.GameObject.md) | 挂件 |
| :------ | :------ |
| `isDestroy?` `boolean` | 是否销毁 default:false |


___

### entries <Score text="entries" /> 

• **entries**(): `IterableIterator`<[`number`, { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

| `IterableIterator`<[`number`, { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }]\> | Array.entries |
| :------ | :------ |

___

### every <Score text="every" /> 

• **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| `S` | extends `Object` |
| :------ | :------ |

#### Parameters

| `predicate` (`value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| :------ | :------ |
| `thisArg?` `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

| this is S[] | Array.every |
| :------ | :------ |

• **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| `predicate` (`value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| :------ | :------ |
| `thisArg?` `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

| `boolean` | Array.every |
| :------ | :------ |

___

### fill <Score text="fill" /> 

• **fill**(`value`, `start?`, `end?`): [`CharacterDecoration`](mw.CharacterDecoration.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| `value` `Object` | value to fill array section with |
| :------ | :------ |
| `value.attachmentAssetId` `string` | - |
| `value.attachmentGameObject?` [`GameObject`](mw.GameObject.md) | - |
| `value.attachmentOffset?` [`Transform`](mw.Transform.md) | - |
| `start?` `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

| [`CharacterDecoration`](mw.CharacterDecoration.md) | Array.fill |
| :------ | :------ |

___

### filter <Score text="filter" /> 

• **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| `S` | extends `Object` |
| :------ | :------ |

#### Parameters

| `predicate` (`value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| :------ | :------ |
| `thisArg?` `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

| `S`[] | Array.filter |
| :------ | :------ |

• **filter**(`predicate`, `thisArg?`): { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| `predicate` (`value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| :------ | :------ |
| `thisArg?` `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[] | Array.filter |
| :------ | :------ |

___

### find <Score text="find" /> 

• **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| `S` | extends `Object` |
| :------ | :------ |

#### Parameters

| `predicate` (`this`: `void`, `value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `obj`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| :------ | :------ |
| `thisArg?` `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

| `undefined` \| `S` | Array.find |
| :------ | :------ |

• **find**(`predicate`, `thisArg?`): `undefined` \| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }

#### Parameters

| `predicate` | (`value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `obj`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `unknown` |
| :------ | :------ |
| `thisArg?` | `any` |

#### Returns

| `undefined` \| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  } | Array.find |
| :------ | :------ |

___

### findIndex <Score text="findIndex" /> 

• **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| `predicate` (`value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `obj`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| :------ | :------ |
| `thisArg?` `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

| `number` | Array.findIndex |
| :------ | :------ |

___

### flat <Score text="flat" /> 

• **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| `A` | `A` |
| :------ | :------ |
| `D` | extends `number` = ``1`` |

#### Parameters

| `this` `A` | - |
| :------ | :------ |
| `depth?` `D` | The maximum recursion depth |

#### Returns

| `FlatArray`<`A`, `D`\>[] | Array.flat |
| :------ | :------ |

___

### flatMap <Score text="flatMap" /> 

• **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| `U` | `U` |
| :------ | :------ |
| `This` | `undefined` |

#### Parameters

| `callback` (`this`: `This`, `value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| :------ | :------ |
| `thisArg?` `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

| `U`[] | Array.flatMap |
| :------ | :------ |

___

### includes <Score text="includes" /> 

• **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| `searchElement` `Object` | The element to search for. |
| :------ | :------ |
| `searchElement.attachmentAssetId` `string` | - |
| `searchElement.attachmentGameObject?` [`GameObject`](mw.GameObject.md) | - |
| `searchElement.attachmentOffset?` [`Transform`](mw.Transform.md) | - |
| `fromIndex?` `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

| `boolean` | Array.includes |
| :------ | :------ |

___

### indexOf <Score text="indexOf" /> 

• **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| `searchElement` `Object` | The value to locate in the array. |
| :------ | :------ |
| `searchElement.attachmentAssetId` `string` | - |
| `searchElement.attachmentGameObject?` [`GameObject`](mw.GameObject.md) | - |
| `searchElement.attachmentOffset?` [`Transform`](mw.Transform.md) | - |
| `fromIndex?` `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

| `number` | Array.indexOf |
| :------ | :------ |

___

### join <Score text="join" /> 

• **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| `separator?` `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |
| :------ | :------ |

#### Returns

| `string` | Array.join |
| :------ | :------ |

___

### keys <Score text="keys" /> 

• **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

| `IterableIterator`<`number`\> | Array.keys |
| :------ | :------ |

___

### lastIndexOf <Score text="lastIndexOf" /> 

• **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| `searchElement` `Object` | The value to locate in the array. |
| :------ | :------ |
| `searchElement.attachmentAssetId` `string` | - |
| `searchElement.attachmentGameObject?` [`GameObject`](mw.GameObject.md) | - |
| `searchElement.attachmentOffset?` [`Transform`](mw.Transform.md) | - |
| `fromIndex?` `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

| `number` | Array.lastIndexOf |
| :------ | :------ |

___

### map <Score text="map" /> 

• **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| `callbackfn` (`value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| :------ | :------ |
| `thisArg?` `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

| `U`[] | Array.map |
| :------ | :------ |

___

### pop <Score text="pop" /> 

• **pop**(): `undefined` \| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

| `undefined` \| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  } | Array.pop |
| :------ | :------ |

___

### push <Score text="push" /> 

• **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| `...items` { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[] | New elements to add to the array. |
| :------ | :------ |

#### Returns

| `number` | Array.push |
| :------ | :------ |

___

### reduce <Score text="reduce" /> 

• **reduce**(`callbackfn`): `Object`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| `callbackfn` (`previousValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentIndex`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  } | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| :------ | :------ |

#### Returns

| `Object` | Array.reduce |
| :------ | :------ |

• **reduce**(`callbackfn`, `initialValue`): `Object`

#### Parameters

| `callbackfn` | (`previousValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentIndex`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  } |
| :------ | :------ |
| `initialValue` | `Object` |
| `initialValue.attachmentAssetId` | `string` |
| `initialValue.attachmentGameObject?` | [`GameObject`](mw.GameObject.md) |
| `initialValue.attachmentOffset?` | [`Transform`](mw.Transform.md) |

#### Returns

| `Object` | Array.reduce |
| :------ | :------ |

• **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| `callbackfn` (`previousValue`: `U`, `currentValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentIndex`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| :------ | :------ |
| `initialValue` `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

| `U` | Array.reduce |
| :------ | :------ |

___

### reduceRight <Score text="reduceRight" /> 

• **reduceRight**(`callbackfn`): `Object`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| `callbackfn` (`previousValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentIndex`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  } | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| :------ | :------ |

#### Returns

| `Object` | Array.reduceRight |
| :------ | :------ |

• **reduceRight**(`callbackfn`, `initialValue`): `Object`

#### Parameters

| `callbackfn` | (`previousValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentIndex`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  } |
| :------ | :------ |
| `initialValue` | `Object` |
| `initialValue.attachmentAssetId` | `string` |
| `initialValue.attachmentGameObject?` | [`GameObject`](mw.GameObject.md) |
| `initialValue.attachmentOffset?` | [`Transform`](mw.Transform.md) |

#### Returns

| `Object` | Array.reduceRight |
| :------ | :------ |

• **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| `callbackfn` (`previousValue`: `U`, `currentValue`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `currentIndex`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| :------ | :------ |
| `initialValue` `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

| `U` | Array.reduceRight |
| :------ | :------ |

___

### reverse <Score text="reverse" /> 

• **reverse**(): { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[] | Array.reverse |
| :------ | :------ |

___

### shift <Score text="shift" /> 

• **shift**(): `undefined` \| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

| `undefined` \| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  } | Array.shift |
| :------ | :------ |

___

### slice <Score text="slice" /> 

• **slice**(`start?`, `end?`): { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| `start?` `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| :------ | :------ |
| `end?` `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[] | Array.slice |
| :------ | :------ |

___

### some <Score text="some" /> 

• **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| `predicate` (`value`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `index`: `number`, `array`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| :------ | :------ |
| `thisArg?` `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

| `boolean` | Array.some |
| :------ | :------ |

___

### sort <Score text="sort" /> 

• **sort**(`compareFn?`): [`CharacterDecoration`](mw.CharacterDecoration.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| `compareFn?` (`a`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }, `b`: { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |
| :------ | :------ |

#### Returns

| [`CharacterDecoration`](mw.CharacterDecoration.md) | Array.sort |
| :------ | :------ |

___

### splice <Score text="splice" /> 

• **splice**(`start`, `deleteCount?`): { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| `start` `number` | The zero-based location in the array from which to start removing elements. |
| :------ | :------ |
| `deleteCount?` `number` | The number of elements to remove. |

#### Returns

| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[] | Array.splice |
| :------ | :------ |

• **splice**(`start`, `deleteCount`, `...items`): { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| `start` `number` | The zero-based location in the array from which to start removing elements. |
| :------ | :------ |
| `deleteCount` `number` | The number of elements to remove. |
| `...items` { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

| { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[] | Array.splice |
| :------ | :------ |

___

### toLocaleString <Score text="toLocaleString" /> 

• **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

| `string` | Array.toLocaleString |
| :------ | :------ |

___

### toString <Score text="toString" /> 

• **toString**(): `string`

Returns a string representation of an array.

#### Returns

| `string` | Array.toString |
| :------ | :------ |

___

### unshift <Score text="unshift" /> 

• **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| `...items` { `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }[] | Elements to insert at the start of the array. |
| :------ | :------ |

#### Returns

| `number` | Array.unshift |
| :------ | :------ |

___

### values <Score text="values" /> 

• **values**(): `IterableIterator`<{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }\>

Returns an iterable of values in the array

#### Returns

| `IterableIterator`<{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }\> | Array.values |
| :------ | :------ |

___

### from <Score text="from" /> 

• `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| `arrayLike` `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| :------ | :------ |

#### Returns

| `T`[] | Array.from |
| :------ | :------ |

• `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| `arrayLike` `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| :------ | :------ |
| `mapfn` (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

| `U`[] | Array.from |
| :------ | :------ |

• `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| `iterable` `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| :------ | :------ |

#### Returns

| `T`[] | Array.from |
| :------ | :------ |

• `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| `iterable` `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| :------ | :------ |
| `mapfn` (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

| `U`[] | Array.from |
| :------ | :------ |

___

### isArray <Score text="isArray" /> 

• `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| `arg` | `any` |
| :------ | :------ |

#### Returns

| arg is any[] | Array.isArray |
| :------ | :------ |

___

### of <Score text="of" /> 

• `Static` **of**<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| `...items` `T`[] | A set of elements to include in the new array object. |
| :------ | :------ |

#### Returns

| `T`[] | Array.of |
| :------ | :------ |
