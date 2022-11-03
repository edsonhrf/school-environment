package com.school.controllers;

import com.school.dtos.AttendanceDTO;
import com.school.models.AttendanceModel;
import com.school.models.SubjectModel;
import com.school.services.AttendanceService;
import com.school.services.SchoolDegreeService;
import com.school.services.StudentService;
import com.school.services.SubjectService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    AttendanceService attendanceService;
    @Autowired
    StudentService studentService;
    @Autowired
    SubjectService subjectService;
    @Autowired
    SchoolDegreeService schoolDegreeService;

    @PostMapping
    public ResponseEntity<Object> saveAttendance(@RequestBody @Valid List<AttendanceDTO> attendanceDTO) {

        List<AttendanceModel> xyz = attendanceDTO.stream().map(attendanceDTO1 -> {

            var attendanceModel = new AttendanceModel();

            BeanUtils.copyProperties(attendanceDTO1, attendanceModel);
            attendanceModel.setAttendanceDate(LocalDate.now(ZoneId.of("UTC")));

            var studentModel = studentService.findStudentById(attendanceDTO1.getStudentCode());
            attendanceModel.setStudent(studentModel);

            var subjectModel = subjectService.findSubjectById(attendanceDTO1.getSubjectCode());
            attendanceModel.setSubject(subjectModel);

            var schoolDegreeModel = schoolDegreeService.findSchoolDegreeById(attendanceDTO1.getSchoolDegreeCode());
            attendanceModel.setSchoolDegree(schoolDegreeModel);

            return attendanceService.save(attendanceModel);
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.CREATED).body(xyz);
    }
}
