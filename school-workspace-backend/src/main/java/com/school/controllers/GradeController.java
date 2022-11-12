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

    @PostMapping("/createStudentGrade/{studentCode}/{schoolDegreeCode}/{subjectCode}")
    public ResponseEntity<Optional<Object>> createStudentGrade(@PathVariable Long studentCode,
                                                               @PathVariable Long schoolDegreeCode,
                                                               @PathVariable Long subjectCode) {

        var newStudentGrade =  gradeService.createStudentGrade(studentCode, schoolDegreeCode, subjectCode);
        return ResponseEntity.ok().body(newStudentGrade);
    }

    @PutMapping("/updateStudentGrade/{studentCode}/{schoolDegreeCode}/{subjectCode}")
    public ResponseEntity<Optional<Object>> updateStudentGrade(@PathVariable Long studentCode,
                                                               @PathVariable Long schoolDegreeCode,
                                                               @PathVariable Long subjectCode,
                                                               @RequestBody @Valid GradeDTO gradeDTO) {

        var gradeModelOptional = findGradesByStudent(studentCode, schoolDegreeCode, subjectCode);

        var updateStudentGrade =  gradeService.updateStudentGrade(studentCode, schoolDegreeCode, subjectCode, gradeDTO);
        return ResponseEntity.ok().body(updateStudentGrade);
    }
}
