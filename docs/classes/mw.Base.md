[mw](../modules/Core.mw.md) / Base

# Base <Badge type="tip" text="Class" /> <Score text="Base" />

GameObject的基类

## Hierarchy

- **`Base`**

  ↳ [`GameObject`](mw.GameObject.md)

  ↳ [`Script`](mw.Script.md)

## Table of contents

### Properties <Score text="Properties" /> 
| **[onPropertyChange](mw.Base.md#onpropertychange)**: `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\>  |
| :-----|
| 监听系统属性同步事件|

### Methods <Score text="Methods" /> 
| **[getPropertyChangeDelegate](mw.Base.md#getpropertychangedelegate)**(`property`): `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\> <Badge type="tip" text="other" />  |
| :-----|
| 给定对象属性修改时触发的事件代理|

## Properties

### onPropertyChange <Score text="onPropertyChange" /> 

• **onPropertyChange**: `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\>

监听系统属性同步事件

```ts
this.onPropertyChange.add((path, value, oldValue) => {
    console.log(`属性 ${path} 改变了，新值为 ${value}，旧值为 ${oldValue}`);
});
```

## Methods

### getPropertyChangeDelegate <Score text="getPropertyChangeDelegate" /> 

• **getPropertyChangeDelegate**(`property`): `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\> <Badge type="tip" text="other" />

给定对象属性修改时触发的事件代理

#### Parameters

| `property` `string` | 对象属性名字 例如：'x' 'rotation.x' |
| :------ | :------ |

#### Returns

| `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\> | 代理对象 |
| :------ | :------ |
