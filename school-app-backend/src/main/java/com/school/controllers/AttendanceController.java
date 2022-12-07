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
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@Api(value="API REST Attendance")
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    AttendanceServiceImpl attendanceService;
    @PostMapping("/saveAttendance")
    @ApiOperation(value="Return a student attendance")
    public ResponseEntity<Object> saveAttendance(@RequestBody @Valid List<AttendanceDTO> attendanceDTO) {
        try{
            return ResponseEntity.status(HttpStatus.CREATED).body(attendanceService.save(attendanceDTO));
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
    @GetMapping
    @ApiOperation(value="Return all students attendances")
    public ResponseEntity<List<AttendanceModel>> getAllAttendances() {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.findAllAttendances());
    }
    @GetMapping("/findAttendanceBySequenceNumber")
    @ApiOperation(value="Return an attendance by sequence number")
    public ResponseEntity<Object> getAttendanceBySequence(@RequestParam(value = "sequenceNumber") Long subjectSequenceNumber) {
        Optional<AttendanceModel> attendanceModelOptional = attendanceService.findById(subjectSequenceNumber);
        if (!attendanceModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Attendance not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(attendanceModelOptional.get());
    }

    @GetMapping("/findAttendanceBetweenDate")
    @ApiOperation(value="Return student attendances between dates")
    public ResponseEntity<List<AttendanceModel>> findAttendancesBetweenDate(@RequestParam("dateTimeStart") @DateTimeFormat (pattern = "yyyy-MM-dd") LocalDate dateTimeStart,
                                                                            @RequestParam("dateTimeEnd") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateTimeEnd,
                                                                            @RequestParam("studentCode") Long studentCode) {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.findAttendancesBetweenDate(dateTimeStart, dateTimeEnd, studentCode));
    }

}
