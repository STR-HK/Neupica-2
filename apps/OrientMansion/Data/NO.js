import { customStarting } from "../app.js"
import { cvt } from "./cvt.js"

export let NOA = {
    "DE": {
        "PD": "",
        "PN": "",
        "PA": "",
        "PM": ""
    },
    "PO": {
        "PD": "",
        "PN": "",
        "PA": "",
        "PM": ""
    },
    "TE": {
        "PD": "",
        "PN": "",
        "PA": "",
        "PM": ""
    },
    "DU": {
        "PD": "",
        "PN": "",
        "PA": "",
        "PM": ""
    },
    "EN": {
        "PD": "",
        "PN": "",
        "PA": "",
        "PM": ""
    },
    "NO": {
        "PD": "",
        "PN": "",
        "PA": "",
        "PM": ""
    },
    "DO": {
        "PD": "",
        "PN": "",
        "PA": "",
        "PM": ""
    },
    "CA": {
        "PD": "",
        "PN": "",
        "PA": "",
        "PM": ""
    }
}

export let NOR = {
    "DO": {
        "objects": [
            {
                "display": "약품 선반",
                "analyze": ""
            },
            {
                "display": "의료용 장비 상자",
                "analyze": ""
            },
            {
                "display": "침대",
                "analyze": "약간의 피"
            }
        ]
    },
    "PO": {
        "objects": [
            {
                "display": "경찰의 제복",
                "analyze": ""
            },
            {
                "display": "리볼버 권총",
                "analyze": ""
            },
            {
                "display": "일반인 조사 메모",
                "analyze": ""
            },
            {
                "display": "일기장",
                "analyze": "범범자 혐오로 가득 차 있다"
            }
        ]
    },
    "DE": {
        "objects": [
            {
                "display": "탐정의 수사도구",
                "analyze": ""
            },
            {
                "display": "탐정의 코트",
                "analyze": ""
            },
            {
                "display": "탐정의 만년필",
                "analyze": ""
            }
        ]
    },
    "NO": {
        "objects": [
            {
                "display": "고급진 시가",
                "analyze": ""
            },
            {
                "display": "권총",
                "analyze": ""
            },
            {
                "display": "고급진 정장",
                "analyze": ""
            },
            {
                "display": "고급진 시계",
                "analyze": ""
            }
        ]
    },
    "DU": {
        "objects": [
            {
                "display": "업무서류",
                "analyze": ""
            },
            {
                "display": "고급진 만년필",
                "analyze": ""
            },
            {
                "display": "벽장식들",
                "analyze": ""
            }
        ]
    },
    "TE": {
        "objects": [
            {
                "display": "교육자료 3년치",
                "analyze": ""
            },
            {
                "display": "플라잉 디스크",
                "analyze": ""
            },
            {
                "display": "농구공",
                "analyze": ""
            },
            {
                "display": "선생의 노트",
                "analyze": "의사의 이름이 빼곡히 적혀 있다"
            }
        ]
    },
    "EN": {
        "objects": [
            {
                "display": "공구",
                "analyze": ""
            },
            {
                "display": "엔진 설계도",
                "analyze": ""
            },
            {
                "display": "보일러",
                "analyze": "의사의 소사체가 있지만 그 형태만 간신히 알아볼 수 있는 상태이다"
            }
        ]
    },
    "CA": {
        "objects": [
            {
                "display": "약품 선반",
                "analyze": ""
            },
            {
                "display": "약품 선반",
                "analyze": ""
            },
            {
                "display": "약품 선반",
                "analyze": ""
            }
        ]
    }
}

export function NO_FFF(gameID)  {
    if (gameID == 'NOPASPN') {
        return {
            type: 'script',
            gameID: gameID,
            title: '응접실에서 게임을 한 뒤',
            content: '당신은 추억을 회상하며 자신의 방에서 생각에 잠깁니다',
            timeline: 'PN',
            bItem: true,
            autoplay: 'NOPASPA',

        }
    } else if (gameID == 'NOPASPA') {
        return {
            type: 'script',
            gameID: gameID,
            title: '추억을 회상한 뒤',
            content: '당신은 도서관에서 책을 한 권 빌려와 독서를 합니다',
            timeline: 'PA',
            bItem: true,
            autoplay: 'NOW',
        }
    } else if (gameID == 'NOPASTD2') {
        return {
            type: 'event',
            gameID: gameID,
            title: '라디에이터 고장',
            content: '라디에이터가 고장나 저택 대부분에 난방이 되지 않습니다',
            timeline: 'TD',
            bItem: true,
            autoplay: 'NOPASTD3',

        }
    } else if (gameID == 'NOPASTD1') {
        return {
            type: 'event',
            gameID: gameID,
            title: '제 2사건',
            content: "경찰이 일반인이 마피아 간부였으며 매우 악랄하다고 모두에게 폭로합니다",
            timeline: 'TD',
            bItem: true,
            autoplay: 'NOPASTD2',
        }
    } else if (gameID == 'NOPASTD3') {
        return {
            type: 'event',
            gameID: gameID,
            title: '도서관 이동',
            content: '도서관은 보조 발전기가 있어 따뜻하다는 소식을 듣고 도서관으로 이동합니다',
            timeline: 'TD',
            bItem: true,
            autoplay: "NOPASTD4"
        }
    } else if (gameID == "NOPASSM") {
        return {
            type: 'script',
            gameID: gameID,
            title: '라디에이터 전조',
            content: '당신은 기술자에게 라디에이터의 상태가 좋지 않다는 소식을 들었습니다',
            timeline: 'SM',
            bItem: true,
            autoplay: "NOPASTD1"
        }
    } else if (gameID == 'NOPASTD4') {
        return {
            type: 'event',
            gameID: gameID,
            title: '객실 조사 시작',
            content: '모두가 도서관에 모여 있는 동안 당신은 사람들의 방을 조사하려고 합니다. 원하는 객실에 가서 문제를 풀고, 얻은 답을 조사 내용에 추가하여 방을 조사하세요',
            timeline: 'TD',
            bItem: true,
        }
    }

    if (gameID == 'NOW') {
        return {
            type: 'witness',
            gameID: gameID,
            title: '기술자의 목격',
            content: '기술자는 보일러 안에서 심하게 훼손되고 타버린 시체를 발견했다고 합니다. 1층으로 가는길, 계단엔 핏자국이 번져있습니다',
            timeline: 'PM',
            bItem: true,
            autoplay: "NODOI",
        }
    }
    if (gameID == 'NODOI') {
        return {
            type: 'doi',
            gameID: gameID,
            title: '경찰 소견서',
            content: [
                '사망 대상',
                '의사',
                '사망 일시',
                '저녁에서 자정 사이로 추정',
                '발견 장소',
                '보일러실',
                '직접 사인',
                '?',
                '간접 사인',
                '?',
                '의사 소명',
                '의사 소사체의 훼손 정도가 심하여 알 수 없음',

            ],
            timeline: 'PM',
            bItem: true,
            autoplay: "NOGTA",
        }
    }

    if (gameID == "NOGTA") {
        return {
            type: 'script',
            gameID: gameID,
            title: '알리바이 심문',
            content: '당신은 이제 사람들의 알리바이를 확인하기 시작합니다. 알리바이 확인 장소로 이동하여 알리바이를 확인하고 싶은 사람의 코드를 조사 내용에 추가하세요\n(모든 사람의 알리바이를 확인하면 계속 진행됩니다)',
            timeline: 'PM',
            bItem: true,
        }
    }

    if (customStarting(gameID, 'NOA')) {
        let ailbiData = NOA
        let route = gameID.slice(3, 5)
        return {
            type: 'alibi',
            gameID: gameID,
            title: `${cvt(route)}의 알리바이`,
            content: ailbiData[route],
            timeline: 'SD',
            bItem: true,
        }
    }
    if (customStarting(gameID, 'NOR')) {
        let roomData = NOR
        let route = gameID.slice(3, 5)
        return {
            type: 'roomcheck',
            gameID: gameID,
            title: `${cvt(route)}의 방 조사 내역`,
            content: roomData[route],
            timeline: 'TN',
            bItem: true,
        }
    }
}

