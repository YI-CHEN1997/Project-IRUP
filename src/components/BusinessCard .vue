<template>
    <div class="cards col-md-5 col-sm-6 px-5 py-4 m-4">
        <div class="d-flex">
            <div>
            <img :src="info.img">
            </div>
            <div class="d-flex flex-column justify-content-center m-4">
                <div class="mb-3">
                    <h5>{{info.name}}</h5> 
                    <img src="edit-2-fill.svg" type="button">
                    <img src="delete-bin-fill.svg" type="button">
                </div>
                <div class="contact">
                    <p><img src="phone.svg"> {{info.phone}}</p>
                    <p><img src="email.svg"> {{info.email}}</p>
                </div>
            </div>
        </div>
        <div class="">
            <p class="text-break my-3">
                {{info.docs}}
            </p>
        </div>
    </div>
</template>
<script>


export default {
    setup() {
        
    },
    props:{ info : Object}
}
</script>

<style scoped>
    .cards{
        box-shadow: 0 0 30px 1px rgb(220, 220, 220);
        background-color: #fff;
    }
    .contact p{
        margin-bottom: 0px;
    }
    img{
        border-radius: 99em;
        max-height: 12vw;
    }
</style>