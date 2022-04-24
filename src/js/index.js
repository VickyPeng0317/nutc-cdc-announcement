var app = new Vue({
    el: '#app',
    data: {
        diagCounter: {
            today: 0,
            total: 0
        },
        diagList: [],
        searchTypeList: [
            { name:'今日', value: 'today' },
            { name:'本週', value: 'thisWeek' },
            { name:'當月', value: 'thisMoon' },
            { name:'上月', value: 'lastMoon' },
            { name:'全部', value: 'all' }
        ],
        selectedSearchType: ''
    },
    methods: {
        search(searchType = 'today') {
            this.selectedSearchType = searchType;
            this.getDiagCounter(searchType);
        },
        getDiagCounter(searchType) {
            apiService.getDiagCounter().subscribe(diagCounter => {
                this.diagCounter = diagCounter;
            });
        },
        getDiagList() {
            apiService.getDiagList().subscribe(diagList => {
                this.diagList = diagList;
            });
        }
    },
    created() {
        this.search();
        this.getDiagList();
    }
})