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

        last_lotto_numbers()  {
            
            //자동일 경우는 자동 번호를 입력
            //멤버 변수나 멤버 함수는 this.를 꼭 붙인다
            if(this.auto_yn == "Y") {
                this.lotto_numbers = "77 22 33 44 12 35"
            }
            //자동이 아닐 경우는 빈값
            else if(this.auto_yn == "N") {
                this.lotto_numbers = this.a_last_lotto_numbers
            }
        }
    }
    
});

export default app;



