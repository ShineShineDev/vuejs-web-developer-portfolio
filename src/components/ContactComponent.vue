<template>
    <div class="w-100">
        <div class="row  m-0 p-md-5 p-1">
            <div class="col-md-10 mt-3   offset-md-1 ">
                <div class="row box bg-white rounded">
                    <div class="col-md-6 p-3 border-right">
                        <form class="form-group" method="POST">
                            <h5 class="mt-4 border-bottom pb-3 text-center rounded">HAVE SOME QUESTIONS ?</h5>

                            <input type="text" name="name" v-model="name" class="form-control contact-name mt-3" placeholder="n a m e">
                            <span class="material-icons"  style="float: right;position: relative;top:-30px;">person</span>

                            <input type="number" v-model="phone" name="phone" class="form-control contact-phone mt-3" placeholder="p h o n e">
                            <span class="material-icons"  style="float: right;position: relative;top:-30px;">phone</span>

                            <textarea rows="3"  name="text" v-model="text" class="form-control contact-caption  mt-3" placeholder="message"></textarea>

                            <button @click="send"  class="contact-send  mt-3 btn btn-block btn-info text-white">Send</button>
                        </form>
                    </div>

                    <!-- Info-->
                    <div class="col-md-6 mt-3 mb-5 p-1">

                        <!--Info-->
                          <h5 class="mt-3 border-bottom pb-3 text-center rounded">Contact Me</h5>
                        <ul class="list-group toup pt-3 pr-2 pl-2">
                            
                            <li class="list-group-item p-2 border-top  text-info">
                                <span class="material-icons">phone</span> :
                                <a href="tel:007" style="text-decoration: none;">007007007</a>
                            </li>
                            <li class="list-group-item border-top p-2  text-info">
                                <span class="material-icons">email</span> :
                                <a href="mailto:example@gmail.com" style="text-decoration: none;">
                                    example@gmail.com</a>
                            </li>
                            <li class="list-group-item border-top p-1  text-info">
                                <span class="material-icons">place</span>  : Myanmar/Mandalay/Kyaukpadaung
                            </li>
                            <li class="list-group-item border-top p-2  text-info">
                            <span class="material-icons">extension</span> :  
                             <img src="./../assets/imgs/social/fb.png" style="width:25px;height:25px;" class="ml-3">
                        <img src="./../assets/imgs/social/youtube.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/twitter.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/instagram.png" style="width:25px;height:25px;" class="ml-1">
                        <img src="./../assets/imgs/social/github.svg" style="width:25px;height:25px;" class="ml-1">
                            </li>

                        </ul>

                        <!--Gif-->
                        <img src="rocket.png" class="toup img-fluid">

                    </div>
                </div>
                <div class="col-md-10 offset-md-1 mt-3">
                    <div class="row no-gutters">

                        <div class="col-md-8 offset-md-2  mt-4">
                            <h3 class="text-center  text-white">Your Message</h3>
                            <hr style="background-color:white">
                        </div>

                        <div class="col-md-4  p-2" v-for="(msg, index) in msgOjb" :key="index" width="100px;">
                            
                            <div class="bg-light p-2 rounded">
                                <h5>{{msg.name}}</h5>
                                <h5>{{msg.phone}}</h5>
                                <p>{{msg.text}}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
    export default {
        data (){
          return {
              name : '',
              phone : '',
              text : '',
              msgOjb:[],
          }
        },
         created: function () {
           this.msgOjb = JSON.parse(localStorage.getItem('shineshine')) || []
        },
        methods : {
            send : function(e){
                e.preventDefault();
                let name = this.name
                let phone = this.phone
                let text = this.text
                this.msgOjb.push({name,phone,text})
                localStorage.setItem('shineshine',JSON.stringify(this.msgOjb))
                this.name = ''
                this.phone = ''
                this.text = ''
            }
        }
    }
</script>

<style scoped>
    .box {
        box-shadow: 10px 5px 20px #282828,0px 5px 40px #333333,-20px 5px 40px #333333;
    }
</style