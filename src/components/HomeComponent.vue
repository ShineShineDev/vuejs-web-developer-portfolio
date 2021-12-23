<template>
    <div class="w-100" >

        <div class="container">
            <div class="row  m-0">

                <!--self introduction  -->
                <div class="col-md-6  mt-5 offset-md-1" >
                    <div class="mt-md-5 pl-md-4"><br>
                        <img src="./../assets/imgs/social/fb.png" style="width:25px;height:25px;" class="ml-3">
                        <img src="./../assets/imgs/social/youtube.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/twitter.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/instagram.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/github.svg" style="width:25px;height:25px;" class="ml-1">
                        <h3 class="mt-3 text-info ml-3">
                            I am <i class="text-light">Shine Shine</i>
                        </h3>
                        <p class="mt-3 text-info ml-3">
                            FRONTEND & BACKEND DEVELOPER
                        </p>
                        <a href="tel:00000000" class="btn btn-sm btn-info mb-2 ml-3 pr-3 pl-3">
                            <i class="fa fa-phone"></i> phone
                        </a>
                        <a href="mailto:example@gmail.com" class="btn btn-sm  btn-outline-info  mb-2  ml-2 pr-3 pl-3">
                           @ mail
                        </a>
                        
                    </div>
                </div>

                <div class="col-md-5 mt-md-3 mt-5">
                     <div class=""><img src="./../assets/imgs/alan.png"  class="img-fluid"></div>
                </div>

                <div class="col-md-10 offset-md-1 mt-5">
                    <h4 class="text-center text-white mt-3">My Services</h4>
                    <p class="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Labore expedita corrupti corporis nams</p>
                    <div class="row no-gutters mt-5">
                        <div class="col-md-4 p-2">
                            <div class="bg-info p-3 rounded">
                                <span class="material-icons text-danger">widgets</span>
                            <h3 class="text-white">Web Design</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Velit cum eum eos eaque sapiente, reiciendis sequi nostrum dolor. 
                            </p>
                            </div>
                        </div>
                        <div class="col-md-4 p-2">
                            <div class="bg-info p-3 rounded">
                              <span class="material-icons text-danger">view_in_ar</span>
                            <h3 class="text-white">Web Development</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Velit cum eum eos eaque sapiente, reiciendis sequi nostrum dolor. 
                            </p>
                            </div>
                        </div>
                        <div class="col-md-4 p-2">
                            <div class="bg-info p-3 rounded">
                                <span class="material-icons text-danger">extension</span>
                            <h3 class="text-white">Deployment</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Velit cum eum eos eaque sapiente, reiciendis sequi nostrum dolor. 
                            </p>
                            </div>
                        </div>
                </div>
                </div> 
                               
            </div>
        </div>
        <br>
        <br>
        <div class="mt-5 bg-dark pb-5">
          <div class="row no-gutters pt-5">
              <div class="col-md-4 offset-md-4">  <h4 class="text-white text-center">About Me</h4>
            <p class="text-center text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nisi iste consequatur deserunt
            </p>
            <p class="text-center text-white">_______</p>
            </div>

            <div class="col-md-8 offset-md-2 mt-5">
                <div class="row no-gutters">
                    <div class="col-md-6 pl-5 pr-5">
                        <div class="p-md-4"><img src="./../assets/imgs/alan2.png"  class="img-fluid  ml-3"></div>
                    </div>
                    <div class="col-md-6  pl-5 pr-3 ">
                        <div class="pt-md-5"></div>
                        <div class="pt-md-5"></div>

                        <h5 class="text-secondary pt-4">Hi There</h5>
            
    
                        <p class="text-info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nisi iste consequatur 
                </p>
                <p class="text-info">
                Nesciunt corrupti perferendis et fugit eveniet illo a deserunt exercitationem?
                </p>
            <img src="./../assets/imgs/social/fb.png" style="width:25px;height:25px;" >
                        <img src="./../assets/imgs/social/youtube.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/twitter.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/instagram.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/github.svg" style="width:25px;height:25px;" class="ml-1">
                    </div>
                </div>
            
            </div>
          </div>
        </div>    
    </div>

</template>

<script>



export default {
    name: 'home',

}
</script>

<style scoped>
    .app-name{
        text-shadow: 0 0 10px #e9ff18, 0 0 10px #e9ff18, 0 0 20px #e9ff18, 0 0 40px #0F0, 0 0 80px #0F0, 0 0 90px #0F0, 0 0 100px #0F0, 0 0 150px #0F0;
    }
    /*html svg*/
    .html-one{
        width: 20px;
        height: 20px;
        position: relative;
        left: 80% ;
        transform: rotate(20deg);
    }
    /*console.log*/
    .console-log{
        transform: rotate(20deg);
    }
    /*css svg*/
    .lang-img{
        width: 20px;
        height: 20px;
        transform: rotate(20deg);
    }

    /*box shadow*/
    .box {
        border-radius:10px;
        box-shadow: 10px 5px 20px #282828,0px 5px 40px #333333,-20px 5px 40px #333333;
    }
    /*front end*/
    .lang-box{
        box-shadow: 10px 5px 20px #211d25,0px 5px 40px #333333,-20px 5px 40px #333333;
    }
</style>
