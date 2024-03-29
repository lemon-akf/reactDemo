<template>
  <div class="notice_text">

    <span v-if="noticeList.length === 0 ">
        暂无通知 
    </span>
    <span v-else>
      <a v-for="(item,index) in noticeList.slice(0,5)" @click="showDetail(item.noticeId)">
        <i class-"el-icon paperclip" style="color: blue;"></i>
      </a>
    </span>

  </div>
</template>

<script>
  export default {
    data:{

    },
    methods:{
      getNoticeList(){
        listNoticeFront(this.queryParams).then((response)=>{
          this.noLiceList = response.rows;
          response.rows

        }
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>