### 默认值

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

const instance = (
  <div>
    <h5>级联：</h5>
    <MultiCascader
      data={data}
      style={{ width: 224 }}
      defaultValue={['1-1', '1-2', '1-3']}
    />
    <hr />
    <h5>非级联：</h5>
    <MultiCascader
      data={data}
      style={{ width: 224 }}
      defaultValue={['1-1', '1-2', '1-3']}
      cascade={false}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
