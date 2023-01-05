const url = "https://vue3-course-api.hexschool.io/";
const api_path = "payroom";
const app = {
    data() {
        return {
            myToken: "",
            productList: [],
            tempProduct: {},
        };
    },
    created() {
        this.myToken = document.cookie.replace(
            /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        console.log(this.myToken);
        if (!this.myToken) {
            alert("請先登入");
            location.href = "index.html";
        } else {
            axios.defaults.headers.common["Authorization"] = this.myToken;
            axios
                .get(`${url}/v2/api/${api_path}/admin/products`)
                .then((res) => {
                    console.log(res.data.products);
                    this.productList = res.data.products;
                    console.log(this.productList);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    methods: {
        count() {
            this.productList.push(1);
            console.log(this.productList);
        },
    },
};
Vue.createApp(app).mount("#productApp");
