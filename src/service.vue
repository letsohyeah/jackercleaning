<template>
  <div>
    <div class="servicebox">
      <h1><img src="img/part1_icon.svg">鐘點清潔會掃哪裡?時數怎麼算?</h1>
      <p>可以根據自己的需求查看會清潔的細項，並預估總共需要的時數，當天清潔人員會再討論狀況做些調整！</p>
      <a class="time_calc_btn" href="#">
        時數計算教學
      </a>
      <div class="service_container">
        <div class="service_col">
          <div class="service">
            <div class="service_img img1"></div>
            <div class="service_content">
              <div class="mb_arrow" v-on:click="e => e.target.parentElement.classList.toggle('actived')"></div>
              <h3>客廳清潔</h3>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="do"></div>沙發擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>地毯除塵
                </div>
                <div class="service_list_item">
                  <div class="do"></div>桌、櫃擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>地板清潔
                </div>
                <div class="service_list_item">
                  <div class="do"></div>燈具表面擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>雜物整理
                </div>
                <div class="service_list_item">
                  <div class="do"></div>垃圾打包
                </div>
              </div>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="dont"></div>沙發深層污漬
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>地毯深層污漬
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>天花板層板清潔
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>吊燈清潔
                </div>
                <sub>建議您與潔客可採用安全之方式拆下後，交由潔客做清洗。</sub>
              </div>
              <div class="cleantimebox">
                <div class="cleantimebox_left">
                  <i class="far fa-clock"></i>
                  <p>1~1.5/間</p>
                </div>
                <div class="cleantimebox_right">
                  <div class="timescale">
                    <div class="timescale_text">
                      <sub>普通清潔</sub>
                      <sub>空間大、許久未整理</sub>
                    </div>
                    <div class="timescale_line"></div>
                    <div class="timescale_time">
                      <sub>0.5 hr</sub>
                      <sub>1.5 hr</sub>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="service_img img2"></div>
            <div class="service_content">
              <div class="mb_arrow" v-on:click="e => e.target.parentElement.classList.toggle('actived')"></div>
              <h3>浴室清潔</h3>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="do"></div>馬桶刷洗
                </div>
                <div class="service_list_item">
                  <div class="do"></div>鏡面光亮
                </div>
                <div class="service_list_item">
                  <div class="do"></div>浴缸清潔
                </div>
                <div class="service_list_item">
                  <div class="do"></div>磁磚刷洗
                </div>
                <div class="service_list_item">
                  <div class="do"></div>洗手檯面清潔
                </div>
                <div class="service_list_item">
                  <div class="do"></div>浴門清潔
                </div>
                <div class="service_list_item">
                  <div class="do"></div>垃圾打包
                </div>
                <div class="service_list_item">
                  <div class="do"></div>清理水垢、皂垢
                </div>
                <div class="service_list_item">
                  <div class="do"></div>局部小範圍除霉
                </div>
              </div>
              <div class="cleantimebox">
                <div class="cleantimebox_left">
                  <i class="far fa-clock"></i>
                  <p>1~1.5/間</p>
                </div>
                <div class="cleantimebox_right">
                  <div class="timescale">
                    <div class="timescale_text">
                      <sub>普通清潔</sub>
                      <sub>許久未清潔</sub>
                    </div>
                    <div class="timescale_line"></div>
                    <div class="timescale_time">
                      <sub>1 hr</sub>
                      <sub>1.5 hr</sub>
                    </div>
                  </div>
                  <div class="extraclean">
                    <div class="extraclean_title">
                      <div>
                        <i class="fas fa-plus"></i>全區除黴
                      </div>
                      <div>
                        + 4hr
                      </div>
                    </div>
                    <span>因需用漂白水敷於發霉處3~4小時，因此全區除霉將耗時至少4~8小時(若霉菌已深入內部，有可能無法完全清除乾淨)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service_col">
          <div class="service">
            <div class="service_img img3"></div>
            <div class="service_content">
              <div class="mb_arrow" v-on:click="e => e.target.parentElement.classList.toggle('actived')"></div>
              <h3>廚房清潔</h3>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="do"></div>牆面擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>流理檯擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>瓦斯爐台
                </div>
                <div class="service_list_item">
                  <div class="do"></div>集油槽油污處理
                </div>
                <div class="service_list_item">
                  <div class="do"></div>抽油煙機
                </div>
                <div class="service_list_item">
                  <div class="do"></div>櫥櫃擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>地板清潔
                </div>
                <div class="service_list_item">
                  <div class="do"></div>冰箱外觀
                </div>
                <div class="service_list_item">
                  <div class="do"></div>洗碗、水槽清潔
                </div>
              </div>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="dont"></div>廚餘清理
                </div>
              </div>
              <div class="cleantimebox">
                <div class="cleantimebox_left">
                  <i class="far fa-clock"></i>
                  <p>1~2.5</p>
                </div>
                <div class="cleantimebox_right">
                  <div class="timescale">
                    <div class="timescale_text">
                      <sub>普通清潔</sub>
                      <sub>油污嚴重、許久未清潔</sub>
                    </div>
                    <div class="timescale_line"></div>
                    <div class="timescale_time">
                      <sub>1 hr</sub>
                      <sub>2.5 hr</sub>
                    </div>
                  </div>
                  <div class="extraclean">
                    <div class="extraclean_title">
                      <div>
                        <i class="fas fa-plus"></i>冰箱內部整理、清潔
                      </div>
                      <div>
                        + 1 ~1.5hr
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="service_img img4"></div>
            <div class="service_content">
              <div class="mb_arrow" v-on:click="e => e.target.parentElement.classList.toggle('actived')"></div>
              <h3>臥室清潔</h3>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="do"></div>衣櫃外觀擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>桌面清潔
                </div>
                <div class="service_list_item">
                  <div class="do"></div>棉被、衣物整理
                </div>
                <div class="service_list_item">
                  <div class="do"></div>家電外觀擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>地板清潔
                </div>
                <div class="service_list_item">
                  <div class="do"></div>雜物整理
                </div>
                <div class="service_list_item">
                  <div class="do"></div>床單換洗
                </div>
                <div class="service_list_item">
                  <div class="do"></div>垃圾打包
                </div>
              </div>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="dont"></div>家電拆卸清洗
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>整理衣櫃內部衣物
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>移動、搬移床鋪
                </div>
              </div>
              <div class="cleantimebox">
                <div class="cleantimebox_left">
                  <i class="far fa-clock"></i>
                  <p>0.5~1.5/間</p>
                </div>
                <div class="cleantimebox_right">
                  <div class="timescale">
                    <div class="timescale_text">
                      <sub>普通清潔</sub>
                      <sub>油污嚴重、許久未清潔</sub>
                    </div>
                    <div class="timescale_line"></div>
                    <div class="timescale_time">
                      <sub>0.5 hr</sub>
                      <sub>1 hr</sub>
                    </div>
                  </div>
                  <div class="extraclean">
                    <div class="extraclean_title">
                      <div>
                        <i class="fas fa-plus"></i>冰箱內部整理、清潔
                      </div>
                      <div>
                        + 1 ~1.5hr
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service_col">
          <div class="service">
            <div class="service_img img5"></div>
            <div class="service_content">
              <div class="mb_arrow" v-on:click="e => e.target.parentElement.classList.toggle('actived')"></div>
              <h3>陽台清潔</h3>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="do"></div>家電外觀擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>水管擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>地板刷洗
                </div>
                <div class="service_list_item">
                  <div class="do"></div>曬衣桿擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>雜物整理
                </div>
              </div>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="dont"></div>除蟲害
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>園藝、花草照料
                </div>
              </div>
              <div class="cleantimebox">
                <div class="cleantimebox_left">
                  <i class="far fa-clock"></i>
                  <p>1~1.5</p>
                </div>
                <div class="cleantimebox_right">
                  <div class="timescale">
                    <div class="timescale_text">
                      <sub>普通清潔</sub>
                      <sub>空間大、許久未整理</sub>
                    </div>
                    <div class="timescale_line"></div>
                    <div class="timescale_time">
                      <sub>1 hr</sub>
                      <sub>1.5 hr</sub>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="service_img img6"></div>
            <div class="service_content">
              <div class="mb_arrow" v-on:click="e => e.target.parentElement.classList.toggle('actived')"></div>
              <h3>其他清潔</h3>
              <span>非主要清潔內容，但可增加時數請清潔人員執行</span>
              <div class="extraclean_title">
                <h3>
                  <i class="fas fa-plus"></i>窗戶清潔
                </h3>
                <h3>
                  + 0.5hr/扇
                </h3>
              </div>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="do"></div>內側、底溝擦拭
                </div>
                <div class="service_list_item">
                  <div class="do"></div>玻璃窗內部清洗
                </div>
                <div class="service_list_item">
                  <div class="do"></div>紗窗內部清潔
                </div>
              </div>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="dont"></div>拆卸窗戶清洗
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>拆窗簾、清洗
                </div>
                <sub>以安全為前提下，『兩位』服務人員以上才提供拆洗窗戶、紗窗的服務，或者您可以自行拆下，再由服務人員做清洗</sub>
              </div>
              <div class="extraclean_title">
                <h3>
                  <i class="fas fa-plus"></i>衣物洗曬
                </h3>
                <h3>
                  + 1~2 hr
                </h3>
              </div>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="do"></div>衣物清洗
                </div>
                <div class="service_list_item">
                  <div class="do"></div>衣物晾曬
                </div>
                <div class="service_list_item">
                  <div class="do"></div>需備有洗衣機
                </div>
              </div>
              <div class="service_list">
                <div class="service_list_item">
                  <div class="dont"></div>特殊清洗衣物(乾洗)
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>手洗衣物
                </div>
                <div class="service_list_item">
                  <div class="dont"></div>整燙衣物
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="service_cta">開始預約></a>
    </div>
  </div>
</template>

<script>
window.$ = window.jQuery = require('jquery')
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.servicebox{
  padding: 2rem;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background: #F3F4F5;
}
.time_calc_btn{
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: #36BBD9;
  background: #FFF;
  border: 1px solid #36BBD9;
}
.service_container{
  margin: auto;
  margin-top: 50px;
  width: 100%;
  max-width: 1200px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  -ms-align-items: flex-start;
  align-items: flex-start;
}
.service_col{
  height: 1068px;
  width: calc(33% - 1rem);
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: flex-start;
  -ms-align-items: center;
  align-items: center;
}
.service{
  margin-bottom: 1rem;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 1px 2px 7px 7px #EEEEEE;
  flex-grow: 1;
}
.service_img{
  height: 8rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.img1{
  background-image: url("../img/service_img1.png");
}
.img2{
  background-image: url("../img/service_img2.png");
}
.img3{
  background-image: url("../img/service_img3.png");
}
.img4{
  background-image: url("../img/service_img4.png");
}
.img5{
  background-image: url("../img/service_img5.png");
}
.img6{
  background-image: url("../img/service_img6.png");
}
.service_content{
  padding: 20px;
}
.service_content h3{
  font-weight: 400;
}
.mb_arrow{
  display: none;
}
.service_list{
  margin-top: 1rem;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-wrap: wrap;
}
.service_list_item{
  width: 50%;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  flex-wrap: wrap;
}
.do{
  margin-right: 0.5rem;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: #000;
}
.dont{
  position: relative;
  margin-right: 0.5rem;
  width: 0.7rem;
  height: 0.15rem;
  background: #C9302C;
  transform: rotate(45deg);
}
.dont::after{
  width: 0.7rem;
  height: 0.15rem;
  background: #C9302C;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  transform: rotate(90deg);
}
.service_list sub{
  color: #9B9B9B;
  font-size: 0.8rem;
  margin-left: 1.2rem;
}
.cleantimebox{
  margin-top: 2rem;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
}
.cleantimebox_left{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: space-between;
  -ms-align-items: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
}
.cleantimebox_left i{
  font-size: 2rem;
}
.cleantimebox_right{
  width: calc(100% - 5rem);
}
.timescale{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: space-between;
  height: 4rem;
}
.timescale_text{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
}
.timescale_line{
  width: 100%;
  height: 3px;
  background: #eeeeee;
}
.timescale_time{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  -ms-align-items: center;
  align-items: center;
}
.extraclean_title{
  margin-top: 0.5rem;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  -ms-align-items: center;
  align-items: center;
}
.extraclean_title i{
  margin-right: 0.5rem;
  font-size: 0.8rem;
  color: #9B9B9B;
}
.extraclean_title h3 i{
  font-size: 1rem;
}
.service_content span{
  font-size: small;
  color: #9B9B9B;
}
.service_cta{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 3rem;
  height: 3rem;
  width: 300px;
  color: #fff;
  background: #36BBD9;
}
@media (max-width: 768px) {
  .servicebox{
    text-align: center;
    padding: 3rem 1rem;
  }
  .servicebox h1{
    font-size: 1.2rem;
  }
  .service_container{
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .service_col{
    width: 100%;
    height: auto;
  }
  .service_content{
    position: relative;
    text-align: left;
    transition: 0.5s;
    height: 4rem;
  }
  .service_content.actived{
    height: auto;
  }
  .service_content span{
    opacity: 0;
  }
  .service_content.actived span{
    opacity: 1;
  }
  .cleantimebox{
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .cleantimebox_right{
    margin-top: 1rem;
    width: 100%;
  }
  .mb_arrow{
    display: block;
    position: absolute;
    top: 1.6rem;
    right: 1.5rem;
    width: 0.6rem;
    height: 0.6rem;
    transform: rotate(45deg);
    border-bottom: 2px solid #3E4459;
    border-right: 2px solid #3E4459;
  }
}
</style>
