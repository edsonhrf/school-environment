package com.school.services;

import com.school.dtos.AttendanceDTO;
import com.school.models.AttendanceModel;

import java.util.List;

public interface AttendanceService {

    List<AttendanceModel> save(List<AttendanceDTO> attendanceDTO);

}
