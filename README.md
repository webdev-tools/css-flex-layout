# css-flex-layout

A tiny framework based on css flex box to manage grids without flood your html

It is only necessary to add 1 class to the columns container.
Keep your code slim and clean.

## Usage:

### Auto sized columns

Divide all available space between columns.
If a column don't fit on the line, it will break to the next line.

```html
<section class="fl-cols-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</section>
```

### Specific columns per line

Define the number of columns you want per line and available space will be divided
to fit the columns on the line and the other columns will break to the next line.


| Columns | Class                  |
| ------- | ---------------------- |
| 2       | `.fl-2-cols-container` |
| 3       | `.fl-3-cols-container` |
| 4       | `.fl-4-cols-container` |
| 6       | `.fl-6-cols-container` |


```html
<section class="fl-3-cols-container">
  <aside>001</aside>
  <aside>002</aside>
  <aside>003</aside><!-- break to next line -->
  <aside>004</aside>
  <aside>005</aside>
  <aside>006</aside><!-- break to next line -->
  <aside>007</aside><!-- alone on the last line -->
</section>
```

### Gutters

Gutters add padding to the columns, without change its size.


| Padding | class                                                       |
| ------- | ----------------------------------------------------------- |
| 5px     | `.fl-gutter-5`  or `.fl-gutter-tb-5` or `.fl-gutter-rl-5`   |
| 10px    | `.fl-gutter-10` or `.fl-gutter-tb-10` or `.fl-gutter-rl-10` |
| 15px    | `.fl-gutter-15` or `.fl-gutter-tb-15` or `.fl-gutter-rl-15` |
| 20px    | `.fl-gutter-20` or `.fl-gutter-tb-20` or `.fl-gutter-rl-20` |

> tb = **Top** and **Bottom**
> rl = **Right** and **Left**

```html
<section class="fl-cols-container fl-gutter-5">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</section>
```

### Spacers

Spacers add **margin bottom** to all columns, pushing the cells that fell to the next line.


| Padding | class           |
| ------- | --------------- |
| 5px     | `.fl-spacer-5`  |
| 10px    | `.fl-spacer-10` |
| 15px    | `.fl-spacer-15` |
| 20px    | `.fl-spacer-20` |


```html
<section class="fl-2-cols-container fl-spacer-20">
  <aside>001</aside>
  <aside>002</aside><!-- break to next line -->
  <!-- 20px spacer between  -->
  <aside>003</aside>
  <aside>004</aside>
</section>
```
