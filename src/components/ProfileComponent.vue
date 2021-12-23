<template>
    <div>
    <div class="row p-0 m-0 no-gutter mt-md-5 font-eng">
        <!--me info-->
        <div class="col-md-8 bg-dark pb-5 mt-4  offset-md-2" >
            <h5 class="text-white border-bottom  mt-2 pb-3" >Profile <i class="fa fa-user"></i></h5>
            <div class="row  no-gutter">
                <!--photo-->
                <div class="col-md-6">
                    <img  src="./../assets/imgs/alan.png" class="img-fluid rounded mt-5" >
                </div>

                <!--name ,phone , age and mail -->
                <div class="col-md-6 text-info mt-5">
                    <ul class="list-group border-0">
                        <li class="list-group-item skill-hover p-2 bg-dark">Name : Shine Shine</li>
                        <li class="list-group-item skill-hover p-2 bg-dark">Age : 23</li>
                        <li class="list-group-item skill-hover p-2 mt-1 bg-dark "><span class="material-icons">phone</span>
 : <a href="tel:007" class="text-info">007</a></li>
                        <li class="list-group-item skill-hover p-2 mt-1 bg-dark"><span class="material-icons">email</span>
 :<a href="mailto:example@gmail.com" class="text-info"> example@gmail.com</a></li>
                        <li class="list-group-item skill-hover p-2 mt-1 bg-dark"><span class="material-icons">
location_on
</span>
:  Burmese/Mandalay/Kyaukpadaung </li>
                        <li class="list-group-item skill-hover p-2 mt-1 bg-dark">
                           <img src="./../assets/imgs/social/fb.png" style="width:25px;height:25px;" class="ml-3">
                        <img src="./../assets/imgs/social/youtube.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/twitter.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/instagram.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/github.svg" style="width:25px;height:25px;" class="ml-1">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        
    </div>

</template>

<script>
    export default {
        name: "Profile",
    }
</script>

<style scoped>
    .box {
        border-radius:10px;
        box-shadow: 10px 5px 20px #282828,0px 5px 40px #333333,-20px 5px 40px #333333;
    }
</style>