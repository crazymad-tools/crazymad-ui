<template>
  <div class="cm-pager-container">
    <div class="cm-pager-btn cm-pager-btn-left"
         :class="{ 'cm-pager-btn-border-none': !pageBorder, 'cm-pager-btn-space': pageSpace}"
         @click="prevPage">
      <cm-icon name="direction-short-left"></cm-icon>
    </div><div class="cm-pager-btn cm-pager-btn-left-more" :class="{ 'cm-pager-btn-border-none': !pageBorder, 'cm-pager-btn-space': pageSpace}" v-show="list[0] > 1" @click="prevMore">
      &ensp;
    </div><div class="cm-pager-btn"
         v-for="index in list"
         :key="index"
         :class="{ 'cm-pager-btn-active': index === current, 'cm-pager-btn-border-none': !pageBorder, 'cm-pager-btn-space': pageSpace}"
         @click="currentChange(index)">
    {{ index }}
    </div><div class="cm-pager-btn cm-pager-btn-right-more" :class="{ 'cm-pager-btn-border-none': !pageBorder, 'cm-pager-btn-space': pageSpace}" v-show="list[list.length - 1] < count" @click="nextMore">
      &ensp;
    </div><div class="cm-pager-btn cm-pager-btn-right" :class="{ 'cm-pager-btn-border-none': !pageBorder, 'cm-pager-btn-space': pageSpace}" @click="nextPage">
      <cm-icon name="direction-short-right"></cm-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CmPager',
  props: [ 'pageCurrent', 'pageSize', 'pageTotal', 'pageCount', 'pageMax', 'pageBorder', 'pageSpace' ],
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
    console.log(this.pageBorder, this.pageSpace)
    this.size = this.pageSize ? this.pageSize : this.size
    this.total = this.pageTotal ? this.pageTotal : this.total
    // 做多显示页码数必须为基数
    this.max = this.pageMax ? (this.pageMax % 2 === 0 ? this.pageMax + 1 : this.pageMax) : this.max
    this.current = this.pageCurrent ? this.pageCurrent : this.current
    this.count = Math.ceil(this.total / this.max)
    this.updateList()
  },
  methods: {
    updateList () {
      let list = []
      if (this.count < this.max || this.current <= this.max / 2 + 1) {
        for (let i = 1; i <= this.max && i <= this.count; i++) {
          list.push(i)
        }
      } else if (this.current + this.max / 2 >= this.count) {
        for (let i = this.count - this.max + 1; i <= this.count; i++) {
          list.push(i)
        }
      } else {
        let half = Math.floor(this.max / 2)
        for (let i = this.current - half; i <= this.current + half; i++) {
          list.push(i)
        }
      }
      this.list = list
    },
    currentChange (index) {
      this.current = index
      this.updateList()
      this.$emit('updateCurrent', this.current)
      this.$emit('update:pageCurrent', this.current)
    },
    prevPage () {
      if (this.current - 1 < this.list[0]) {
        if (this.current > 1) {
          this.currentChange(this.current - 1)
        }
      } else {
        this.currentChange(this.current - 1)
      }
    },
    nextPage () {
      if (this.current + 1 > this.list[this.list.length - 1]) {
        if (this.current < this.count) {
          this.currentChange(this.current + 1)
        }
      } else {
        this.currentChange(this.current + 1)
      }
    },
    prevMore () {
      let current = this.current - this.max < 1 ? 1 : this.current - this.max
      this.currentChange(current)
    },
    nextMore () {
      let current = this.current + this.max > this.count ? this.count : this.current + this.max
      this.currentChange(current)
    }
  }
}
</script>

<style lang="scss">
.cm-pager-container {
  user-select: none;
  width: 100%;
  .cm-pager-btn {
    position: relative;
    z-index: 10000;
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
      background-color: rgba(228, 243, 255, 0.58);
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
    z-index: 10001;
    background-color: dodgerblue;
    color: white;
    border: 1px solid dodgerblue;
    &:hover {
      color: white;
      background-color: dodgerblue;
    }
  }
  .cm-pager-btn-border-none {
    border: 0;
  }
  .cm-pager-btn-space {
    margin: 0 5px;
  }
}
</style>
