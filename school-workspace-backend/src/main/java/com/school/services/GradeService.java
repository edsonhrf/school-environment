package com.school.services;

import com.school.models.GradeModel;

import java.util.List;
import java.util.Optional;

public interface GradeService {

    Optional<GradeModel> findGradesByStudent(Long studentCode, Long schoolDegreeCode, Long subjectCode);

    List<GradeModel> findAllStudentsGradesBySchoolDegreeAndSubject(Long schoolDegree, Long subjectCode);

    Optional<GradeModel> findById(Long studenteCode);

    GradeModel save(GradeModel gradeModel);

}
