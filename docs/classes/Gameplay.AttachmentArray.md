[Avatar](../groups/Avatar.Avatar.md) / AttachmentArray

# AttachmentArray <Badge type="tip" text="Class" /> <Score text="AttachmentArray" />

单个插槽对应的挂件物体数组

## Hierarchy

- `Array`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `Core.GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`\>

  ↳ **`AttachmentArray`**

## Table of contents

| Properties |
| :-----|
| **[length](Gameplay.AttachmentArray.md#length)**: `number` <br> |
| [[species]](Gameplay.AttachmentArray.md#[species]) |

| Methods |
| :-----|
| [[iterator]](Gameplay.AttachmentArray.md#[iterator]) |
| [[unscopables]](Gameplay.AttachmentArray.md#[unscopables]) |
| **[add](Gameplay.AttachmentArray.md#add)**(`val`: `Object`): `void` <br> 向当前外观插槽中添加一个挂件|
| **[at](Gameplay.AttachmentArray.md#at)**(`index`: `number`): `undefined` \| `{ `[at](Gameplay.AttachmentArray.md#at)tachmentAssetId`: `string` ; `[at](Gameplay.AttachmentArray.md#at)tachmentGameObject?`: `GameObject` ; `[at](Gameplay.AttachmentArray.md#at)tachmentOffset?`: [`Transform`](Type.Transform.md)  }` <br> |
| **[clear](Gameplay.AttachmentArray.md#clear)**(): `void` <br> 清空当前外观插槽的所有挂件|
| **[concat](Gameplay.AttachmentArray.md#concat)**(`...items`: `ConcatArray`<``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``\>[]): ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[] <br> |
| **[copyWithin](Gameplay.AttachmentArray.md#copywithin)**(`target`: `number`, `start`: `number`, `end?`: `number`): [`AttachmentArray`](Gameplay.AttachmentArray.md) <br> |
| **[delete](Gameplay.AttachmentArray.md#delete)**(`attachmentGameObject`: `GameObject`): `void` <br> 从当前插槽中删除一个挂件|
| **[entries](Gameplay.AttachmentArray.md#entries)**(): `IterableIterator`<[`number`, `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`]\> <br> |
| **[every](Gameplay.AttachmentArray.md#every)**<`S`: extends `Object`\>(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => value is S, `thisArg?`: `any`): this is S[] <br> |
| **[fill](Gameplay.AttachmentArray.md#fill)**(`value`: `Object`, `start?`: `number`, `end?`: `number`): [`AttachmentArray`](Gameplay.AttachmentArray.md) <br> |
| **[filter](Gameplay.AttachmentArray.md#filter)**<`S`: extends `Object`\>(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => value is S, `thisArg?`: `any`): `S`: extends `Object`[] <br> |
| **[find](Gameplay.AttachmentArray.md#find)**<`S`: extends `Object`\>(`predicate`: (`this`: `void`, `value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `obj`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => value is S, `thisArg?`: `any`): `undefined` \| `S`: extends `Object` <br> |
| **[findIndex](Gameplay.AttachmentArray.md#findindex)**(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `obj`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `unknown`, `thisArg?`: `any`): `number` <br> |
| **[flat](Gameplay.AttachmentArray.md#flat)**<`A`: `A`, `D`: extends `number` = ``1``\>(`this`: `A`, `depth?`: `D`): `FlatArray`<`A`: `A`, `D`: extends `number` = ``1``\>[] <br> |
| **[flatMap](Gameplay.AttachmentArray.md#flatmap)**<`U`: `U`, `This`: `undefined`\>(`callback`: (`this`: `This`, `value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `U` \, `thisArg?`: `This`): `U`: `U`[] <br> |
| **[forEach](Gameplay.AttachmentArray.md#foreach)**(`callbackfn`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `void`, `thisArg?`: `any`): `void` <br> |
| **[includes](Gameplay.AttachmentArray.md#includes)**(`searchElement`: `Object`, `fromIndex?`: `number`): `boolean` <br> |
| **[indexOf](Gameplay.AttachmentArray.md#indexof)**(`searchElement`: `Object`, `fromIndex?`: `number`): `number` <br> |
| **[join](Gameplay.AttachmentArray.md#join)**(`separator?`: `string`): `string` <br> |
| **[keys](Gameplay.AttachmentArray.md#keys)**(): `IterableIterator`<`number`\> <br> |
| **[lastIndexOf](Gameplay.AttachmentArray.md#lastindexof)**(`searchElement`: `Object`, `fromIndex?`: `number`): `number` <br> |
| **[map](Gameplay.AttachmentArray.md#map)**<`U`\>(`callbackfn`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `U`, `thisArg?`: `any`): `U`[] <br> |
| **[pop](Gameplay.AttachmentArray.md#pop)**(): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }` <br> |
| **[push](Gameplay.AttachmentArray.md#push)**(`...items`: `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]): `number` <br> |
| **[reduce](Gameplay.AttachmentArray.md#reduce)**(`callbackfn`: (`previousValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentIndex`: `number`, `array`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````[]) => ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````): `Object` <br> |
| **[reduceRight](Gameplay.AttachmentArray.md#reduceright)**(`callbackfn`: (`previousValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentIndex`: `number`, `array`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````[]) => ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````): `Object` <br> |
| **[reverse](Gameplay.AttachmentArray.md#reverse)**(): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[] <br> |
| **[shift](Gameplay.AttachmentArray.md#shift)**(): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }` <br> |
| **[slice](Gameplay.AttachmentArray.md#slice)**(`start?`: `number`, `end?`: `number`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[] <br> |
| **[some](Gameplay.AttachmentArray.md#some)**(`predicate`: (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `unknown`, `thisArg?`: `any`): `boolean` <br> |
| **[sort](Gameplay.AttachmentArray.md#sort)**(`compareFn?`: (`a`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `b`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``) => `number`): [`AttachmentArray`](Gameplay.AttachmentArray.md) <br> |
| **[splice](Gameplay.AttachmentArray.md#splice)**(`start`: `number`, `deleteCount?`: `number`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[] <br> |
| **[toLocaleString](Gameplay.AttachmentArray.md#tolocalestring)**(): `string` <br> |
| **[toString](Gameplay.AttachmentArray.md#tostring)**(): `string` <br> |
| **[unshift](Gameplay.AttachmentArray.md#unshift)**(`...items`: `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]): `number` <br> |
| **[values](Gameplay.AttachmentArray.md#values)**(): `IterableIterator`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`\> <br> |
| **[from](Gameplay.AttachmentArray.md#from)**<`T`\>(`arrayLike`: `ArrayLike`<`T`\>): `T`[] <br> |
| **[isArray](Gameplay.AttachmentArray.md#isarray)**(`arg`: `any`): arg is any[] <br> |
| **[of](Gameplay.AttachmentArray.md#of)**<`T`\>(`...items`: `T`[]): `T`[] <br> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayLength` | `number` |

    readonly attachmentOffset?: Type.Transform;
    readonly attachmentGameObject?: Core.GameObject;
  }\>.constructor

• **new AttachmentArray**(`...items`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[] |

    readonly attachmentOffset?: Type.Transform;
    readonly attachmentGameObject?: Core.GameObject;
  }\>.constructor

## Properties

### length <Score text="length" /> 

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

___

### [species] <Score text="" /> 

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

## Methods

### [iterator] <Score text="" /> 

• **[iterator]**(): `IterableIterator`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`\>

Iterator

#### Returns

`IterableIterator`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`\>

___

### [unscopables] <Score text="" /> 

• **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

___

### add <Score text="add" /> 

• **add**(`val`): `void` 

向当前外观插槽中添加一个挂件


::: warning Precautions

挂件只支持模型对象

:::

使用示例:提供按键方法，给角色插槽添加，删除，清空挂件
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,60858";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【外观加载完成】委托添加函数，
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，给角色插槽【头顶光圈】添加1个挂件60858
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.add({attachmentAssetId: "60858", attachmentOffset: new Type.Transform(new Type.Vector(0, 0, MathUtil.randomInt(0, 100)), Type.Rotation.zero, Type.Vector.one.multiply(0.1))});
                }
            });
            // 添加一个按键方法：按下键盘“3”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.delete(ring);
                    }
                }
            });
            // 添加一个按键方法：按下键盘“4”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.clear();
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `Object` | 挂件 |
| `val.attachmentAssetId` | `string` | - |
| `val.attachmentGameObject?` | `GameObject` | - |
| `val.attachmentOffset?` | [`Transform`](Type.Transform.md) | - |


___

### at <Score text="at" /> 

• **at**(`index`): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`

Returns the item located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`

___

### clear <Score text="clear" /> 

• **clear**(): `void` 

清空当前外观插槽的所有挂件


使用示例:提供按键方法，给角色插槽添加，删除，清空挂件
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,60858";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【外观加载完成】委托添加函数，
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，给角色插槽【头顶光圈】添加1个挂件60858
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.add({attachmentAssetId: "60858", attachmentOffset: new Type.Transform(new Type.Vector(0, 0, MathUtil.randomInt(0, 100)), Type.Rotation.zero, Type.Vector.one.multiply(0.1))});
                }
            });
            // 添加一个按键方法：按下键盘“3”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.delete(ring);
                    }
                }
            });
            // 添加一个按键方法：按下键盘“4”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV4) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.clear();
                }
            });
        }
    }
}
```


___

### concat <Score text="concat" /> 

• **concat**(`...items`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

• **concat**(`...items`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`` \| `ConcatArray`<``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

___

### copyWithin <Score text="copyWithin" /> 

• **copyWithin**(`target`, `start`, `end?`): [`AttachmentArray`](Gameplay.AttachmentArray.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`AttachmentArray`](Gameplay.AttachmentArray.md)

___

### delete <Score text="delete" /> 

• **delete**(`attachmentGameObject`): `void` 

从当前插槽中删除一个挂件


使用示例:提供按键方法，给角色插槽添加，删除，清空挂件
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,60858";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【外观加载完成】委托添加函数，
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，给角色插槽【头顶光圈】添加1个挂件60858
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.add({attachmentAssetId: "60858", attachmentOffset: new Type.Transform(new Type.Vector(0, 0, MathUtil.randomInt(0, 100)), Type.Rotation.zero, Type.Vector.one.multiply(0.1))});
                }
            });
            // 添加一个按键方法：按下键盘“3”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.delete(ring);
                    }
                }
            });
            // 添加一个按键方法：按下键盘“4”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV3) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.clear();
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentGameObject` | `GameObject` | 挂件 |


___

### entries <Score text="entries" /> 

• **entries**(): `IterableIterator`<[`number`, `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`]\>

___

### every <Score text="every" /> 

• **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

• **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

___

### fill <Score text="fill" /> 

• **fill**(`value`, `start?`, `end?`): [`AttachmentArray`](Gameplay.AttachmentArray.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Object` | value to fill array section with |
| `value.attachmentAssetId` | `string` | - |
| `value.attachmentGameObject?` | `GameObject` | - |
| `value.attachmentOffset?` | [`Transform`](Type.Transform.md) | - |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`AttachmentArray`](Gameplay.AttachmentArray.md)

___

### filter <Score text="filter" /> 

• **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

• **filter**(`predicate`, `thisArg?`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

___

### find <Score text="find" /> 

• **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `obj`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

• **find**(`predicate`, `thisArg?`): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `obj`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`

___

### findIndex <Score text="findIndex" /> 

• **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `obj`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

___

### flat <Score text="flat" /> 

• **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

___

### flatMap <Score text="flatMap" /> 

• **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

___

### forEach <Score text="forEach" /> 

• **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |


___

### includes <Score text="includes" /> 

• **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Object` | The element to search for. |
| `searchElement.attachmentAssetId` | `string` | - |
| `searchElement.attachmentGameObject?` | `GameObject` | - |
| `searchElement.attachmentOffset?` | [`Transform`](Type.Transform.md) | - |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

___

### indexOf <Score text="indexOf" /> 

• **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Object` | The value to locate in the array. |
| `searchElement.attachmentAssetId` | `string` | - |
| `searchElement.attachmentGameObject?` | `GameObject` | - |
| `searchElement.attachmentOffset?` | [`Transform`](Type.Transform.md) | - |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

___

### join <Score text="join" /> 

• **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

___

### keys <Score text="keys" /> 

• **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

___

### lastIndexOf <Score text="lastIndexOf" /> 

• **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Object` | The value to locate in the array. |
| `searchElement.attachmentAssetId` | `string` | - |
| `searchElement.attachmentGameObject?` | `GameObject` | - |
| `searchElement.attachmentOffset?` | [`Transform`](Type.Transform.md) | - |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

___

### map <Score text="map" /> 

• **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

___

### pop <Score text="pop" /> 

• **pop**(): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`

___

### push <Score text="push" /> 

• **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[] | New elements to add to the array. |

#### Returns

`number`

___

### reduce <Score text="reduce" /> 

• **reduce**(`callbackfn`): `Object`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentIndex`: `number`, `array`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````[]) => ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }```` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `attachmentAssetId` | `string` |
| `attachmentGameObject?` | `GameObject` |
| `attachmentOffset?` | [`Transform`](Type.Transform.md) |

• **reduce**(`callbackfn`, `initialValue`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentIndex`: `number`, `array`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````[]) => ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }```` |
| `initialValue` | `Object` |
| `initialValue.attachmentAssetId` | `string` |
| `initialValue.attachmentGameObject?` | `GameObject` |
| `initialValue.attachmentOffset?` | [`Transform`](Type.Transform.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `attachmentAssetId` | `string` |
| `attachmentGameObject?` | `GameObject` |
| `attachmentOffset?` | [`Transform`](Type.Transform.md) |

• **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `currentIndex`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

___

### reduceRight <Score text="reduceRight" /> 

• **reduceRight**(`callbackfn`): `Object`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentIndex`: `number`, `array`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````[]) => ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }```` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `attachmentAssetId` | `string` |
| `attachmentGameObject?` | `GameObject` |
| `attachmentOffset?` | [`Transform`](Type.Transform.md) |

• **reduceRight**(`callbackfn`, `initialValue`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentValue`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````, `currentIndex`: `number`, `array`: ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }````[]) => ````{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }```` |
| `initialValue` | `Object` |
| `initialValue.attachmentAssetId` | `string` |
| `initialValue.attachmentGameObject?` | `GameObject` |
| `initialValue.attachmentOffset?` | [`Transform`](Type.Transform.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `attachmentAssetId` | `string` |
| `attachmentGameObject?` | `GameObject` |
| `attachmentOffset?` | [`Transform`](Type.Transform.md) |

• **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `currentIndex`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

___

### reverse <Score text="reverse" /> 

• **reverse**(): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

___

### shift <Score text="shift" /> 

• **shift**(): `undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`

___

### slice <Score text="slice" /> 

• **slice**(`start?`, `end?`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

___

### some <Score text="some" /> 

• **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `index`: `number`, `array`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

___

### sort <Score text="sort" /> 

• **sort**(`compareFn?`): [`AttachmentArray`](Gameplay.AttachmentArray.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``, `b`: ``{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }``) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`AttachmentArray`](Gameplay.AttachmentArray.md)

___

### splice <Score text="splice" /> 

• **splice**(`start`, `deleteCount?`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

An array containing the elements that were deleted.

• **splice**(`start`, `deleteCount`, `...items`): `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[]

An array containing the elements that were deleted.

___

### toLocaleString <Score text="toLocaleString" /> 

• **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

___

### toString <Score text="toString" /> 

• **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

___

### unshift <Score text="unshift" /> 

• **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`[] | Elements to insert at the start of the array. |

#### Returns

`number`

___

### values <Score text="values" /> 

• **values**(): `IterableIterator`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: `GameObject` ; `attachmentOffset?`: [`Transform`](Type.Transform.md)  }`\>

___

### from <Score text="from" /> 

• `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

• `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

• `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

• `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

___

### isArray <Score text="isArray" /> 

• `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

___

### of <Score text="of" /> 

• `Static` **of**<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]
