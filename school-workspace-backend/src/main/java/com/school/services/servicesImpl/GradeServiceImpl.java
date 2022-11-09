package com.school.services.servicesImpl;

import com.school.models.GradeModel;
import com.school.repositories.GradeRepository;
import com.school.services.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GradeServiceImpl implements GradeService {

    @Autowired
    GradeRepository gradeRepository;
    @Override
    public Optional<GradeModel> findGradesByStudent(Long studentCode, Long schoolDegreeCode, Long subjectCode) {
        return gradeRepository.findGradesByStudentAndSubjectAndSchoolDegree(studentCode, schoolDegreeCode, subjectCode);
    }
}
