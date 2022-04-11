<template>

  <footer>
    <div class="contact">
      <h5 class="text-uppercase">contact</h5>
      <h6>145 Xingda Rd., Taichung 402, Taiwan R.O.C.</h6>
      <h6>+886-4-22859125</h6>
      <h6>cfwu@dragon.nchu.edu.tw</h6>
      <div class="icon">
        <a href="">
          <i class="fab fa-facebook-f fa-2x"></i>
        </a>
        <a href="">
          <i class="fab fa-youtube fa-2x"></i>
        </a>
        <a href="">
          <i class="fab fa-whatsapp fa-2x"></i>
        </a>
      </div>
      <h6 class="copyright">Powered by IRUP - International Rural-Up Partnership</h6>
    </div>
    <div class="background-color">
      <div class="background-pattern">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,218.7C672,224,768,160,864,117.3C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
    </div>
    <img src="../assets/footer-pattern.svg" alt="">

  </footer>

</template>

 <style scoped lang="scss">
  footer {
    position: relative;
    bottom: 0;
    text-align: center;
    height: 80vh;
    overflow: hidden;
    z-index: -99;

    .contact {
      padding-top: 300px;
    }

    .icon a {
      margin: 1rem;
      color: #333;
    }

    h5 {
      color: #66bb6a;
    }

    h6 {
      margin: 1rem 0 1.5rem 0;
    }

    .copyright {
      margin-top: 3rem;
    }

    .background-color {
      background: #F9F9FA;
      z-index: -100;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 90%;
      // overflow: hidden;
      line-height: 0;

      .background-pattern {  
        fill: #fff;

        svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 100%;
        }
      }
    }

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -99;
      height: 30%;
    }
  }

 </style>