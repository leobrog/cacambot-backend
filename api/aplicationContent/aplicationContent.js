const restful = require('node-restful')
const mongoose = restful.mongoose

const robotSectionSchema = new mongoose.Schema({
    section_title:{type: String},
    textArea_1: {
        heading: {type: String},
        text: {type: String}
    },
    textArea_2: {
        heading: {type: String},
        text: {type: String}
    },
    imgUrl_1: {type: String},
    imgUrl_2: {type: String},
    imgUrl_3: {type: String},
    description_1: {type: String},
    description_2: {type: String}
})

const constructionSectionSchema = new mongoose.Schema({
    section_title: {type: String},
    textArea_1: {
        heading: {type: String},
        text: {type: String}
    },
    imgUrl_1: {type: String},
    imgUrl_2: {type: String},
    imgUrl_3: {type: String},
    imgUrl_4: {type: String},
    imgUrl_5: {type: String},
    imgUrl_6: {type: String},
    imgUrl_7: {type: String},
    imgUrl_8: {type: String},
    label_1: {type: String},
    label_2: {type: String},
    label_3: {type: String},
    label_4: {type: String},
    label_5: {type: String},
    label_6: {type: String},
    label_7: {type: String},
    label_8: {type: String} 
})

const competitionSectionSchema = new mongoose.Schema({
    title: {type: String},
    imgUrl_1: {type: String},
    textArea_1: {
        heading: {type: String},
        text: {type: String}
    }
})

const teamSectionSchema = new mongoose.Schema({
    title: {type: String},
    member_1: {
        name: {type: String},
        imgUrl: {type: String}
    },
    member_2: {
        name: {type: String},
        imgUrl: {type: String}
    },
    member_3: {
        name: {type: String},
        imgUrl: {type: String}
    },
    member_4: {
        name: {type: String},
        imgUrl: {type: String}
    },
    member_5: {
        name: {type: String},
        imgUrl: {type: String}
    }
})

const aplicationContentSchema = new mongoose.Schema({
    robotSection: [robotSectionSchema],
    constructionSection: [constructionSectionSchema],
    competitionSection: [competitionSectionSchema],
    teamSection: [teamSectionSchema]
})

module.exports = restful.model('AplicationContent', aplicationContentSchema)

/*
    Schema -> 

        aplicationContentSchema {
            robotSection: [robotSectionSchema],
            constructionSection: [constructionSectionSchema],
            competitionSection: [competitionSectionSchema],
            teamSection: [teamSectionSchema]
        }

        robotSectionSchema {
            section_title:{type: String},
            textArea_1: {
                heading: String,
                text: String
            },
            textArea_2: {
                heading: String,
                text: String
            }
            imgUrl_1: String,
            imgUrl_2: String,
            imgUrl_3: String,
            description_1: String,
            description_2: String
        }

        constructionSectionSchema {
            section_title: String,
            textArea_1: {
                heading: String,
                text: String
            },
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
            textArea_1: {
                heading: String,
                text: String
            }
        }

        teamSectionSchema {
            title: String,
            member_1: {
                name: String,
                imgUrl: String
            },
            member_2: {
                name: String,
                imgUrl: String
            },
            member_3: {
                name: String,
                imgUrl: String
            },
            member_4: {
                name: String,
                imgUrl: String
            },
            member_5: {
                name: String,
                imgUrl: String
            }
        }

*/

