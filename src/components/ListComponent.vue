<template>
    <div>
        <h1>หน้าข่าว</h1>
        <div v-for="array in dataArray" :key="array">
            <div>
                ชื่อเรื่อง :{{array['author']}}
            </div>
            <div>
                รายละเอียด :{{array['description']}}
            </div>
            <div>
                <img :src="array['urlToImage']">
            </div>
        </div>
    </div>
</template>
<script>
// test
import axios  from 'axios';
export default{
    data() {
        return {
            dataArray:[]
        }
    },
    created(){
            let apiURL = "https://newsapi.org/v2/everything?q=tesla&from=2022-02-09&sortBy=publishedAt&apiKey=5ceb9cef33674cd18f3efc255941d133";
            axios.get(apiURL).then(res =>{
                this.dataArray = res.data.articles
                console.log(res.data.articles)
            }).catch(error =>{
                console.log(error)
            })
    },
    name:"list",
}
</script>