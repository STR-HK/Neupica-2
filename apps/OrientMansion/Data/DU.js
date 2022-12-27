import { customStarting } from "../app.js"
import { cvt } from "./cvt.js"

export let DUA = {
    "DE": {
        "PD": "탐정, 일반인과 함께 응접실에서 보드게임을 진행하였습니다",
        "PN": "도서관에서 책을 빌려와 제 방에서 독서를 하였습니다",
        "PA": "제 방에서 일찍 잠자리에 들었습니다",
        "PM": "제 방에서 취침 중이었습니다"
    },
    "PO": {
        "PD": "-> 사망",
        "PN": "-> 사망",
        "PA": "-> 사망",
        "PM": "-> 사망"
    },
    "TE": {
        "PD": "의사에게 약을 처방받았습니다",
        "PN": "의사, 일반인, 기술자에게 카드 게임을 초대받아 응접실에서 플레이하였습니다",
        "PA": "공작의 딸을 의사와 함께 가르치고 있었습니다.",
        "PM": "방에서 자고 있었습니다"
    },
    "DU": {
        "PD": "탐정, 경찰, 일반인이 방문하여 맞이하여 응접실로 안내하였습니다",
        "PN": "집사의 도움을 받아 공작가 예산안에 대해 토론하고, 업무를 처리하였습니다",
        "PA": "기술자에게 자신의 사냥총의 수리를 맡기고,집사에게 요리를 맡겼습니다.",
        "PM": "의사에게 약을 처방받는중이었습니다."
    },
    "EN": {
        "PD": "보일러실에서 새로운 보일러에 대해 연구하고 있엇습니다",
        "PN": "의사, 일반인, 선생과 카드 게임을 진행할 것을 요구하였으며, 응접실에서 플레이하였습니다",
        "PA": "공작의 사냥총을 수리해달라는 요청을 받았습니다.",
        "PM": "밤 늦게까지 총을 수리하고있었습니다."
    },
    "NO": {
        "PD": "-> 사망",
        "PN": "-> 사망",
        "PA": "-> 사망",
        "PM": "-> 사망"
    },
    "DO": {
        "PD": "선생의 방에 방문하여 선생에게 약을 처방하였습니다",
        "PN": "일반인, 기술자, 선생과 카드 게임을 진행할 것을 요구하였으며, 응접실에서 플레이하였습니다",
        "PA": "선생이 딸을 교육시키는걸 돕고있었습니다.",
        "PM": "공작방에서 공작에게 약을 처방하여 드렸습니다"
    },
    "CA": {
        "PD": "손님들을 위해 다과를 준비하여 응접실에 제공하였습니다",
        "PN": "공작이 예산안을 처리하는 것을 도왔습니다",
        "PA": "공작의 요청으로 저녁 식사를 준비하고 있었습니다",
        "PM": "주방을 청소하고있었습니다"
    }
}

export let DUR = {
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
                "analyze": ""
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
                "analyze": "사건 당시에는 총소리가 없었음"
            },
            {
                "display": "일반인 조사 메모",
                "analyze": ""
            },
            {
                "display": "흑색화약",
                "analyze": "폭발되고 남은 폭탄의 잔해로, 폭발의 원흉으로 추정"
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
                "display": "객실 바닥",
                "analyze": "바닥에 터지지 않은 폭탄이 있으며, 중간이 잘려 있음"
            }
        ]
    },
    "NO": {
        "objects": [
            {
                "display": "방의 벽",
                "analyze": "방에서 일어난 폭발의 영향을 받았음"
            },
            {
                "display": "방의 바닥",
                "analyze": "도화선이 중간에 잘려 터지지 않은 폭탄이 있으며, 2층과 연결되어 있었던 것으로 추정"
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
                "analyze": "매일 관리하는 것처럼 매우 꺠끗함"
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
                "display": "휘슬",
                "analyze": ""
            }
        ]
    },
    "EN": {
        "objects": [
            {
                "display": "공구",
                "analyze": "도화선이 같이 놓여 있음"
            },
            {
                "display": "공작의 사냥총",
                "analyze": "총의 발사에 필요한 무연화약이 들어 있음"
            },
            {
                "display": "보일러",
                "analyze": ""
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

export function DU_FFF(gameID)  {
    if (gameID == 'DUPASPN') {
        return {
            type: 'script',
            gameID: gameID,
            title: '응접실에서 게임을 한 뒤',
            content: '당신은 추억을 회상하며 자신의 방에서 생각에 잠깁니다',
            timeline: 'PN',
            bItem: true,
            autoplay: 'DUPASPA',

        }
    } else if (gameID == 'DUPASPA') {
        return {
            type: 'script',
            gameID: gameID,
            title: '추억을 회상한 뒤',
            content: '당신은 도서관에서 책을 한 권 빌려와 독서를 합니다',
            timeline: 'PA',
            bItem: true,
            autoplay: 'DUW',
        }
    } else if (gameID == 'DUPASTD2') {
        return {
            type: 'event',
            gameID: gameID,
            title: '라디에이터 고장',
            content: '라디에이터가 고장나 저택 대부분에 난방이 되지 않습니다',
            timeline: 'TD',
            bItem: true,
            autoplay: 'DUPASTD3',

        }
    } else if (gameID == 'DUPASTD1') {
        return {
            type: 'event',
            gameID: gameID,
            title: '제 2사건',
            content: "집사는 1년 전쯤 공작의 명령으로 폭탄을 구매했다는 사실을 밝힙니다. 집사는 다른 곳에 사용할 줄 알았다며, 본인 외에는 공작과 기술자만이 아는 사실이라고 증언합니다",
            timeline: 'TD',
            bItem: true,
            autoplay: 'DUPASTD2',
        }
    } else if (gameID == 'DUPASTD3') {
        return {
            type: 'event',
            gameID: gameID,
            title: '도서관 이동',
            content: '도서관은 보조 발전기가 있어 따뜻하다는 소식을 듣고 도서관으로 이동합니다',
            timeline: 'TD',
            bItem: true,
            autoplay: "DUPASTD4"
        }
    } else if (gameID == "DUPASSM") {
        return {
            type: 'script',
            gameID: gameID,
            title: '라디에이터 전조',
            content: '당신은 기술자에게 라디에이터의 상태가 좋지 않다는 소식을 들었습니다',
            timeline: 'SM',
            bItem: true,
            autoplay: "DUPASTD1"
        }
    } else if (gameID == 'DUPASTD4') {
        return {
            type: 'event',
            gameID: gameID,
            title: '객실 조사 시작',
            content: '모두가 도서관에 모여 있는 동안 당신은 사람들의 방을 조사하려고 합니다. 원하는 객실에 가서 문제를 풀고, 얻은 답을 조사 내용에 추가하여 방을 조사하세요',
            timeline: 'TD',
            bItem: true,
        }
    }

    if (gameID == 'DUW') {
        return {
            type: 'witness',
            gameID: gameID,
            title: '다수의 목격',
            content: '굉음과 함꼐 저택이 울려 당신은 바깥으로 나갔습니다. 그곳에는 경찰과 일반인이 사망해 있습니다. 폭탄의 심지를 발견한 당신들은 테러를 의심하고 사람들을 조사합니다',
            timeline: 'PM',
            bItem: true,
            autoplay: "DUDOI",
        }
    }
    if (gameID == 'DUDOI') {
        return {
            type: 'doi',
            gameID: gameID,
            title: '의사 소견서',
            content: [
                '사망 대상',
                '경찰, 일반인',
                '사망 일시',
                '자정',
                '발견 장소',
                '각자의 방',
                '직접 사인',
                '폭발의 압력으로 인한 내장의 파열',
                '간접 사인',
                '과다 출혈',
                '의사 소명',
                '폭발에 직접적으로 휘말렸습니다',

            ],
            timeline: 'PM',
            bItem: true,
            autoplay: "DUGTA",
        }
    }

    if (gameID == "DUGTA") {
        return {
            type: 'script',
            gameID: gameID,
            title: '알리바이 심문',
            content: '당신은 이제 사람들의 알리바이를 확인하기 시작합니다. 알리바이 확인 장소로 이동하여 알리바이를 확인하고 싶은 사람의 코드를 조사 내용에 추가하세요\n(모든 사람의 알리바이를 확인하면 계속 진행됩니다)',
            timeline: 'PM',
            bItem: true,
        }
    }

    if (customStarting(gameID, 'DUA')) {
        let ailbiData = DUA
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
    if (customStarting(gameID, 'DUR')) {
        let roomData = DUR
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

