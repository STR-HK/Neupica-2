import { customStarting } from "../app.js"
import { cvt } from "./cvt.js"
import { app } from "../app.js"

export let ENA = {
    "DE": {
        "PD": "탐정, 일반인과 함께 응접실에서 보드게임을 진행하였습니다",
        "PN": "도서관에서 책을 빌려와 제 방에서 독서를 하였습니다",
        "PA": "제 방에서 일찍 잠자리에 들었습니다",
        "PM": "제 방에서 취침 중이었습니다"
    },
    "PO": {
        "PD": "탐정, 일반인과 함께 응접실에서 보드게임을 진행하였습니다",
        "PN": "도서관에서 책을 빌려와 제 방에서 독서를 하였습니다",
        "PA": "제 방에서 일찍 잠자리에 들었습니다",
        "PM": "제 방에서 취침 중이었습니다"
    },
    "TE": {
        "PD": "딸을 공부시키고 있었습니다.",
        "PN": "일반인과 의사의 요청으로 응접실에서 게임을 했습니다",
        "PA": "교육자료를 검토하고 있었습니다",
        "PM": "제 방에서 취침중이었습니다"
    },
    "DU": {
        "PD": "-> 사망",
        "PN": "-> 사망",
        "PA": "-> 사망",
        "PM": "-> 사망"
    },
    "EN": {
        "PD": "엔진 점검중",
        "PN": "단조중",
        "PA": "일반인이 들어와 하던작업을 멈추고 대화하였습니다.",
        "PM": "보일러실 내부의 침대에서 잠을 잤습니다"
    },
    "NO": {
        "PD": "저택 방문을 기념하여 탐정, 경찰과 함께 응접실에서 보드게임을 하였습니다",
        "PN": "의사와 함께 게임을 플레이,선생에게 카드게임 동참을 요구하여 응접실에서 플레이하였습니다",
        "PA": "기술자의 방을 방문하여 기술자와 엔진에 관한 짧은 의견교환후 방으로 돌아왔습니다.",
        "PM": "제 손님방에서 취침하였습니다"
    },
    "DO": {
        "PD": "선생의 방에 방문하여 선생에게 약을 처방하였습니다",
        "PN": "일반인과 함께 게임을 플레이,선생에게 카드게임 동참을 요구하였으며, 응접실에서 플레이하였습니다",
        "PA": "제방에서 일지를 작성하고 있었습니다.",
        "PM": "제 방 침대에서 자고 있었습니다"
    },
    "CA": {
        "PD": "손님들을 위해 다과를 준비하여 응접실에 제공하였습니다",
        "PN": "공작이 예산안을 처리하는 것을 도왔습니다",
        "PA": "저녁 식사를 준비하고 있었습니다",
        "PM": "복도를 돌아다니며 순찰을 하고 있었습니다"
    }
}

export let ENR = {
    "DO": {
        "objects": [
            {
                "display": "약품 선반",
                "analyze": ""
            },
            {
                "display": "의료용 장비 상자",
                "analyze": "독성을 띄는 약들이 도난당했다, 범인이 사용한듯 하다"
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
                "analyze": "사건 당시에는 총소리가 없었다"
            },
            {
                "display": "일반인 조사 메모",
                "analyze": ""
            },
            {
                "display": "일기장",
                "analyze": ""
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
                "analyze": "사용되지 않은 새것으로 추정된다"
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
                "display": "공작의 물컵",
                "analyze": "물이 담겨있고, 독약을 탄 흔적이 있다"
            },
            {
                "display": "곰가죽 카펫",
                "analyze": "약간 다른 발자국이 있다"
            },
            {
                "display": "창문",
                "analyze": "개패된 흔적이 없어 이곳으로 침입하지는 않았다"
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
                "display": "물품",
                "analyze": ""
            },
            {
                "display": "주형틀",
                "analyze": "많은 물품을 만들수 있을 듯하다"
            },
            {
                "display": "용광로",
                "analyze": "주형틀로 2주 이내에 무언가를 만든 것 같다"
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

export function EN_FFF(gameID)  {
    if (gameID == 'ENPASPN') {
        return {
            type: 'script',
            gameID: gameID,
            title: '응접실에서 게임을 한 뒤',
            content: '도서관에서 책을 빌려와 당신의 방에서 독서를 합니다',
            timeline: 'PN',
            bItem: true,
            autoplay: 'ENPASPA',

        }
    } else if (gameID == 'ENPASPA') {
        return {
            type: 'script',
            gameID: gameID,
            title: '책들을 읽은 뒤',
            content: '당신의 방에서 일찍 잠자리에 들었습니다',
            timeline: 'PA',
            bItem: true,
            autoplay: 'ENW',
        }
    } else if (gameID == 'ENPASTD2') {
        return {
            type: 'event',
            gameID: gameID,
            title: '라디에이터 고장',
            content: '라디에이터가 고장나 저택 대부분에 난방이 되지 않습니다',
            timeline: 'TD',
            bItem: true,
            autoplay: 'ENPASTD3',

        }
    } else if (gameID == 'ENPASTD1') {
        return {
            type: 'event',
            gameID: gameID,
            title: '제 2사건',
            content: "의사가 약품선반의 약품이 도난당했다는 사실을 모두에게 알립니다",
            timeline: 'TD',
            bItem: true,
            autoplay: 'ENPASTD2',
        }
    } else if (gameID == 'ENPASTD3') {
        return {
            type: 'event',
            gameID: gameID,
            title: '도서관 이동',
            content: '도서관은 보조 발전기가 있어 따뜻하다는 소식을 듣고 도서관으로 이동합니다',
            timeline: 'TD',
            bItem: true,
            autoplay: "POPASTD4",
        }
    } else if (gameID == "ENPASSM") {
        return {
            type: 'script',
            gameID: gameID,
            title: '라디에이터 전조',
            content: '당신은 기술자에게 라디에이터의 상태가 좋지 않다는 소식을 들었습니다',
            timeline: 'SM',
            bItem: true,
            autoplay: "ENPASTD1"
        }
    } else if (gameID == 'POPASTD4') {
        return {
            type: 'event',
            gameID: gameID,
            title: '객실 조사 시작',
            content: '모두가 도서관에 모여 있는 동안 당신은 사람들의 방을 조사하려고 합니다. 원하는 객실에 가서 문제를 풀고, 얻은 답을 조사 내용에 추가하여 방을 조사하세요',
            timeline: 'TD',
            bItem: true,
        }
    }

    if (gameID == 'ENW') {
        return {
            type: 'witness',
            gameID: gameID,
            title: '집사의 목격',
            content: '집사는 공작이 아무도 불러도 나오지 않아 문을 뜯어 방에 쓰러져 있는 공작을 발견했다고 합니다',
            timeline: 'PM',
            bItem: true,
            autoplay: "ENDOI",
        }
    }
    if (gameID == 'ENDOI') {
        return {
            type: 'doi',
            gameID: gameID,
            title: '의사 소견서',
            content: [
                '사망 대상',
                '공작',
                '사망 일시',
                '자정',
                '발견 장소',
                '공작의 방',
                '직접 사인',
                '중독',
                '간접 사인',
                '없음',
                '의사 소명',
                '물에서 독성분이 검출되었으며 누군가가 탄 것으로 추정됨',

            ],
            timeline: 'PM',
            bItem: true,
            autoplay: "ENGTA"
        }
    }

    if (gameID == "ENGTA") {
        return {
            type: 'script',
            gameID: gameID,
            title: '알리바이 심문',
            content: '당신은 이제 사람들의 알리바이를 확인하기 시작합니다. 알리바이 확인 장소로 이동하여 알리바이를 확인하고 싶은 사람의 코드를 조사 내용에 추가하세요\n(모든 사람의 알리바이를 확인하면 계속 진행됩니다)',
            timeline: 'PM',
            bItem: true,
        }
    }

    if (customStarting(gameID, 'ENA')) {
        let ailbiData = ENA
        let route = gameID.slice(3, 5)
        console.log(`${route}ANO`)


        return {
            type: 'alibi',
            gameID: gameID,
            title: `${cvt(route)}의 알리바이`,
            content: ailbiData[route],
            timeline: 'SD',
            bItem: true,
        }
    }
    if (customStarting(gameID, 'ENR')) {
        let roomData = ENR
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

