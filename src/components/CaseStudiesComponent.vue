<template>
  
<main>
  <div class="container">
    <h1 class="title uppercase">case studies</h1>

    <div class="content">      
      <div class="card h-100">
        <router-link :to="{ name: 'case1' }">
          <div class="img">
            <img src="@/assets/Case_Studies_1.png" class="card-img-top" alt="align-items-auto">
          </div>
          <div class="card-body">
            <h5 class="card-title">Biodiversity Conservation, Green Production, and Rural Development</h5>
            <h6 class="card-text">Farmers of Liyu community..</h6>
          </div>
        </router-link>
        
        </div>
      
        <div class="card h-100">
          <router-link :to="{ name: 'case2' }">
            <div class="img">
              <img src="@/assets/Case_Studies_2.png" class="card-img-top" alt="align-items-auto">
              </div>
              <div class="card-body">
                <h5 class="card-title">Sustainable Rural Development Practice</h5>
                <h6 class="card-text">The Gonglaoping community..</h6>
              </div>
          </router-link>          
        </div>
       
        <div class="card h-100">
          <router-link :to="{ name: 'case3' }">
            <div class="img">
              <img src="@/assets/Case_Studies_3.png" class="card-img-top" alt="align-items-auto">
              </div>
              <div class="card-body">
                <h5 class="card-title">Gonglaoping Community</h5>
                <h6 class="card-text">located a flat terrace..</h6>
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
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    position: relative;
    background-color: white;
    border: 0px solid #fff;
    transition: .3s ease-in-out;

    .img {
      height: 200px;
      overflow: hidden;
    }

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