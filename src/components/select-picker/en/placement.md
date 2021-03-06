### Placement

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const CustomSelectPicker = ({ placement }) => (
  <SelectPicker data={data} placement={placement} placeholder={placement} />
);

const instance = (
  <div>
    <table className="placement-table">
      <tbody>
        <tr>
          <td />
          <td>
            <CustomSelectPicker placement="topLeft" />
          </td>
          <td>
            <CustomSelectPicker placement="topRight" />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <CustomSelectPicker placement="leftTop" />
          </td>
          <td />
          <td />
          <td>
            <CustomSelectPicker placement="rightTop" />
          </td>
        </tr>
        <tr>
          <td>
            <CustomSelectPicker placement="leftBottom" />
          </td>
          <td />
          <td />
          <td>
            <CustomSelectPicker placement="rightBottom" />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <CustomSelectPicker placement="bottomLeft" />
          </td>
          <td>
            <CustomSelectPicker placement="bottomRight" />
          </td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <CustomSelectPicker placement="auto" />
    <hr />
    <CustomSelectPicker placement="autoVerticalRight" />{' '}
    <CustomSelectPicker placement="autoVerticalLeft" />
    <hr />
    <CustomSelectPicker placement="autoHorizontalTop" />{' '}
    <CustomSelectPicker placement="autoHorizontalBottom" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->

> Tip: When set to `auto*`, try to scroll the page, or change the browser size, it will automatically appear in the right place.
