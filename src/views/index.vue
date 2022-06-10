<template>
  <div class="page">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="waterfall-wrapper">
        <ul ref="leftWaterfall" class="left-waterfall">
          <li v-for="(item, index) in leftItems" :key="index" @click="toDetail(item, index)">
            <item :itemCard="item" />
          </li>
        </ul>
        <ul ref="rightWaterfall" class="right-waterfall">
          <li v-for="(item, index) in rightItems" :key="index" @click="toDetail(item, index)">
            <item :itemCard="item" />
          </li>
        </ul>
      </div>
    </van-list>
  </div>
</template>

<script>
import { List, Toast } from 'vant';
import item from './item.vue';
export default {
  components: {
    [List.name]: List,
    item,
  },
  data() {
    let cityid = '226';
    return {
      imgCardList: [],
      leftItems: [],
      rightItems: [],

      loading: true,
      finished: false,

      pageIndex: 0,
      pageSize: 10,
    };
  },

  async created() {
    await this.onLoad();
  },
  mounted() {},
  methods: {
    async onLoad() {
      this.pageIndex++;
      console.log(`${(this.pageIndex - 1) * this.pageSize + 1}-${this.pageIndex * this.pageSize}`);

      this.getList({
        section: `${(this.pageIndex - 1) * this.pageSize + 1}-${this.pageIndex * this.pageSize}`,
      });
    },

    updateWaterfall() {
      return new Promise((resove, reject) => {
        if (this.$refs.leftWaterfall) {
          const leftHeight = this.$refs.leftWaterfall.clientHeight;
          const rightHeight = this.$refs.rightWaterfall.clientHeight;
          if (this.imgCardList && this.imgCardList.length) {
            const item = this.imgCardList.shift();
            if (leftHeight <= rightHeight) {
              this.leftItems.push(item);
            } else {
              this.rightItems.push(item);
            }
            this.$nextTick(async () => {
              await this.updateWaterfall();
              resove();
            });
          } else {
            resove();
          }
        }
      });
    },

    toDetail() {
      console.log('查看详情..');
    },

    mockData() {
      return {
        code: 'ok',
        msg: '请求成功',
        data: {
          records: [
            {
              departCityName: '炎星',
              commentNum: '3',
              commentScore: '3.0',
              imageUrl: require('../assets/demo/1.jpg'),
              name: 'vue两列列表瀑布流',
              price: '61.0',
            },
            {
              departCityName: '木星',
              commentNum: '1295',
              commentScore: '4.6',
              imageUrl: require('../assets/demo/2.jpg'),
              labels: '视觉表现,参差不齐,多栏布局',
              name: '瀑布流又称瀑布流式布局',
              price: '148.0',
            },
            {
              departCityName: '土星',
              commentNum: '0',
              commentScore: '0.0',
              describe: '随着页面滚动条向下滚动',
              imageUrl: require('../assets/demo/3.jpg'),
              name: '瀑布流是一种允许用户不断往下滑动',
              price: '8.8',
            },
            {
              departCityName: '上海',
              commentNum: '13388',
              commentScore: '4.92',
              describe: '页面自动刷新呈现内容的交互形式',
              imageUrl: require('../assets/demo/4.jpg'),
              name: '定宽而不定高的设计让页面',
              price: '480.0',
            },
            {
              departCityName: '水海',
              commentNum: '2',
              imageUrl: require('../assets/demo/5.jpg'),
              memberImage: require('../assets/demo/14.jpg'),
              membername: '布局模式',
              name: '区别于传统的矩阵式图片',
              viewNum: '55',
            },
            {
              commentNum: '0',
              imageUrl: require('../assets/demo/6.jpg'),
              memberImage: require('../assets/demo/13.jpg'),
              membername: '分页查找定位更方便',
              name: '瀑布流是更好的选择',
              viewNum: '12',
            },
            {
              departCityName: '上京',
              distance: 0,
              imageUrl: require('../assets/demo/7.jpg'),
              name: '信息与搜索匹配比较模糊时，瀑布流是更好的选择。',
              price: '1035',
            },
            {
              departCityName: '圭海',
              imageUrl: require('../assets/demo/8.jpg'),
              name: '如果信息相对独立的话，可以使用瀑布流，让用户同时接受来自不同地方的信息',
              price: '3354',
            },
            {
              commentNum: '20140',
              commentScore: '4.93',
              describe: '瀑布流给人的直观印象',
              imageUrl: require('../assets/demo/9.jpg'),
              name: '就是同时显示的信息与用户搜索的匹配度大致一样',
              price: '80.0',
            },
            {
              commentNum: '657',
              commentScore: '4.8',
              describe: '温泉养生园传承中西养生理论',
              imageUrl: require('../assets/demo/10.jpg'),
              name: '如果用分页显示的话用户务必会频繁的翻页',
              price: '59.0',
            },
          ],
        },
      };
    },

    getList(reqParam) {
      // 模拟接口请求：
      const requestApi = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.mockData());
        }, 800);
      });

      return requestApi.then(async (res) => {
        // let res = this.mockData();
        if (res.code == 'ok' && res.data) {
          if (res.data.records && res.data.records.length) {
            this.imgCardList = res.data.records;
            await this.updateWaterfall();
          } else {
            this.finished = true;
          }
        } else {
          this.finished = true;
          Toast(res.msg, {
            duration: 1500,
          });
        }
        this.$nextTick(() => {
          this.loading = false;
        });
        return true;
      });
    },
  },
};
</script>

<style lang="less">
.waterfall-wrapper {
  padding: 10px 12px 0;
  overflow: hidden;
  ul {
    width: 48.85%;
  }
  li {
    width: 100%;
    margin-bottom: 12px;
    div {
      .van-image {
        width: 100%;
        display: block;
      }
    }
  }
  .left-waterfall {
    float: left;
  }
  .right-waterfall {
    float: right;
  }
}
</style>
