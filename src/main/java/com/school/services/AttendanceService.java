package com.school.services;

import com.school.models.AttendanceModel;
import com.school.repositories.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.beans.Transient;

@Service
public class AttendanceService {

    @Autowired
    AttendanceRepository attendanceRepository;

    @Transactional
    public AttendanceModel save(AttendanceModel attendanceModel) {
        return attendanceRepository.save(attendanceModel);
    }
}
