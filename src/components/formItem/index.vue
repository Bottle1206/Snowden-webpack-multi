<template>
  <div class="form-item-display">
    <label>{{label}}</label>
    <div class="form-item-display-content">
      <slot>无</slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: String
    }
  }
</script>

<style lang="stylus">
  .form-item-display
    margin-bottom 15px
    min-height 32px
    >label
      line-height 32px
      width 130px
      padding-right 12px
      float left
      text-align right
      color #444
      font-weight 500
    .form-item-display-content
      margin-left 130px
      line-height 32px
      .el-switch.is-disabled
        opacity 1
</style>