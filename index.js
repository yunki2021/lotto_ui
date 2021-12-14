var app = new Vue({
    el: "#app",
    //vuetify 객체(컴포넌트)를 사용
    vuetify: new Vuetify(),
    data: {
        subject: "로또번호 생성기",
        lotto_numbers: "",
        auto : false,
        auto_yn : "N",
        choice : "",
        president_list : [
            {"no": 1, "name": "이재명"}, 
            {"no": 2, "name": "윤석열"}, 
            {"no": 3, "name": "안철수"}
        ] ,
        lotto_number_list : [],
        color_list : [
            "primary", "secondary",  "red", "blue", "green", "yellow"
        ] 

    },

    //이벤트 또는 함수 선언
    methods: {
        //클릭 이벤트
        //자동체크박스 클릭시 이벤트 처리
        auto_check()  {
            
            //자동일 경우는 자동 번호를 입력
            //멤버 변수나 멤버 함수는 this.를 꼭 붙인다
            if(this.auto ) {
                this.lotto_numbers = "11 22 33 44 12 34"
            }
           
        },

        auto_checkc()  {
            
            //자동일 경우는 자동 번호를 입력
            //멤버 변수나 멤버 함수는 this.를 꼭 붙인다
            if(this.auto_yn == "Y") {
                this.lotto_numbers = "99 22 33 44 12 34"
            }
            //자동이 아닐 경우는 빈값
            else if(this.auto_yn == "N") {
                this.lotto_numbers = "";
            }
        },        

        get_data(url, params, callback) {

            var query = "";
            if(params !=""){
                query = "?" + Object.keys(params).map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])).join("&");
            }
        
            var headers = { "Content-Type": "application/json" };
            fetch(url + query, {
                method: "GET",
                headers: headers
            })
            .then(response => { //상태(status:200,400)를 확인하기 위한 용도로 사용
    
                if(response.status == 200) {
                    return response.json();
                }
            })
            .then(response => { //결과값을 받기 위한 용도로 사용
    
                if (response != undefined) {
                    if (callback) callback(response);
                }
            })
            .catch(error => console.error("Error:", error));
        
        },

        lotto_numbers_create() {

            var url = "http://apps.forcei.co.kr:19003/api/get_last_lotto_numbers";
            this.get_data(url,"", (data) => {
                
                this.lotto_number_list  = data;
                console.log(100,this. lotto_number_list);
               // this.color_list[1]  
                
            });
    
        }
    

    },

    mounted() {
        
        this.lotto_numbers_create()
            
        ;

    }

    
    
});

export default app;



