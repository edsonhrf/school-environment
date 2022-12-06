package com.school.services;

import com.school.dtos.GradeDTO;
import com.school.models.GradeModel;

import java.util.List;
import java.util.Optional;

public interface GradeService {

    Optional<GradeModel> findGradesByStudent(Long studentCode, Long schoolDegreeCode, Long subjectCode);

    List<GradeModel> findAllStudentsGradesBySchoolDegreeAndSubject(Long schoolDegree, Long subjectCode);

    Optional<GradeModel> findById(Long studentCode);

    GradeModel save(GradeModel gradeModel);

    Optional<Object> createStudentGrade(Long studentCode, Long schoolDegreeCode, Long subjectCode);

    Optional<Object> updateStudentGrade(Long studentCode, Long schoolDegreeCode, Long subjectCode, GradeDTO gradeDTO);

}
