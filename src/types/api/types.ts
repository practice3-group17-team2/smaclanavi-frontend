import { ISO8601, Uuid } from "./common"

// {
//     "id": "12345678-1234-5678-1234-567812345678",
//     "class_name": "皇居",
//     "organizer": {
//         "org_id": 1,
//         "org_name": "個人"
//     },
//     "city": {
//         "pref_id": 14,
//         "city_id": 1,
//         "prefecture": "東京都",
//         "city_name": "千代田区"
//     },
//     "phone_number": "123-4567-8910",
//     "address": "東京都千代田区千代田1番1号",
//     "evaluation": 0,
//     "price": 10000,
//     "site_url": "https://www.kunaicho.go.jp/",
//     "created": "1868-01-01T00:00:00.000000Z",
//     "updated": "2021-07-14T00:00:00.000000Z",
//     "lecture": [
//         <講義(lecture)インスタンス>,
//         <講義(lecture)インスタンス>,
//         <講義(lecture)インスタンス>
//     ],
//     "lec_infos": [
//         <講義開催情報(lec_infos)インスタンス>,
//         <講義開催情報(lec_infos)インスタンス>,
//         <講義開催情報(lec_infos)インスタンス>
//     ],
//     "reviews": [
//         <教室評価(reviews)インスタンス>,
//         <教室評価(reviews)インスタンス>,
//         <教室評価(reviews)インスタンス>
//     ]
// }

export type Lecture = {
    "lec_id": number,
    "lecture_content": string,
    "is_target_old": boolean
}

export type Schedule = {
    "id": Uuid,
    "date": ISO8601,
    "updated": ISO8601
}

export type LectureInfo = {
    "id": string,
    "lecture": Lecture,
    "which_class_held": ISO8601,
    "is_personal_lec": false,
    "target_unit_type": "iphone" | "android", // iphoneを指す識別用の文字列
    "can_select_date": false,
    "created": ISO8601,
    "updated": ISO8601,
    "schedules": Schedule[]
}

export type Review = {
    "rev_id": Uuid,
    "class_info_id": Uuid,
    "author": string,
    "faves": number,
    "review_text": string,
}

export type Class = {
    "id": Uuid,
    "class_name": string,
    "organizer": {
        "org_id": number,
        "org_name": string,
    },
    "city": {
        "pref_id": number,
        "city_id": number,
        "prefecture": string,
        "city_name": string,
    },
    "phone_number": string,
    "address": string,
    "evaluation": number,
    "price": number,
    "site_url": string,
    "created": ISO8601,
    "updated": ISO8601,
    "lecture": Lecture[],
    "lec_infos": LectureInfo[],
    "reviews": Review[]
}
