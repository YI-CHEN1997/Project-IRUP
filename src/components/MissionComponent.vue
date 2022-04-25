<template>

<div class="content">
  <!-- <div class="mission-vision m-4">
    <h1 class="title uppercase">mission<br>and<br>vision</h1>
    <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
  </div> -->

  <div class="mission">
    <h1 class="title uppercase text-center">mission & vision</h1>
    <h6>To tackle the critical issue, the National Chung Hsing University and Texas A&M University set up joint centers to promote sustainable agriculture and rural development. Implementation promotes activities consistent with existing fundamental principles and the nation’s policy, such as the Rural Regeneration in Taiwan. Our core vision is to build on positive human-agriculture-nature relationships.</h6>

    <!-- <div class="background-pattern1"></div>
    <div class="background-pattern2"></div> -->
            
  </div>
</div>


  

</template>

<style lang="scss" scoped>

.content {
  display: flex;
  flex-direction: row;

  .mission-vision {

    .dots {
      display: flex;
      flex-direction: row;

      .dot {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: #66bb6a;
        margin: 6px;
      }
    }
  }
}
  
  .mission { 
    text-align: justify;
    border-radius: 5px;
    line-height: 2rem;
    width: 100%;
    background: #66bb6a;
    // background-image: url("../assets/bg-wave.svg");
    background-size: contain;
    background-repeat: no-repeat;
    padding: 4rem;
    color: #eee;
    z-index: 2;

    .background-pattern1 {
      width: 650px;
      height: 190px;
      border-radius: 5px;
      border: 2px solid #66bb6a;
      position: relative;
      top: -145px;
      right: 0px;
      z-index: -100;
    }

    .background-pattern2 {
      width: 650px;
      height: 190px;
      border-radius: 5px;
      border: 1px solid #66bb6a;
      position: relative;
      top: -320px;
      right: -20px;
      z-index: -100;
    }

    @media (max-width: 850px) {
      width: 50vh;
      padding: 2rem;
      color: #fff;
      background-image: none;
      background: #66bb6a;

      .background-pattern1, .background-pattern2 {
        display: none;
      }
    }
  }

</style>