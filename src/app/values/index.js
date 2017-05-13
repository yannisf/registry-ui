const childGenderTypeMap = {
    MALE: "Αγόρι",
    FEMALE: "Κορίτσι",
    OTHER: "Άλλο"
};

const guardianGenderTypeMap = {
    MALE: "Άνδρας",
    FEMALE: "Γυναίκα",
    OTHER: "Άλλο"
}

const preSchoolLevelMap = {
    PRE_SCHOOL_LEVEL_A: "Προνήπιο",
    PRE_SCHOOL_LEVEL_B: "Νήπιο"
}

const relationshipMap = {
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
}

const telephoneTypeMap = {
    HOME: "Σπίτι",
    WORK: "Δουλειά",
    MOBILE: "Κινητό",
    OTHER: "Άλλο"
}

export default angular.module('values', [])
    .value('childGenderTypeMap', childGenderTypeMap)
    .value('guardianGenderTypeMap', guardianGenderTypeMap)
    .value('preSchoolLevelMap', preSchoolLevelMap)
    .value('relationshipMap', relationshipMap)
    .value('telephoneTypeMap', telephoneTypeMap)
    .name;
