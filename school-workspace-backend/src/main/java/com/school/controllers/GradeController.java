package com.school.controllers;

import com.school.services.servicesImpl.GradeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/grade")
public class GradeController {

    @Autowired
    GradeServiceImpl gradeService;

    @GetMapping("/findGradesByStudent")
    public ResponseEntity<Object> findGradesByStudent(@RequestParam("studentCode") Long studentCode,
                                                                       @RequestParam("schoolDegreeCode") Long schoolDegree,
                                                                       @RequestParam("subjectCode") Long subjectCode) {
        return ResponseEntity.status(HttpStatus.OK).body(gradeService.findGradesByStudent(studentCode, schoolDegree, subjectCode));
    }

}
