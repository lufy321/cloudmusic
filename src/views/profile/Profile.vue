<template>
  <nav-bar class="nav-bar">
  <template v-slot:left>
    <svg class="icon" aria-hidden="true" @click="$router.back(-1)">
      <use xlink:href="#icon-jiantoufanhui"></use>
    </svg>
  </template>
  <template v-slot:default>{{user.userDeatil.profile.nickname}}</template>
  <template v-slot:right>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gengduo3"></use>
    </svg>
  </template>
  </nav-bar>
  <div class="profile">

    <div class="top-content">
      <div class="header">
        <div class="header-icon">
          <img :src="user.userDeatil.profile.avatarUrl" alt="">
        </div>
        <div class="header-info">
          <div class="info-show">
            <div class="fans-count">
              <div class="number">{{user.userDeatil.profile.followeds}}</div>
              <div class="fans-title">粉丝</div>
            </div>
            <div class="subscribed-count">
              <div class="number">{{user.userDeatil.profile.follows}}</div>
              <div class="subscribed-title">关注</div>
            </div>
            <div class="level-count">
              <div class="number">{{user.userDeatil.level}}</div>
              <div class="level-title">等级</div>
            </div>
          </div>
          <div class="edit-info">
            编辑信息
          </div>
        </div>
      </div>
      <p class="sign">{{user.userDeatil.profile.signature}}</p>
      <div class="music-label">+ 添加音乐标签</div>
    </div>
    <van-tabs v-model:active="active" swipeable>
      <van-tab title="主页">
        <div class="base-info">
          <h3>基本信息</h3>
          <p>村龄: 5年(2016年01月注册)</p>
          <p>性别: 男</p>
          <p>年龄: 95后 处女座</p>
        </div>
      </van-tab>
      <van-tab title="动态">

      </van-tab>
      <van-tab title="博客">

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import {mapState} from 'vuex';
export default {
  name: "Profile",
  components: {
    NavBar
  },
  computed: {
    ...mapState(['user'])
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .nav-bar {
    .icon {
      width: 20px;
      height: 20px;
    }
  }
  .profile {
    font-size: 14px;
    padding: 8px;
    .top-content {
      .header {
        display: flex;
        .header-icon {
          width: 100px;
          img {
            border-radius: 50%;
            width: 80px;
            height: 80px;
          }
        }
      }
    }
    .header-info {
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      flex-direction: column;
      .info-show {
        display: flex;
        justify-content: space-evenly;
        .number {
          text-align: center;
        }
        .fans-count {
          .fans-title {

          }
        }
        .subscribed-count {
          .subscribed-title {

          }
        }
        .level-count {
          .level-title {

          }
        }
      }

      .edit-info {
        border: 1px solid #F3F3F3;
        border-radius: 5px;
        text-align: center;
      }
    }
    .sign {
      margin-top: 5px;
    }
    .music-label {
      margin-top: 5px;
      text-align: center;
      height: 20px;
      line-height: 20px;
      width: 100px;
      font-size: 13px;
      background: #F3F3F3;
      border-radius: 5px;
    }
    .base-info {
      margin-top: 10px;
      background: #F3F3F3;
      border-radius: 5px;
      height: 120px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content:space-evenly;
    }
  }
</style>