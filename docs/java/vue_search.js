var signs = new Vue({
    el: '#search_sign',
    data: {
        searchString: "",
        sign_pages: [
            {
                "sign": "Hello",
                "url": "../signs_pages/hello.html",
                "image": "../media/image/makaton_signs/hello.svg"
            },
            {
                "sign": "World",
                "url": "../signs_pages/world.html",
                "image": "../media/image/makaton_signs/world.svg"
            },
            {
                "sign": "Home",
                "url": "../signs_pages/home.html",
                "image": "../media/image/makaton_signs/home.svg"
            },
            {
                "sign": "Please",
                "url": "../signs_pages/please.html",
                "image": "../media/image/makaton_signs/please.svg"
            },
            {
                "sign": "Good",
                "url": "../signs_pages/good.html",
                "image": "../media/image/makaton_signs/good.svg"
            } 
        ]
    },
    
computed: {
filteredSigns: function ()
{
            var sign_pages_array = this.sign_pages,
                searchString = this.searchString;
            if(!searchString){
                return sign_pages_array;
    }
            searchString = searchString.trim().toLowerCase();
            sign_pages_array = sign_pages_array.filter(function(item)
{
                if(item.sign.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
            return sign_pages_array;;
        }
    }
});