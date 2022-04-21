<template>

<main>
  <div class="container">
    <h1 class="title uppercase">videos</h1>
    <div class="content">
      <div class="card box-shadow">
        <a target="_blank" href="https://www.youtube.com/watch?v=3F2DDJgNxpk">
        <iframe  class="card-img-top" src="https://www.youtube-nocookie.com/embed/3F2DDJgNxpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title ">2019 Rural UP Program at Liyu community</h5>
            <h6 class="card-text">Duration: 14.03 -- 31/07/2019<br>關於：國際洄游駐村共學計畫</h6>
          </div>
        </a>        
      </div>

      <div class="card box-shadow">
        <a target="_blank" href="https://www.youtube.com/watch?v=GZDHQSjEcAo">
          <iframe class="card-img-top" src="https://www.youtube-nocookie.com/embed/GZDHQSjEcAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-body">
              <h5 class="card-title">「鱉」不住就慘了</h5>
              <h6 class="card-text">Duration: 14.03 -- 31/07/2019<br>關於：苗栗縣三義鄉鯉魚社區</h6>
            </div>
        </a>       
      </div>

      <div class="card box-shadow">
        <a target="_blank" href="https://www.youtube.com/watch?v=NMI7qeVAK68">
          <iframe class="card-img-top" src="https://www.youtube.com/embed/NMI7qeVAK68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Satoyama landscape at Liyu community</h5>
            <h6 class="card-text">Duration: 14.03 -- 31/07/2019<br>關於：苗栗縣三義鄉鯉魚社區</h6>
          </div>
        </a>        
      </div>

      <div class="card box-shadow">
        <a target="_blank" href="https://www.youtube.com/watch?v=ySTtauAddoI">
          <iframe class="card-img-top" src="https://www.youtube-nocookie.com/embed/ySTtauAddoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Satoyama landscape at Gonglaoping community</h5>
            <h6 class="card-text">Duration: 14.03 -- 31/07/2019<br>關於：台中市豐原區公老坪社區</h6>
          </div>
        </a>        
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
    width: 450px;
    height: 400px;
    border-radius: 5px;
    position: relative;
    background-color: white;    
    border: 0px solid #fff;
    transition: .3s ease-in-out;

    iframe {
      height: 85%;
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