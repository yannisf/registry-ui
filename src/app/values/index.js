angular.module('values', [])
    .value('childGenderTypeMap', {
        MALE: "Αγόρι",
        FEMALE: "Κορίτσι",
        OTHER: "Άλλο"
    })
    .value('guardianGenderTypeMap', {
        MALE: "Άνδρας",
        FEMALE: "Γυναίκα",
        OTHER: "Άλλο"
    })
    .value('preSchoolLevelMap', {
        PRE_SCHOOL_LEVEL_A: "Προνήπιο",
        PRE_SCHOOL_LEVEL_B: "Νήπιο"
    })
    .value('relationshipMap', {
        FATHER: "Πατέρας",
        MOTHER: "Μητέρα",
        GRANDFATHER: "Παππούς",
        GRANDMOTHER: "Γιαγιά",
        BROTHER: "Αδελφός",
        SISTER: "Αδελφή",
        UNCLE: "Θείος",
        AUNT: "Θεία",
        GODFATHER: "Νονός",
        GODMOTHER: "Νονά",
        OTHER: "Άλλο"
    })
    .value('telephoneTypeMap', {
        HOME: "Σπίτι",
        WORK: "Δουλειά",
        MOBILE: "Κινητό",
        OTHER: "Άλλο"
    });