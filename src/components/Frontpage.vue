<template>
  <div class="Frontpage">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-light">
        <el-col :span="24"><div class="grid-content bg-purple-light">
           <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div></el-col>
      </div></el-col>
    </el-row>
  </div>
</template>


<style>
  .el-row {
    margin-bottom: 20px;
    margin-top: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  /** Carousel */
     .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__container {
        height: 370px;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
      /** Carousel */
</style>