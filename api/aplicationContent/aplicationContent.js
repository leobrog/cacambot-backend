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
            title:
            
        }
*/