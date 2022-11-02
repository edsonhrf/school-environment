package com.school.services;

import com.school.models.AttendanceModel;
import com.school.repositories.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttendanceService {

    @Autowired
    AttendanceRepository attendanceRepository;

    public AttendanceModel save(AttendanceModel attendanceModel) {
        return attendanceRepository.save(attendanceModel);
    }
}
