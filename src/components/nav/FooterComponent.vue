<template>
    <footer class="footer mt-4 box bg-dark">
        <div class="container pt-3">
        <div class="row no-gutters m-0 p-0">
            
            <div class="col-md-4 mt-2 border-bottom text-info">
                <p class="m-0 mb-2">Contact</p>
                <a href="tel:007" class="text-info"><span class="material-icons">phone</span> : 007</a><br>
                <a href="mailto:example@gmail.com" class="mt-3 text-info"><span class="material-icons">email</span> : example@gmial.com</a><br>
                <a href="" class="text-info"><span class="material-icons ">location_on</span> :  Mandalay/Kyaukpadaung</a><br>
            </div>
            
            <div class="col-md-4 text-info border-bottom">
                <p class="m-0 mb-2">About Me</p>
                <p class="text-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Fugiat error est in eos quibusdam, culpa eaque veritatis facilis, dignissimos 
                     velit ut consequuntur quas amet beatae .</p>
            </div>
            
            <div class="col-md-4 mt-2 border-bottom text-info pl-md-5">
                <p class="m-0 mb-2">Navigation</p>
                <router-link to="/" class="link-hover">
                    <a class="text-info"><span class="material-icons">home</span>
 : Home</a><br>
                
                <router-link to="/contact" class="link-hover">
                    <a class="mt-3 text-info"> <span class="material-icons">email</span>: Contact</a><br>
                </router-link>
                <router-link to="/aboutme" class="link-hover">
                    <a class="mt-3 text-info" > <span class="material-icons">person</span>: About Me</a><br>
                </router-link>
            </router-link>
                <router-link to="/profile" class="link-hover">
                    <a href="" class="text-info"><span class="material-icons">person</span>: Profile</a><br>
                </router-link>
            </div>
        </div>
        </div>
        <h5 class="text-center text-info mt-3 pb-3">@Shine Shine</h5>
    </footer>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>
    .box {
        border-radius:10px;
        box-shadow: 10px 5px 20px #282828,0px 5px 40px #333333,-20px 5px 40px #333333;
    }
</style>