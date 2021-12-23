<template>
    <div id="app" style="background-image:url('bg.svg');background-size:cover;">
        <div class="row m-0 p-0">
            <NavComponent/>
            <router-view/>
        </div>
        <!--footer component-->
        <FooterComponent></FooterComponent>
    </div>

</template>

<script>

import NavComponent from './components/nav/NavComponent'
import FooterComponent from "./components/nav/FooterComponent";
export default {
  name: 'app',
  components: {
    NavComponent,
    FooterComponent,
  }
}
</script>


