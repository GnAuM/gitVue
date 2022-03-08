<template>
    <div >
        <h3>หนังสือ</h3>
        
    </div>
</template>
<script>
import axios  from 'axios';
export default{
    data() {
        return {
            dataBook :[]
        }
    },
    created(){
        let self = this
          axios.get('http://127.0.0.1/vue_connect/action.php',{
          }).then(function(reponse){
              self.dataBook = reponse.data
          })
    },
    
    name:"book",
}
</script>