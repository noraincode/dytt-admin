<template>
  <div class="side-bar">
    <div class="icon">
      <el-tooltip class="pop-icon" effect="dark" content="设置" placement="right">
        <router-link to="/setting"><i class="icono-sliders"></i></router-link>
      </el-tooltip>
    </div>
    <div class="icon icon-group">
      <el-tooltip class="pop-icon" effect="dark" content="资源列表" placement="right">
        <router-link to="/movielist"><i class="icono-textAlignLeft"></i></router-link>
      </el-tooltip>
      <el-tooltip class="pop-icon" effect="dark" content="数据源管理" placement="right">
        <router-link to="/source"><i class="icono-sitemap"></i></router-link>
      </el-tooltip>
      <el-tooltip class="pop-icon" effect="dark" content="用户管理" placement="right">
        <router-link to="/admin"><i class="icono-smile"></i></router-link>
      </el-tooltip>
    </div>
    <div class="icon">
      <el-tooltip class="pop-icon" effect="dark" content="注销" placement="right">
        <router-link to="/login"><i class="icono-power"></i></router-link>
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="less" scoped>
.side-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0px;
  top: 0px;
  width: 60px;
  height: 100%;
  background: #264273;
}

.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 26px;
  color: #fff;
  cursor: pointer;
  i{
    transform: scale(0.8);
  }
  .pop-icon{
    border-radius: 50%;
    transition: all .3s ease;
    &:hover{
      background: #F9FAFC;
      border-radius: 50%;
      i{
        color: #264273;
      }
    }
  }
  .router-link-active{
    background: #F9FAFC;
    border-radius: 50%;
    i{
      color: #264273;
    }
  }
}

.icon-group{
  flex-direction: column;
  height: 150px;
  justify-content: space-around;
}
</style>
