import { customStarting } from "../app.js"
import { cvt } from "./cvt.js"

export let TEA = {
    "DE": {
        "PD": "탐정, 일반인과 함께 응접실에서 보드게임을 진행하였습니다",
        "PN": "게임이 끝난 뒤 도서관에서 내려오는 경찰과 의사를 마주칩니다. 그리고 도서관에서 책을 읽고있는 공작과 가볍게 인사를 한 후 방에 돌아와 휴식을 취합니다",
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
        "PD": "공작의 딸 수업 자료 준비 ",
        "PN": "기술자,일반인과 카드 게임을 진행할 것을 요구하였으며, 응접실에서 플레이하였습니다",
        "PA": "경찰과 다투었습니다",
        "PM": " 기술자 집사와 술을 마심"
    },
    "DU": {
        "PD": "탐정, 경찰, 일반인이 방문하여 맞이하여 응접실로 안내하였습니다",
        "PN": "집사의 도움을 받아 공작가 예산안에 대해 토론하고, 업무를 처리하였습니다",
        "PA": "의사의 처방을 받고, 오늘의 업무를 정리하였습니다.",
        "PM": "제 방 침대에서 숙면을 취하고 있었습니다"
    },
    "EN": {
        "PD": "보일러실에서 새로운 보일러에 대해 연구하고 있엇습니다",
        "PN": "선생,일반인과 카드 게임을 진행할 것을 요구하였으며, 응접실에서 플레이하였습니다",
        "PA": "일반인과 함꼐 보일러실에서, 엔진에 대해 의견을 주고받았습니다",
        "PM": "집사,선생과 술을 마셨습니다."
    },
    "NO": {
        "PD": "저택 방문을 기념하여 탐정, 경찰과 함께 응접실에서 보드게임을 하였습니다",
        "PN": "기술자, 선생과 카드 게임을 진행할 것을 요구하였으며, 응접실에서 플레이하였습니다",
        "PA": "기술자의 방을 방문하여 기술자와 엔진에 대해 의견을 나누었습니다",
        "PM": "제 손님방에서 취침하였습니다"
    },
    "DO": {
        "PD": "선생을 처방했습니다.",
        "PN": "경찰과 함께 도서관에 갔다왔습니다.",
        "PA": "공작방에서 공작에게 약을 처방하여 드렸습니다",
        "PM": "제 방 침대에서 자고 있었습니다"
    },
    "CA": {
        "PD": "손님들을 위해 다과를 준비하여 응접실에 제공하였습니다",
        "PN": "공작이 예산안을 처리하는 것을 도왔습니다",
        "PA": "저택을 청소했습니다",
        "PM": "선생,기술자와 술을 마셨습니다"
    }
}

export let TER = {
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
                "display": "도서관 책",
                "analyze": "도서관에서 빌려온듯 하다"
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
                "display": "[종합 분석]",
                "analyze": "머리를 여러번 가격당해 심하게 함몰된 시체와 피묻은 책이 밑에 떨어져 있다"
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
                "display": "[종합 분석]",
                "analyze": "총, 많은 양의 서류들 가족사진이 있으며 부인과 사별했다는 사실을 알 수 있다"
            }
        ]
    },
    "TE": {
        "objects": [
            {
                "display": "교육자료 3년치",
                "analyze": "방 상태를 보아 계획적이지 못한 것 같다"
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
                "display": "보일러",
                "analyze": "보일러에 피묻은 옷이 태워저 있으며 건장한 남성의 것인 것같다"
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

export function TE_FFF(gameID)  {
    if (gameID == 'TEPASPN') {
        return {
            type: 'script',
            gameID: gameID,
            title: '응접실에서 게임을 한 뒤',
            content: '당신은 추억을 회상하며 자신의 방에서 생각에 잠깁니다',
            timeline: 'PN',
            bItem: true,
            autoplay: 'TEPASPA',

        }
    } else if (gameID == 'TEPASPA') {
        return {
            type: 'script',
            gameID: gameID,
            title: '추억을 회상한 뒤',
            content: '당신은 도서관에서 내려오는 경찰과 의사를 마주칩니다. 그리고 도서관에서 책을 읽고 있는 공작과 가볍게 인사를 합니다',
            timeline: 'PA',
            bItem: true,
            autoplay: 'TEPASPM',
        }
    } else if (gameID == 'TEPASPM') {
        return {
            type: 'script',
            gameID: gameID,
            title: '도서관에 방문한 뒤',
            content: '그 후 방에 돌아와 휴식을 취합니다',
            timeline: 'PM',
            bItem: true,
            autoplay: 'TEW',
        }
    } else if (gameID == 'TEPASTD2') {
        return {
            type: 'event',
            gameID: gameID,
            title: '라디에이터 고장',
            content: '라디에이터가 고장나 저택 대부분에 난방이 되지 않습니다',
            timeline: 'TD',
            bItem: true,
            autoplay: 'TEPASTD3',

        }
    } else if (gameID == 'TEPASTD1') {
        return {
            type: 'event',
            gameID: gameID,
            title: '제 2사건',
            content: "일반인이 사람을 죽인 경험이 매우 많은 마피아 전 간부라는 사실이 적힌 경찰의 노트를 경찰의 방 근처에서 주웠습니다",
            timeline: 'TD',
            bItem: true,
            autoplay: 'TEPASTD2',
        }
    } else if (gameID == 'TEPASTD3') {
        return {
            type: 'event',
            gameID: gameID,
            title: '도서관 이동',
            content: '도서관은 보조 발전기가 있어 따뜻하다는 소식을 듣고 도서관으로 이동합니다',
            timeline: 'TD',
            bItem: true,
            autoplay: "TEPASTD4"
        }
    } else if (gameID == "TEPASSM") {
        return {
            type: 'script',
            gameID: gameID,
            title: '라디에이터 전조',
            content: '당신은 기술자에게 라디에이터의 상태가 좋지 않다는 소식을 들었습니다',
            timeline: 'SM',
            bItem: true,
            autoplay: "TEPASTD1"
        }
    } else if (gameID == 'TEPASTD4') {
        return {
            type: 'event',
            gameID: gameID,
            title: '객실 조사 시작',
            content: '모두가 도서관에 모여 있는 동안 당신은 사람들의 방을 조사하려고 합니다. 원하는 객실에 가서 문제를 풀고, 얻은 답을 조사 내용에 추가하여 방을 조사하세요',
            timeline: 'TD',
            bItem: true,
        }
    }

    if (gameID == 'TEW') {
        return {
            type: 'witness',
            gameID: gameID,
            title: '선생의 목격',
            content: '선생은 자신이 경찰에게 사과하러 갔다가 경찰의 방에서 시체를 목격했다는 사실을 말한 뒤 모두를 깨웠습니다. 그리고 탐정인 당신은 조사를 시작합니다',
            timeline: 'SD',
            bItem: true,
            autoplay: "TEDOI",
        }
    }
    if (gameID == 'TEDOI') {
        return {
            type: 'doi',
            gameID: gameID,
            title: '의사 소견서',
            content: [
                '사망 대상',
                '경찰',
                '사망 일시',
                '저녁에서 자정 사이',
                '발견 장소',
                '경찰의 방',
                '직접 사인',
                '한 번의 공격으로 사망한 듯 합니다',
                '간접 사인',
                '없음',
                '의사 소명',
                '둔기로 가격당한 것 같습니다',

            ],
            timeline: 'SD',
            bItem: true,
            autoplay: "TEGTA",
        }
    }

    if (gameID == "TEGTA") {
        return {
            type: 'script',
            gameID: gameID,
            title: '알리바이 심문',
            content: '당신은 이제 사람들의 알리바이를 확인하기 시작합니다. 알리바이 확인 장소로 이동하여 알리바이를 확인하고 싶은 사람의 코드를 조사 내용에 추가하세요\n(모든 사람의 알리바이를 확인하면 계속 진행됩니다)',
            timeline: 'SD',
            bItem: true,
        }
    }

    if (customStarting(gameID, 'TEA')) {
        let ailbiData = TEA
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
    if (customStarting(gameID, 'TER')) {
        let roomData = TER
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

