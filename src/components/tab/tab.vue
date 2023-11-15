<template>
    <div class="tab">
        <router-link
            class="tab-item"
            v-for="tab in tabs"
            :key="tab.path"
            :to="tab.path"
        >
            <span class="tab-link">{{tab.name}}</span>
        </router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      selectedTab: 'recommend',
      tabs: [{
        name: '推荐',
        path: '/recommend'
      },
      {
        name: '歌手',
        path: '/singer'
      },
      {
        name: '排行',
        path: '/top-list'
      },
      {
        name: '搜索',
        path: '/search'
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;

    .tab-item {
        flex: 1;
        text-align: center;
        // border: 1px solid white;
        .tab-link {
            padding-bottom: 5px;
            color: $color-text-l;
        }
        // 在Vue 3中，&.router-link-active 与 Vue Router 结合使用时是一种 CSS 选择器语法，用于指定在路由链接处于活动状态时应用的样式。
        // 在 Vue Router 中，当用户点击路由链接并导航到与该链接关联的路由时，Vue Router 会自动为链接添加一个名为 router-link-active 的类。这个类使你能够轻松地为活动状态的链接定义样式。
        // 在你的样式表（通常是一个 .vue 文件中的 <style> 部分）中，你可以使用 & 符号来引用当前选择器的父选择器。因此，&.router-link-active 表示当前选择器处于活动状态时应用的样式。
        &.router-link-active {
            .tab-link {
                color: $color-theme;
                border-bottom: 2px solid $color-theme;
            }
        }
    }
}
</style>
