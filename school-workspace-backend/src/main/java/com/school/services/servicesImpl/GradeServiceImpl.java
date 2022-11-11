package com.school.services.servicesImpl;

import com.school.models.GradeModel;
import com.school.repositories.GradeRepository;
import com.school.services.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GradeServiceImpl implements GradeService {

    @Autowired
    GradeRepository gradeRepository;
    @Autowired
    StudentServiceImpl studentService;
    @Autowired
    SubjectServiceImpl subjectService;
    @Autowired
    SchoolDegreeServiceImpl schoolDegreeService;
    @Override
    public Optional<GradeModel> findGradesByStudent(Long studentCode, Long schoolDegreeCode, Long subjectCode) {
        return gradeRepository.findGradesByStudentAndSubjectAndSchoolDegree(studentCode, schoolDegreeCode, subjectCode);
    }
    @Override
    public List<GradeModel> findAllStudentsGradesBySchoolDegreeAndSubject(Long schoolDegree, Long subjectCode){
        return gradeRepository.findAllStudentsGradesBySchoolDegreeAndSubject(schoolDegree, subjectCode);
    }

    @Override
    public Optional<GradeModel> findById(Long studenteCode) {
        return gradeRepository.findById(studenteCode);
    }

    @Override
    public GradeModel save(GradeModel gradeModel) {
        return gradeRepository.save(gradeModel);
    }

}
