<template>
<div class="list-card col-xxl-8 col-xl-11 col-lg-12 col-md-12 col-sm-12 mb-3" >
    <div class="d-flex justify-content-center">   
        <div class="date">
            <div class="circle">
                <div class="year-org-group">
                    <h3 class="year">{{info.date}}</h3>
                    <div class="d-flex justify-content-end">
                        <!-- <h5 class="org">IRUP</h5> -->
                    </div> 
                </div>
            </div>
        </div>
        <div>
            <div class="category d-flex justify-content-between">
                <h3 class="category-title">Research&Policy</h3>
                <router-link to="">
                    <div class="link d-flex align-items-center">
                        <i class="fa-solid fa-angles-right me-3"></i>
                        <a href=""><h4 class="refrence">Refrence</h4></a>
                    </div>
                </router-link>
            </div>
            <h6 class="description">
                Understanding the multiple values associated with sustainable use in SEPLS
            </h6>
        </div>
    </div>
    <slot>
        
    </slot>
</div>    
</template>
<script>

export default {
    setup() {},
    props:{
        'info' : Object
    },
}
</script>

<style scoped>
  
    @media screen and (max-width:991px) {
        .list-card.list-card{
            --year-font-size: 1.6rem ;
        }
        .refrence{
            font-size: 1.4rem
        }
        .description, 
        .org {
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width:767px) {
        .list-card.list-card{
            --year-font-size: 1.4rem ;
        }
        .date.date{
        margin-right: 2rem;
        }
        .refrence{
            font-size: 1.2rem
        } 
        .description, 
        .org{
            font-size: 1rem;
        }
    }
    @media screen and (max-width:480px) {
        .list-card.list-card{
            --year-font-size: 1.2rem ;
        }
        .date.date{
            margin-right: 2.4rem;
        }
        .refrence{
            font-size: 1rem
        }    
    }

    .list-card{
        --year-font-size: 2rem;
    }
    .date{
        width: calc( var(--year-font-size) * 3.2 );
        margin-right: 1.5rem;
    }    
    .circle{
        width: calc( var(--year-font-size) * 2 );
        height: calc( var(--year-font-size) * 2 );
        border: solid 1px rgb(174, 220, 176);
        border-radius: 99rem;
        position: relative;
    }
    .circle::before{
        content: "";
        position: absolute;
        top: 5%;
        left: 20%;
        z-index: 0;
        width: calc( var(--year-font-size) * 1.8 );
        height: calc( var(--year-font-size) * 1.8 );
        background-color: rgba(174, 220, 176, 0.5);
        border-radius: 99rem;
    }
    .year-org-group{
        position: absolute;
        top: 20%;
        left: 60%;
        z-index: 1;
    }
    .year{
        font-size: var(--year-font-size);
        position: relative;
    }
    .org{
        position: absolute;
        letter-spacing: .18rem;
    }
    .category{
        margin-top: calc( var(--year-font-size) * 0.4 );
        height: calc( var(--year-font-size) * 1.6 );
    }
    .category-title{
        
        font-size: var(--year-font-size);
    }
    /* h4{
        margin-bottom: 0;
    } */
    a{
        text-decoration: none;
        color: #66BB6A;
    }    
    .org , .description{
        color: rgb(0, 0, 0, 0.4);
    }
</style>