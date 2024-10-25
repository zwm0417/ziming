## Button 按钮

<zm-button>默认按钮</zm-button>

<zm-button type="primary">默认按钮</zm-button>

::: details 显示代码

```html
<zm-button>默认按钮</zm-button> <zm-button type="primary">默认按钮</zm-button>
```

:::

## hello: world

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
  border: 1px solid lime;
}
</style>
