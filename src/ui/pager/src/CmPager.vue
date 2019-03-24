<template>
  <div class="cm-pager-container">
    <div class="cm-pager-btn cm-pager-btn-left" @click="prevPage">
      <cm-icon name="direction-short-left"></cm-icon>
    </div><div class="cm-pager-btn cm-pager-btn-left-more" v-show="list[0] > 1" @click="prevMore">
      &ensp;
    </div><div class="cm-pager-btn"
         v-for="index in list"
         :key="index"
         :class="{ 'cm-pager-btn-active': index === current }"
         @click="currentChange(index)">
    {{ index }}
    </div><div class="cm-pager-btn cm-pager-btn-right-more" v-show="list[list.length - 1] < count" @click="nextMore">
      &ensp;
    </div><div class="cm-pager-btn cm-pager-btn-right" @click="nextPage">
      <cm-icon name="direction-short-right"></cm-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CmPager',
  props: [ 'pageCurrent', 'pageSize', 'pageTotal', 'pageCount', 'pageMax' ],
  data () {
    return {
      // 页码列表
      list: [1, 2, 3, 4, 5],
      // 当前选中页码
      current: 1,
      // 每页条目数
      size: 5,
      // 条目总数
      total: 100,
      // 总页数
      count: 20,
      // 最多显示的页码个数
      max: 5
    }
  },
  mounted () {
    // this.size = this.pageSize
  },
  methods: {
    currentChange (index) {
      this.current = index
      this.$emit('updateCurrent', this.current)
    },
    prevPage () {
      if (this.current - 1 < this.list[0]) {
        if (this.current > 1) {
          this.list = [this.current - 1].concat(this.list.splice(0, this.list.length - 1))
          this.currentChange(this.current - 1)
        }
      } else {
        this.currentChange(this.current - 1)
      }
    },
    nextPage () {
      if (this.current + 1 > this.list[this.list.length - 1]) {
        if (this.current < this.count) {
          this.list = this.list.splice(1, this.list.length - 1)
          this.list.push(this.current + 1)
          this.currentChange(this.current + 1)
        }
      } else {
        this.currentChange(this.current + 1)
      }
    },
    prevMore () {
      let start = this.list[0]
      let end = this.list[this.list.length - 1]
      this.list = []
      if (this.current - this.max < this.max) {
        for (let i = 1; i <= this.max; i++) {
          this.list.push(i)
        }
      } else {
        for (let i = start - this.max; i <= end - this.max; i++) {
          this.list.push(i)
        }
      }
      // this.current -= this.max
      this.currentChange(this.current - this.max)
    },
    nextMore () {
      let start = this.list[0]
      let end = this.list[this.list.length - 1]
      this.list = []
      if (this.current + this.max > this.count - this.max) {
        for (let i = this.count - this.max + 1; i <= this.count; i++) {
          this.list.push(i)
        }
      } else {
        for (let i = start + this.max; i <= end + this.max; i++) {
          this.list.push(i)
        }
      }
      // this.current += this.max
      this.currentChange(this.current + this.max)
    }
  }
}
</script>

<style lang="scss">
.cm-pager-container {
  user-select: none;
  width: 100%;
  .cm-pager-btn {
    display: inline-block;
    box-sizing: border-box;
    height: 35px;
    width: 35px;
    line-height: 35px;
    text-align: center;
    /*border-radius: 3px;*/
    border: 1px solid #c4c4c4;
    /*border-left: 0;*/
    margin: 0;
    margin-left: -1px;
    cursor: pointer;
    color: #464646;
    font-weight: 400;
    &:hover {
      color: dodgerblue;
      background-color: rgba(219, 233, 245, 0.67);
    }
  }
  .cm-pager-btn-left {
    border-left: 1px solid #c4c4c4;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .cm-pager-btn-right {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  @mixin cm-pager-btn-more {
    position: relative;
    &:before {
      content: "···";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .cm-pager-btn-left-more {
    @include cm-pager-btn-more;
    &:hover {
      &:before {
        content: "<<";
      }
    }
  }
  .cm-pager-btn-right-more {
    @include cm-pager-btn-more;
    &:hover {
      &:before {
        content: ">>";
      }
    }
  }
  .cm-pager-btn-active {
    background-color: dodgerblue;
    color: white;
    border: 1px solid dodgerblue;
    &:hover {
      color: white;
      background-color: dodgerblue;
    }
  }
}
</style>
