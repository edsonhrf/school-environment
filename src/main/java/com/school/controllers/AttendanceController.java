package com.school.controllers;

import com.school.dtos.AttendanceDTO;
import com.school.models.AttendanceModel;
import com.school.services.AttendanceService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.ZoneId;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    AttendanceService attendanceService;

    @PostMapping
    public ResponseEntity<Object> saveAttendance(@RequestBody @Valid AttendanceDTO attendanceDTO) {
        var attendanceModel = new AttendanceModel();
        BeanUtils.copyProperties(attendanceDTO, attendanceModel);
        attendanceModel.setAttendanceDate(LocalDate.now(ZoneId.of("UTC")));
        return ResponseEntity.status(HttpStatus.CREATED).body(attendanceService.save(attendanceModel));
    }
}
