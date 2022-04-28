<template>
<div class="list-card col-xxl-10 col-lg-10 col-md-10 mb-3" >
    <div class="d-flex justify-content-center">   
        <div class="date">
            <div class="circle">
                <div class="year-org-group">
                    <h2 class="year">{{info.date}}</h2>
                    <div class="d-flex justify-content-end">
                        <h4 class="org">IRUP</h4>
                    </div> 
                </div>
            </div>
        </div>
        <div>
            <div class="category d-flex justify-content-between align-items-center">
                <h2 class="category-title">Research&Policy</h2>
                <router-link to="https://collections.unu.edu/eserv/UNU:7506/SITR_vol5_fullset_web.pdf">
                    <div class="link d-flex align-items-center">
                        <i class="arrow fa-solid fa-angles-right"></i>
                        <h4 class="refrence">Refrence</h4>
                    </div>
                </router-link>
            </div>
            <h5 class="description">
                Understanding the multiple values associated with sustainable use in SEPLS
            </h5>
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
    /* @media screen and (max-width:1399px){
        .description, 
        .org {
            font-size: 1.2rem !important;
        }
    } */
    @media screen and (max-width:1199px){
        .list-card.list-card{
            --year-font-size: 1.6rem;
        }
        .refrence{
            font-size: 1.4rem !important;
        }
        .description, 
        .org {
            font-size: 1.2rem !important;
        }
    }
    @media screen and (max-width:991px){
        .list-card.list-card{
            --year-font-size: 1.6rem;
        }
        .date.date{
            margin-right: 3rem;
        }
        .refrence{

            font-size: 1.4rem !important;
        }
        .description, 
        .org {
            font-size: 1rem !important;
        }
    }
    @media screen and (max-width:767px){
        .list-card.list-card{
            --year-font-size: 1.4rem ;
        }
        .date.date{
            margin-right: 3rem;
        }
        .refrence{
            font-size: 1.2rem !important;
        } 
        .arrow.arrow{
            margin-right: .5rem;
        }
        .description, 
        .org{
            font-size: 1rem !important;
        }
    }

    @media screen and (max-width:480px) {
        .list-card.list-card{
            --year-font-size: 1rem ;
        }
        .date.date{
            margin-right: 3rem;
        }
        .refrence{
            font-size: .8rem !important;
        } 
        .org.org{
            letter-spacing: .08em;
        } 
        .description, 
        .org{
            font-size: .8rem !important;
        }  
    }

    .list-card{
        --year-font-size: 2rem;
    }
    .date{
        width: calc( var(--year-font-size) * 3.6 );
        margin-right: 2rem;
        /* width: 113px; */
        
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
        font-size: var(--year-font-size) !important;
        position: relative;
    }
    .org{
        position: absolute;
        letter-spacing: .1em;
    }
    .category{
        margin-top: calc( var(--year-font-size) * 0.4 );
    }
    .category-title{
        
        font-size: var(--year-font-size) !important;
    }
    h2 , h4 , h5{
        margin-bottom: 0;
    }
    a{
        text-decoration: none;
        color: #66BB6A;
    }
    .arrow{
        margin-right: 1rem;
    }    
    .org , .description{
        color: rgb(0, 0, 0, 0.4);
    }
</style>