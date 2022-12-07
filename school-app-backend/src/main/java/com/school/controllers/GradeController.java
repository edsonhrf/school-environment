package com.school.controllers;

import com.school.dtos.GradeDTO;
import com.school.models.GradeModel;
import com.school.services.servicesImpl.GradeServiceImpl;
import com.school.services.servicesImpl.SchoolDegreeServiceImpl;
import com.school.services.servicesImpl.StudentServiceImpl;
import com.school.services.servicesImpl.SubjectServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@Api(value="API REST Grade")
@RequestMapping("/grade")
public class GradeController {

    @Autowired
    GradeServiceImpl gradeService;

    @GetMapping("/findGradesByStudent")
    @ApiOperation(value="Return grades by student")
    public ResponseEntity<Object> findGradesByStudent(@RequestParam("studentCode") Long studentCode,
                                                      @RequestParam("schoolDegreeCode") Long schoolDegree,
                                                      @RequestParam("subjectCode") Long subjectCode) {
        return ResponseEntity.status(HttpStatus.OK).body(gradeService.findGradesByStudent(studentCode, schoolDegree, subjectCode));
    }

    @GetMapping("/findAllStudentsGradesBySchoolDegreeAndSubject")
    @ApiOperation(value="Return all students grades")
    public ResponseEntity<List<GradeModel>> findAllStudentsGradesBySchoolDegreeAndSubject(@RequestParam("schoolDegreeCode") Long schoolDegree,
                                                                                          @RequestParam("subjectCode") Long subjectCode) {
        return ResponseEntity.status(HttpStatus.OK).body(gradeService.findAllStudentsGradesBySchoolDegreeAndSubject(schoolDegree, subjectCode));
    }

    // This method will be used in the web portal to create the report card after the enrollment
    @PostMapping("/createStudentGrade/{studentCode}/{schoolDegreeCode}/{subjectCode}")
    @ApiOperation(value="Create a new student grade")
    public ResponseEntity<Optional<Object>> createStudentGrade(@PathVariable Long studentCode,
                                                               @PathVariable Long schoolDegreeCode,
                                                               @PathVariable Long subjectCode) {

        var newStudentGrade =  gradeService.createStudentGrade(studentCode, schoolDegreeCode, subjectCode);
        return ResponseEntity.ok().body(newStudentGrade);
    }

    @PutMapping("/updateStudentGrade/{studentCode}/{schoolDegreeCode}/{subjectCode}")
    @ApiOperation(value="Update a student grade")
    public ResponseEntity<Optional<Object>> updateStudentGrade(@PathVariable Long studentCode,
                                                               @PathVariable Long schoolDegreeCode,
                                                               @PathVariable Long subjectCode,
                                                               @RequestBody @Valid GradeDTO gradeDTO) {

        var gradeModelOptional = findGradesByStudent(studentCode, schoolDegreeCode, subjectCode);

        var updateStudentGrade =  gradeService.updateStudentGrade(studentCode, schoolDegreeCode, subjectCode, gradeDTO);

        return ResponseEntity.ok().body(updateStudentGrade);
    }
}
