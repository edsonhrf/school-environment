package com.school.services.servicesImpl;

import com.school.dtos.GradeDTO;
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
    public Optional<GradeModel> findById(Long studentCode) {
        return gradeRepository.findById(studentCode);
    }

    @Override
    public GradeModel save(GradeModel gradeModel) {
        return gradeRepository.save(gradeModel);
    }

    @Override
    public Optional<Object> createNewGradeModelIfNotExists(Long studentCode, Long schoolDegreeCode, Long subjectCode) {
        var newGradeModel = new GradeModel();

        var student = studentService.findStudentById(studentCode);
        newGradeModel.setStudent(student);

        var schoolDegree = schoolDegreeService.findSchoolDegreeById(schoolDegreeCode);
        newGradeModel.setSchoolDegree(schoolDegree);

        var subjectDegree = subjectService.findSubjectById(subjectCode);
        newGradeModel.setSubject(subjectDegree);

        return Optional.of(save(newGradeModel));
    }

    @Override
    public Optional<Object> updateGradeModel(Long studentCode, Long schoolDegreeCode, Long subjectCode, GradeDTO gradeDTO) {
        var gradeModel = findGradesByStudent(studentCode, schoolDegreeCode, subjectCode);

        return gradeModel.map(grade -> {

            grade.setFirstBimesterGrade(Optional.ofNullable(gradeDTO.getFirstBimesterGrade()).orElse(gradeModel.get().getFirstBimesterGrade()));
            grade.setSecondBimesterGrade(Optional.ofNullable(gradeDTO.getSecondBimesterGrade()).orElse(gradeModel.get().getSecondBimesterGrade()));
            grade.setFirstSemesterRecoverGrade(Optional.ofNullable(gradeDTO.getFirstSemesterRecoverGrade()).orElse(gradeModel.get().getFirstSemesterRecoverGrade()));
            grade.setThirdBimesterGrade(Optional.ofNullable(gradeDTO.getThirdBimesterGrade()).orElse(gradeModel.get().getThirdBimesterGrade()));
            grade.setFourthBimesterGrade(Optional.ofNullable(gradeDTO.getFourthBimesterGrade()).orElse(gradeModel.get().getFourthBimesterGrade()));
            grade.setSecondSemesterRecoverGrade(Optional.ofNullable(gradeDTO.getSecondSemesterRecoverGrade()).orElse(gradeModel.get().getSecondSemesterRecoverGrade()));
            return save(grade);
        });
    }

    @Override
    public Optional<Object> updateStudentGrade(Long studentCode, Long schoolDegreeCode, Long subjectCode, GradeDTO gradeDTO) {
        var gradeModel = findGradesByStudent(studentCode, schoolDegreeCode, subjectCode);

        if(gradeModel.isEmpty()) {
            return createNewGradeModelIfNotExists(studentCode, schoolDegreeCode, subjectCode);
        }

        return updateGradeModel(studentCode, schoolDegreeCode, subjectCode, gradeDTO);
    }


}
