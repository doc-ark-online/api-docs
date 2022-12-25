## 基础 markdown 写法

基础写法可参考[markdown 官方教程](https://markdown.com.cn/basic-syntax/)，VitePress 会自动在右边栏，生成二级&三级标题跳转。

## 表格

**Input**

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**Output**

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## 容器

### Default Title

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom Title

可以自定义容器后面的文字，如下面的 warning。

**Input**

````md
::: warning @precautions
这个可以用来放咱们的 precautions
:::

::: details Click me to view the code

```js
console.log("Hello, VitePress!");
```

:::
````

**Output**

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log("Hello, VitePress!");
```

:::

## 代码

### Focus in Code Blocks

单行代码后添加 `// [!code focus]` 就会出现下面的代码模糊效果。

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
````

**Output**

```js
export default {
  data() {
    return {
      msg: "Focused!", // [!code focus]
    };
  },
};
```

### Colored Diffs in Code Blocks

单行代码后添加 `// [!code --]` or `// [!code ++]` 会出现下方 diffs 的效果。

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````

**Output**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### Errors and Warnings in Code Blocks

单行代码后添加 `// [!code warning]` or `// [!code error]` 代码块背景会出现以下效果。

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

**Output**

```js
export default {
  data() {
    return {
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

### Code Groups

可以放多个代码块形成一个组。

**Input**

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::
````

**Output**

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::

## 徽章

可以使用 `Badge` 形成下面的效果。

```html
### Title <Badge type="info" text="default" /> ### Title
<Badge type="tip" text="^1.9.0" /> ### Title
<Badge type="warning" text="class" /> ### Title
<Badge type="danger" text="caution" />
```

### Title <Badge type="info" text="default" />

### Title <Badge type="tip" text="^1.9.0" />

### Title <Badge type="warning" text="class" />

### Title <Badge type="danger" text="caution" />

更多玩法参考[vitepress](https://vitepress.vuejs.org/guide/markdown)，里面介绍的很详细。
