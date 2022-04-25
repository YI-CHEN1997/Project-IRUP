<template>

<main>
  <div class="container">
    <h1 class="title uppercase">news</h1>
    <div class="content">
      <div class="card box-shadow">
        <router-link :to="{ name: 'news1' }">
          <img src="@/assets/news:pic1.png" class="card-img-top" alt="align-items-auto">
          <div class="card-body">
            <h5 class="card-title ">IPSI-7 Summary Report and Presentation Abstracts..</h5>
            <h6 class="card-text">Written by admin on December 4, 2019</h6>
          </div>
        </router-link>        
      </div>

      <div class="card box-shadow">
        <router-link :to="{ name: 'news2' }">
          <img src="@/assets/news:pic1.png" class="card-img-top" alt="align-items-auto">
            <div class="card-body">
              <h5 class="card-title">29 May 2019: Seminar on.. </h5>
              <h6 class="card-text">Written by admin on December 4, 2019</h6>
            </div>
        </router-link>       
      </div>

      <div class="card box-shadow">
        <router-link :to="{ name: 'news3' }">
          <img src="@/assets/news:pic1.png" class="card-img-top" alt="align-items-auto">
          <div class="card-body">
            <h5 class="card-title">Gonglaoping Community, Fengyuan Dist., Taichung..</h5>
            <h6 class="card-text">Written by admin on November 26, 2019</h6>
          </div>
        </router-link>        
      </div>

      
    </div>

  </div>

</main>
   
</template>

<style lang="scss" scoped>

main {

  h1 {
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
  }

  .card {
    width: 350px;
    height: 300px;
    border-radius: 5px;
    position: relative;
    background-color: white;    
    border: 0px solid #fff;
    transition: .3s ease-in-out;

    a {
      text-decoration: none;
      color: #333;

      &:hover {
        color: #eee;
      }
    }

    &:hover {
      background-color: #333; 
    }

    .card-body {
      height: 150px;
    }
  }
}

  </style>