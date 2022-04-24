const serverPath = '127.0.0.1';
const { range, filter, map, of } = rxjs;

// https://rxjs.dev/api/ajax/ajax

function getDiagList() {
    return of([
        {
            diagNum: 123456,
            diagDate: '2022/04/24',
            courseGroupList: [
                {
                    groupTitle: '一',
                    courseList: [
                        {
                            courseName: '多媒體技術與應用',
                            courseTime: '第1、2節',
                            courseRoom: '2701'
                        },
                        {
                            courseName: '高等資料探勘',
                            courseTime: '第3、4節',
                            courseRoom: '2801'
                        }
                    ]
                },
                {
                    groupTitle: '二',
                    courseList: [
                        {
                            courseName: '進階影像處理',
                            courseTime: '第3、4節',
                            courseRoom: '2701'
                        },
                        {
                            courseName: '高等資料探勘',
                            courseTime: '第5、6節',
                            courseRoom: '3606'
                        },
                        {
                            courseName: '多媒體技術與應用',
                            courseTime: '第7、8節',
                            courseRoom: '3606'
                        }
                    ]
                },
                {
                    groupTitle: '三',
                    courseList: [
                        {
                            courseName: '高等資料探勘',
                            courseTime: '第1、2節',
                            courseRoom: '2701'
                        }
                    ]
                },
                {
                    groupTitle: '四',
                    courseList: []
                },
                {
                    groupTitle: '五',
                    courseList: [
                        {
                            courseName: '多媒體技術與應用',
                            courseTime: '第1、2節',
                            courseRoom: '2701'
                        },
                        {
                            courseName: '高等資料探勘',
                            courseTime: '第3、4節',
                            courseRoom: '2801'
                        }
                    ]
                },
            ]
        },
        {
            diagNum: 123457,
            diagDate: '2022/04/25',
            courseGroupList: [
                {
                    groupTitle: '一',
                    courseList: [
                        {
                            courseName: '多媒體技術與應用',
                            courseTime: '第1、2節',
                            courseRoom: '2701'
                        },
                        {
                            courseName: '高等資料探勘',
                            courseTime: '第3、4節',
                            courseRoom: '2801'
                        }
                    ]
                },
                {
                    groupTitle: '二',
                    courseList: [
                        {
                            courseName: '進階影像處理',
                            courseTime: '第1、2節',
                            courseRoom: '2701'
                        },
                        {
                            courseName: '高等資料探勘',
                            courseTime: '第3、4節',
                            courseRoom: '3606'
                        },
                        {
                            courseName: '多媒體技術與應用',
                            courseTime: '第7、8節',
                            courseRoom: '3606'
                        }
                    ]
                },
                {
                    groupTitle: '三',
                    courseList: [
                        {
                            courseName: '高等資料探勘',
                            courseTime: '第1、2節',
                            courseRoom: '2701'
                        }
                    ]
                },
                {
                    groupTitle: '四',
                    courseList: []
                },
                {
                    groupTitle: '五',
                    courseList: [
                        {
                            courseName: '多媒體技術與應用',
                            courseTime: '第1、2節',
                            courseRoom: '2701'
                        },
                        {
                            courseName: '高等資料探勘',
                            courseTime: '第3、4節',
                            courseRoom: '2801'
                        }
                    ]
                },
            ]
        }
    ]);
}

function getDiagCounter() {
    return of({
        today: 2,
        total: 12
    });
}

const apiService = {
    getDiagList,
    getDiagCounter
};