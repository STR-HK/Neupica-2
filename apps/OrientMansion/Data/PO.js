import { customStarting } from "../app.js"
import { cvt } from "./cvt.js"

export let POA = {
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
        "PD": "의사에게 약을 처방받았습니다",
        "PN": "의사, 일반인, 기술자에게 카드 게임을 초대받아 응접실에서 플레이하였습니다",
        "PA": "공작의 딸의 방에서 교육을 진행 중이었습니다",
        "PM": "방에서 자고 있었습니다"
    },
    "DU": {
        "PD": "탐정, 경찰, 일반인이 방문하여 맞이하여 응접실로 안내하였습니다",
        "PN": "집사의 도움을 받아 공작가 예산안에 대해 토론하고, 업무를 처리하였습니다",
        "PA": "의사의 처방을 받고, 오늘의 업무를 정리하고, 선생과 딸의 교육 방식에 대해 의논하였습니다",
        "PM": "제 방 침대에서 숙면을 취하고 있었습니다"
    },
    "EN": {
        "PD": "보일러실에서 새로운 보일러에 대해 연구하고 있엇습니다",
        "PN": "의사, 일반인, 선생과 카드 게임을 진행할 것을 요구하였으며, 응접실에서 플레이하였습니다",
        "PA": "엔진 제작에 열중하고 있었습니다",
        "PM": "보일러실 내부의 침대에서 잠을 잤습니다"
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
        "PA": "공작방에서 공작에게 약을 처방하여 드렸습니다",
        "PM": "제 방 침대에서 자고 있었습니다"
    },
    "CA": {
        "PD": "손님들을 위해 다과를 준비하여 응접실에 제공하였습니다",
        "PN": "공작이 예산안을 처리하는 것을 도왔습니다",
        "PA": "저녁 식사를 준비하고 있었습니다",
        "PM": "복도를 돌아다니며 순찰을 하고 있었습니다"
    }
}

export let POR = {
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
                "analyze": "일반인이 무혐의라는 사실 적혀있으며 이 사건의 직적접인 원인으로 추정"
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
                "analyze": "사용되지 않은 새것으로 추정"
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
                "display": "휘슬",
                "analyze": ""
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
                "display": "밧줄",
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

export function PO(gameID)  {
    if (gameID == 'POPASPN') {
        return {
            type: 'script',
            gameID: gameID,
            title: '응접실에서 게임을 한 뒤',
            content: '당신은 추억을 회상하며 자신의 방에서 생각에 잠깁니다',
            timeline: 'PN',
            bItem: true,
            autoplay: 'POPASPA',

        }
    } else if (gameID == 'POPASPA') {
        return {
            type: 'script',
            gameID: gameID,
            title: '추억을 회상한 뒤',
            content: '당신은 도서관에서 책을 한 권 빌려와 독서를 합니다',
            timeline: 'PA',
            bItem: true,
            autoplay: 'POW',
        }
    } else if (gameID == 'POPASTD2') {
        return {
            type: 'event',
            gameID: gameID,
            title: '라디에이터 고장',
            content: '라디에이터가 고장나 저택 대부분에 난방이 되지 않습니다',
            timeline: 'TD',
            bItem: true,
            autoplay: 'POPASTD3',

        }
    } else if (gameID == 'POPASTD1') {
        return {
            type: 'event',
            gameID: gameID,
            title: '제 2사건',
            content: "모두가 경찰의 방에서 경찰이 목을 메단 시체를 발견합니다. 의사는 경찰이 자살했다고 분석합니다",
            timeline: 'TD',
            bItem: true,
            autoplay: 'POPASTD2',
        }
    } else if (gameID == 'POPASTD3') {
        return {
            type: 'event',
            gameID: gameID,
            title: '도서관 이동',
            content: '도서관은 보조 발전기가 있어 따뜻하다는 소식을 듣고 도서관으로 이동합니다',
            timeline: 'TD',
            bItem: true,
            autoplay: "POPASTD4"
        }
    } else if (gameID == "POPASSM") {
        return {
            type: 'script',
            gameID: gameID,
            title: '라디에이터 전조',
            content: '당신은 기술자에게 라디에이터의 상태가 좋지 않다는 소식을 들었습니다',
            timeline: 'SM',
            bItem: true,
            autoplay: "POPASTD1"
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

    if (gameID == 'POW') {
        return {
            type: 'witness',
            gameID: gameID,
            title: '기술자의 제보',
            content: '기술자가 일반인의 방에서 대자로 뻗어있는 일반인의 시체를 발견합니다. 창문은 열려있었다고 합니다.',
            timeline: 'PM',
            bItem: true,
            autoplay: "PODOI",
        }
    }
    if (gameID == 'PODOI') {
        return {
            type: 'doi',
            gameID: gameID,
            title: '의사 소견서',
            content: [
                '사망 대상',
                '일반인',
                '사망 일시',
                '저녁에서 자정 사이',
                '발견 장소',
                '일반인의 방',
                '직접 사인',
                '후두부에 강한 충격으로 인한 두개골 골절',
                '간접 사인',
                '없음',
                '의사 소명',
                '뒤통수를 강력하게 가격당한 것 같습니다',

            ],
            timeline: 'PM',
            bItem: true,
            autoplay: "POGTA",
        }
    }

    if (gameID == "POGTA") {
        return {
            type: 'script',
            gameID: gameID,
            title: '알리바이 심문',
            content: '당신은 이제 사람들의 알리바이를 확인하기 시작합니다. 알리바이 확인 장소로 이동하여 알리바이를 확인하고 싶은 사람의 코드를 조사 내용에 추가하세요\n(모든 사람의 알리바이를 확인하면 계속 진행됩니다)',
            timeline: 'PM',
            bItem: true,
        }
    }

    if (customStarting(gameID, 'POA')) {
        let ailbiData = POA
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
    if (customStarting(gameID, 'POR')) {
        let roomData = POR
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

