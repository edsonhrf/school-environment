package com.school.controllers;

import com.school.dtos.AttendanceDTO;
import com.school.models.AttendanceModel;
import com.school.services.servicesImpl.AttendanceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    AttendanceServiceImpl attendanceService;
    @PostMapping
    public ResponseEntity<Object> saveAttendance(@RequestBody @Valid List<AttendanceDTO> attendanceDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(attendanceService.save(attendanceDTO));
    }

    @GetMapping
    public ResponseEntity<List<AttendanceModel>> getAllAttendances() {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.findAllAttendances());
    }

    @GetMapping("/{nr_sequencia}")
    public ResponseEntity<Object> getAttendanceBySequence(@PathVariable(value = "nr_sequencia") Long subjectSequenceNumber) {
        Optional<AttendanceModel> attendanceModelOptional = attendanceService.findById(subjectSequenceNumber);
        if (!attendanceModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Attendance not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(attendanceModelOptional.get());
    }

}
