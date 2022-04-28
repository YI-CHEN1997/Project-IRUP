<template>
<div class="list-card col-xxl-10 col-lg-10 col-md-10 mb-3" >
    <div class="d-flex justify-content-center">   
        <div class="date">
            <div class="circle">
                <div class="year-org-group">
                    <h3 class="year mb-2">{{info.date}}</h3>
                    <div class="d-flex justify-content-end">
                        <h5 class="org">IRUP</h5>
                    </div> 
                </div>
            </div>
        </div>
        <div class="category">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="category-title">Research&Policy</h3>
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
    @media screen and (max-width:1199px){
        .list-card.list-card{
            --year-font-size: 1.6rem;
        }
        .refrence{
            font-size: 1.4rem !important;
        }
        .org.org{
            letter-spacing: .13em;
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
            margin-right: 4rem;
        }
        .refrence{

            font-size: 1.4rem !important;
        }
        .org.org{
            letter-spacing: .14em;
        } 
        .description, 
        .org {
            font-size: 1rem !important;
        }
    }
    @media screen and (max-width:767px){
        .list-card.list-card{
            --year-font-size: 1.2rem ;
        }
        .date.date{
            margin-right: 3.6rem;
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
            margin-right: 3.2rem;
        }
        .refrence{
            font-size: .8rem !important;
        } 
        .arrow.arrow{
            margin-right: .3rem;
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
        margin-right: 4rem;
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
    }
    .year{
        font-size: var(--year-font-size) !important;
        letter-spacing: .06em;
    }
    .org{
        letter-spacing: .3em;
    }
    .category{
        margin-top: calc( var(--year-font-size) * 0.4 );
    }
    .category-title{ 
        font-size: var(--year-font-size) !important;
    }
    h2 , h3 , h4 , h5{
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