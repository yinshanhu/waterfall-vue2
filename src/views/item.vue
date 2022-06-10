<template>
  <div class="img-card">
    <div class="img-box" v-if="itemCard.imageUrl">
      <img
        class="pro-img"
        v-lazy="{
          src: itemCard.imageUrl,
          loading:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH6SURBVHhe7dJBDQAgDAAx/Fsl2WMKMMH9mlRCz52F78QiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIvA7AMnDIBNWX3pnQAAAABJRU5ErkJggg==',
        }"
      />
      <div class="city-box">
        <div class="city" v-if="itemCard.departCityName">
          <img src="../assets/icon/city.png" alt="" />
          <p class="one">{{ itemCard.departCityName }}出发</p>
        </div>
      </div>
    </div>

    <p class="title more">{{ itemCard.name }}</p>

    <div class="tag-list" v-if="itemCard.labels">
      <p class="tag one">{{
        itemCard.labels
          .split(',')
          .filter((f) => f)
          .slice(0, 2)
          .join(',')
      }}</p>
    </div>

    <div class="subtitle" v-if="itemCard.describe"
      ><p class="one">{{ itemCard.describe }}</p></div
    >

    <p class="comment" v-if="itemCard.commentScore > 0"
      >{{ itemCard.commentScore }}满意度&nbsp;&nbsp;&nbsp;{{ itemCard.commentNum }}人点评</p
    >

    <div class="memberinfo" v-if="itemCard.memberImage">
      <img class="photo" :src="itemCard.memberImage" alt="" />
      <p class="member-name one">{{ itemCard.membername }}</p>
      <div class="viewinfo">
        <img class="icon" src="../assets/icon/view.png" alt="" />
        <p>{{ itemCard.viewNum }}</p>
      </div>
    </div>

    <div class="price" v-if="itemCard.price > 0 && Math.floor(itemCard.price) > 0"
      ><p class="sign">¥</p><p class="amount fontNum">{{ Math.floor(itemCard.price) }}</p
      ><p class="qi">起</p></div
    >
  </div>
</template>

<script>
import { Image } from 'vant';
export default {
  components: {
    [Image.name]: Image,
  },
  props: {
    itemCard: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style scoped lang="less">
.one {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.img-card {
  .img-box {
    position: relative;
    .pro-img {
      width: 100%;
      border-radius: 8px;
    }
    .city-box {
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      padding: 0 8px 9px 8px;
      box-sizing: border-box;
      display: flex;
      .city {
        font-size: 10px;
        color: #ffffff;
        padding: 3px 6px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 12px;
        display: flex;
        align-items: center;
        max-width: 91.5%;
        img {
          width: 8px;
          height: 13px;
          margin-right: 5px;
        }
      }
    }
  }
  .title {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #333333;
  }
  .tag-list {
    margin-top: 5px;
    display: flex;
    .tag {
      padding: 3px 4px;
      color: #62cfd1;
      font-size: 10px;
      background: rgba(98, 207, 209, 0.1);
      border-radius: 4px;
      margin-right: 4px;
    }
  }
  .subtitle {
    margin-top: 6px;
    border-radius: 4px;
    display: flex;
    p {
      padding: 3px 4px;
      color: #ff921e;
      font-size: 10px;
      background-color: rgba(255, 146, 30, 0.1);
    }
  }
  .comment {
    margin-top: 5px;
    font-size: 12px;
    color: #999999;
  }
  .price {
    margin-top: 5px;
    color: #999999;
    font-size: 12px;
    display: flex;
    align-items: baseline;
    .sign {
      font-weight: 600;
      color: #ff7a2d;
      font-size: 12px;
    }
    .amount {
      color: #ff7a2d;
      font-size: 18px;
      margin-right: 2px;
    }
    .qi {
      margin-bottom: 2px;
      align-self: flex-end;
    }
  }
  .memberinfo {
    display: flex;
    align-items: center;
    margin-top: 8px;
    .photo {
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background: #d8d8d8;
    }
    .member-name {
      color: #666666;
      font-size: 11px;
      margin-left: 4px;
      flex: 1;
    }
    .viewinfo {
      display: flex;
      align-items: center;
      .icon {
        width: 16px;
        height: 16px;
        display: block;
        margin-right: 4px;
      }
      p {
        color: #666666;
        font-size: 11px;
      }
    }
  }
}
.more {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
