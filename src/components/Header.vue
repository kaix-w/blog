<template>
  <div class="header">
    <mu-appbar :color="background">
      <!-- 昵称 -->
      <span style="cursor: pointer">AllForOne</span>

      <!-- 头像 -->
      <!-- <mu-avatar slot="left" :size="50" class="header-avatar">
            <mu-icon value="account_circle"></mu-icon>
        </mu-avatar> -->
      <!-- pc端菜单 -->
      <mu-button
        v-show="isPC"
        flat
        slot="right"
        v-for="(item, index) in info.menu"
        :key="item.name"
        :color="lightIndex === index ? '#00e676' : ''"
        @click="gotoPage(item)"
      >
        <mu-icon size="16" :value="item.icon"></mu-icon>
        {{ item.name }}
      </mu-button>

      <!-- 移动端菜单 -->
      <mu-button
        v-show="!isPC"
        slot="left"
        icon
        @click="toggleWapMenu(true)"
      >
        <mu-icon size="16" value="menu"></mu-icon>
      </mu-button>
      <mu-bottom-sheet :open.sync="openWapMenu">
        <mu-list @item-click="toggleWapMenu(false)">
          <mu-list-item
            button
            v-for="(item, index) in info.menu"
            :key="item.name"
            @click="gotoPage(item)"
          >
            <mu-list-item-action>
              <mu-icon
                :value="item.icon"
                :color="lightIndex === index ? '#00e676' : ''"
              ></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title
              :style="{ color: lightIndex === index ? '#00e676' : '' }"
              >{{ item.name }}</mu-list-item-title
            >
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>

      <!-- 切换主题 -->
      <mu-button flat ref="theme" slot="right" @click="openTheme = !openTheme">
        <mu-icon value="color_lens"></mu-icon>
      </mu-button>
      <mu-popover :open.sync="openTheme" :trigger="triggerTheme">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>Light</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Dark</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>

      <!-- 切换用户 -->
      <mu-button
        flat
        ref="userchange"
        slot="right"
        @click="openUser = !openUser"
      >
        <div class="user">
          <span>切换用户</span>
          <mu-icon value="expand_more"></mu-icon>
        </div>
      </mu-button>
      <mu-popover :open.sync="openUser" :trigger="triggerUser">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>个人中心</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>退出登录</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
    </mu-appbar>
  </div>
</template>

<script>
const menus = [
  {
    name: "首页",
    router: "index",
    icon: "home",
  },
  {
    name: "文章",
    router: "articles",
    icon: "note_add",
  },
  {
    name: "归档",
    router: "archives",
    icon: "drafts",
  },
  {
    name: "分类",
    router: "categories",
    icon: "dns",
  },
  {
    name: "标签",
    router: "tags",
    icon: "loyalty",
  },
  {
    name: "关于",
    router: "about",
    icon: "perm_identity",
  },
];
export default {
  props: {
    lightIndex: {
      type: Number,
      default: 0,
    },
    background: {
      type: String,
    },
  },
  data() {
    return {
      info: {
        menu: menus,
      },
      openTheme: false,
      triggerTheme: null,
      openUser: false,
      triggerUser: null,
      openWapMenu: false,
    };
  },
  mounted() {
    this.triggerTheme = this.$refs.theme.$el;
    this.triggerUser = this.$refs.userchange.$el;
  },
  methods: {
    toggleWapMenu(bool) {
      this.openWapMenu = bool;
    },
    gotoPage(item) {
      //单机当前路由不跳转
      if(this.$router.name === item.router){return}
      this.$router.push({
        name: item.router,
      });
    },
  },
};
</script>

<style scoped lang="less">
.header {
  position: fixed;
  z-index: 1501;
  width: 100%;
  top: 0;
}
.heder-avatar {
  margin-left: 20px;
  cursor: pointer;
}
.mu-appbar {
  .mu-flat-button {
    flex: 1;
  }
  /deep/ .mu-appbar-right {
    flex: 1;
  }
}
.user {
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    display: block;
    width: 60;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
  }
}
</style>