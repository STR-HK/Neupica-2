export function cvt(jobCode) {
    switch (jobCode) {
        case "PO":
            return "경찰"
        case "CA":
            return "집사"
        case "TE":
            return "선생님"
        case "DU":
            return "공작"
        case "DE":
            return "탐정"
        case "DO":
            return "의사"
        case "NO":
            return "일반인"
        case "EN":
            return "기술자"
        default:
            return "사람"
    }
}

export function rrrcvt(jobCode) {
    switch (jobCode) {
        case "경찰":
            return "PO"
        case "집사":
            return "CA"
        case "선생님":
            return "TE"
        case "공작":
            return "DU"
        case "탐정":
            return "DE"
        case "의사":
            return "DO"
        case "일반인":
            return "NO"
        case "기술자":
            return "EN"
        default:
            return "사람"
    }
}