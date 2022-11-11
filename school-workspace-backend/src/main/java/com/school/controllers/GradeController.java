package com.school.controllers;

import com.school.dtos.GradeDTO;
import com.school.models.GradeModel;
import com.school.services.servicesImpl.GradeServiceImpl;
import com.school.services.servicesImpl.SchoolDegreeServiceImpl;
import com.school.services.servicesImpl.StudentServiceImpl;
import com.school.services.servicesImpl.SubjectServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/grade")
public class GradeController {

    @Autowired
    GradeServiceImpl gradeService;

    @Autowired
    StudentServiceImpl studentService;

    @Autowired
    SubjectServiceImpl subjectService;

    @Autowired
    SchoolDegreeServiceImpl schoolDegreeService;

    @GetMapping("/findGradesByStudent")
    public ResponseEntity<Object> findGradesByStudent(@RequestParam("studentCode") Long studentCode,
                                                      @RequestParam("schoolDegreeCode") Long schoolDegree,
                                                      @RequestParam("subjectCode") Long subjectCode) {
        return ResponseEntity.status(HttpStatus.OK).body(gradeService.findGradesByStudent(studentCode, schoolDegree, subjectCode));
    }

    @GetMapping("/findAllStudentsGradesBySchoolDegreeAndSubject")
    public ResponseEntity<List<GradeModel>> findAllStudentsGradesBySchoolDegreeAndSubject(@RequestParam("schoolDegreeCode") Long schoolDegree,
                                                                                          @RequestParam("subjectCode") Long subjectCode) {
        return ResponseEntity.status(HttpStatus.OK).body(gradeService.findAllStudentsGradesBySchoolDegreeAndSubject(schoolDegree, subjectCode));
    }

    @PutMapping("/updateStudentGrade/{studentCode}/{schoolDegreeCode}/{subjectCode}")
    public ResponseEntity<Optional<GradeModel>> updateStudentGrade(@PathVariable Long studentCode,
                                                         @PathVariable Long schoolDegreeCode,
                                                         @PathVariable Long subjectCode,
                                                         @RequestBody @Valid GradeDTO gradeDTO) {

        var gradeModel = gradeService.findGradesByStudent(studentCode, schoolDegreeCode, subjectCode);

        if (gradeModel.isEmpty()) {
            var newGradeModel = new GradeModel();

            var student = studentService.findStudentById(studentCode);
            newGradeModel.setStudent(student);

            var schoolDegree = schoolDegreeService.findSchoolDegreeById(schoolDegreeCode);
            newGradeModel.setSchoolDegree(schoolDegree);

            var subjectDegree = subjectService.findSubjectById(subjectCode);
            newGradeModel.setSubject(subjectDegree);

            return ResponseEntity.ok().body(Optional.of(gradeService.save(newGradeModel)));

        }

        var gradeMap = gradeModel.map(grade -> {

            grade.setFirstBimesterGrade(Optional.ofNullable(gradeDTO.getFirstBimesterGrade()).orElse(gradeModel.get().getFirstBimesterGrade()));
            grade.setSecondBimesterGrade(Optional.ofNullable(gradeDTO.getSecondBimesterGrade()).orElse(gradeModel.get().getSecondBimesterGrade()));
            grade.setFirstSemesterRecoverGrade(Optional.ofNullable(gradeDTO.getFirstSemesterRecoverGrade()).orElse(gradeModel.get().getFirstSemesterRecoverGrade()));
            grade.setThirdBimesterGrade(Optional.ofNullable(gradeDTO.getThirdBimesterGrade()).orElse(gradeModel.get().getThirdBimesterGrade()));
            grade.setFourthBimesterGrade(Optional.ofNullable(gradeDTO.getFourthBimesterGrade()).orElse(gradeModel.get().getFourthBimesterGrade()));
            grade.setSecondSemesterRecoverGrade(Optional.ofNullable(gradeDTO.getSecondSemesterRecoverGrade()).orElse(gradeModel.get().getSecondSemesterRecoverGrade()));
            return gradeService.save(grade);
        });

        return ResponseEntity.ok().body(gradeMap);

    }
}
