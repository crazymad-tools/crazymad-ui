<template>
  <pre>
&lt;cm-row space=&quot;10&quot;&gt;
  &lt;cm-col span=&quot;lg8 md12&quot;&gt;&lt;div class=&quot;color1&quot;&gt;&lt;/div&gt;&lt;/cm-col&gt;
  &lt;cm-col span=&quot;lg8&quot;&gt;&lt;div class=&quot;color2&quot;&gt;&lt;/div&gt;&lt;/cm-col&gt;
  &lt;cm-col span=&quot;lg8 md12 sm24&quot;&gt;&lt;div class=&quot;color3&quot;&gt;&lt;/div&gt;&lt;/cm-col&gt;
&lt;/cm-row&gt;
&lt;!--&lt;div style=&quot;clear: both;&quot;&gt;&lt;/div&gt;--&gt;
&lt;cm-row style=&quot;margin-top: 10px;&quot; space=&quot;10&quot;&gt;
  &lt;cm-col span=&quot;lg6 sm8&quot;&gt;&lt;div class=&quot;color1&quot;&gt;&lt;/div&gt;&lt;/cm-col&gt;
  &lt;cm-col span=&quot;lg6 sm6&quot;&gt;&lt;div class=&quot;color2&quot;&gt;&lt;/div&gt;&lt;/cm-col&gt;
  &lt;cm-col span=&quot;lg6 sm10&quot;&gt;&lt;div class=&quot;color3&quot;&gt;&lt;/div&gt;&lt;/cm-col&gt;
  &lt;cm-col span=&quot;lg6&quot;&gt;&lt;div class=&quot;color4&quot;&gt;&lt;/div&gt;&lt;/cm-col&gt;
&lt;/cm-row&gt;

&lt;style&gt;
.layout-container {
  width: 100%;
}
[class *= color] {
  height: 30px;
  border-radius: 5px;
}
.color1 {
  background-color: #d3dce6;
}
.color2 {
  background-color: #c9e0e6;
}
.color3 {
  background-color: #e5e9f2;
}
.color4 {
  background-color: #c5c8d0;
}
&lt;/style&gt;
  </pre>
</template>

<script>
export default {
  name: 'LayoutDemo'
}
</script>
