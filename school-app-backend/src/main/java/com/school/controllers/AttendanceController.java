package com.school.controllers;

import com.school.dtos.AttendanceDTO;
import com.school.models.AttendanceModel;
import com.school.services.servicesImpl.AttendanceServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@Api(value = "API REST Attendance")
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    AttendanceServiceImpl attendanceService;

    @PreAuthorize("hasRole('ROLE_TEACHER')")
    @PostMapping("/saveAttendance")
    @ApiOperation(value = "Save a student attendance")
    public ResponseEntity<Object> saveAttendance(@RequestBody @Valid List<AttendanceDTO> attendanceDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(attendanceService.save(attendanceDTO));
    }

    @PreAuthorize("hasAnyRole('ROLE_STUDENT', 'ROLE_TEACHER')")
    @GetMapping
    @ApiOperation(value = "Return all students attendances")
    public ResponseEntity<List<AttendanceModel>> getAllAttendances() {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.findAllAttendances());
    }

    @PreAuthorize("hasRole('ROLE_STUDENT')")
    @GetMapping("/findAttendanceBySequenceNumber")
    @ApiOperation(value = "Return an attendance by sequence number")
    public ResponseEntity<Object> getAttendanceBySequence(@RequestParam(value = "sequenceNumber") Long subjectSequenceNumber) {
        Optional<AttendanceModel> attendanceModelOptional = attendanceService.findById(subjectSequenceNumber);
        if (!attendanceModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Attendance not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(attendanceModelOptional.get());
    }

    @PreAuthorize("hasRole('ROLE_STUDENT')")
    @GetMapping("/findAttendanceBetweenDate")
    @ApiOperation(value = "Return student attendances between dates")
    public ResponseEntity<List<AttendanceModel>> findAttendancesBetweenDate(@RequestParam("dateTimeStart") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateTimeStart,
                                                                            @RequestParam("dateTimeEnd") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateTimeEnd,
                                                                            @RequestParam("studentCode") Long studentCode) {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.findAttendancesBetweenDate(dateTimeStart, dateTimeEnd, studentCode));
    }

}
