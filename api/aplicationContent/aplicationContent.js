const restful = require('node-restful')
const mongoose = restful.mongoose

/*
    Schema -> 

        aplicationContentSchema {
            robotSection: [robotSectionSchema],
            constructionSection: [constructionSectionSchema],
            competitionSection: [competitionSectionSchema],
            teamSection: [teamSectionSchema]
        }

        robotSectionSchema {
            section_title:String,
            textArea_1: String,
            textArea_2: String,
            imgUrl_1: String,
            imgUrl_2: String,
            imgUrl_3: String,
            description_1: String,
            description_2: String
        }

        constructionSectionSchema {
            section_title: String,
            textArea_1: String,
            imgUrl_1: String,
            imgUrl_2: String,
            imgUrl_3: String,
            imgUrl_4: String,
            imgUrl_5: String,
            imgUrl_6: String,
            imgUrl_7: String,
            imgUrl_8: String,
            label_1: String,
            label_2: String,
            label_3: String,
            label_4: String,
            label_5: String,
            label_6: String,
            label_7: String,
            label_8: String    
        }

        competitionSectionSchema {
            title: String,
            imgUrl_1: String,
            textArea_1: String
        }

*/