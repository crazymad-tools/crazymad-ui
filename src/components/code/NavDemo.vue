<template>
  <pre>
&lt;div&gt;
  &lt;cm-nav :list=&quot;navList&quot; default=&quot;index&quot; space=&quot;20&quot; :slide=&quot;true&quot;&gt;&lt;/cm-nav&gt;
  &lt;cm-nav :list=&quot;navList&quot; default=&quot;index&quot; space=&quot;20&quot; :slide=&quot;false&quot;&gt;&lt;/cm-nav&gt;
&lt;/div&gt;
&lt;script&gt;
export default {
  data () {
    return {
      navList: [{
        lable: &#x27;小说&#x27;,
        value: &#x27;index&#x27;
      }, {
        lable: &#x27;文章&#x27;,
        value: &#x27;category&#x27;
      }, {
        lable: &#x27;用户&#x27;,
        value: &#x27;auth&#x27;
      }, {
        lable: &#x27;登出&#x27;,
        value: &#x27;logout&#x27;
      }]
    }
  }
}
&lt;/script&gt;
  </pre>
</template>

<script>
export default {
  name: 'NavDemo'
}
</script>
