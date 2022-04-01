<template>
    <div>
        <div class="div">
            <div class="columns">
                <div class="strong">Title</div>
            </div>
            <div class="columns">
                <div class="strong">Author</div>
            </div>
            <div class="columns">
                <div class="strong is-1">Pages</div>
            </div>
            <div class="columns">
                <div class="strong is-1">Publiched</div>
            </div>            
        </div>    

        <div class="columns" v-for="book in books" :key="book.id">
            <div class="columns">
                {{book.title}}
            </div>
            <div class="columns is-1">
                {{book.author}}deja 
            </div>
            <div class="columns is-1">
                {{book.pageCount}}
            </div>
            <div class="columns">
                {{new Date(book.publisedDate).getFullYear()}}
            </div>
        </div>  
    </div>
</template>
<script>
//.div>div.columns*5>div.strong*1
 export default {
     props:{
         books:{ 
             type:Array,
             required:true
         }
     }
 }
</script>