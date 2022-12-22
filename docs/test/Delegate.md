# Delegate

委托

`@networkStatus` 双端

`@effect` 调用端生效

## Constructor

new Delegate(): Delegate

## Property

## Accessor

## Methods

| name    | type                          | desc         |
| ------- | ----------------------------- | ------------ |
| bind    | (func:T): void                | 绑定函数     |
| execute | (arg: Parameters): ReturnType | 执行绑定函数 |
| isBound | (): boolean                   | 是否绑定     |
| unbind  | (): void                      | 解绑函数     |

### bind

```ts
bind(func: T): void
```

绑定函数

`@effect`调用端生效

#### Parameters

##### func

绑定函数
