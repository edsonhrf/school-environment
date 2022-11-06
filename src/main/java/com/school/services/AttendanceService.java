package com.school.services;

import com.school.dtos.AttendanceDTO;
import com.school.models.AttendanceModel;

import java.util.List;
import java.util.Optional;

public interface AttendanceService {

    List<AttendanceModel> save(List<AttendanceDTO> attendanceDTO);

    List<AttendanceModel> findAllAttendances();

    Optional<AttendanceModel> findById(Long subjectSequenceNumber);

}
