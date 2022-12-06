package com.school.services.servicesImpl;

import com.school.dtos.AttendanceDTO;
import com.school.models.AttendanceModel;
import com.school.repositories.AttendanceRepository;
import com.school.services.AttendanceService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AttendanceServiceImpl implements AttendanceService {

    @Autowired
    AttendanceRepository attendanceRepository;
    @Autowired
    StudentServiceImpl studentService;
    @Autowired
    SubjectServiceImpl subjectService;
    @Autowired
    SchoolDegreeServiceImpl schoolDegreeService;

    @Transactional
    @Override
    public List<AttendanceModel> save(List<AttendanceDTO> attendanceDTO) {

        List<AttendanceModel> listAttendanceModelReturn = new ArrayList<>();

        for (AttendanceDTO attendanceDTO1 : attendanceDTO) {
            var attendanceModel = new AttendanceModel();

            BeanUtils.copyProperties(attendanceDTO1, attendanceModel);
            attendanceModel.setRegisterDate(LocalDate.now(ZoneId.of("UTC")));

            var studentModel = studentService.findStudentById(attendanceDTO1.getStudentCode());
            attendanceModel.setStudent(studentModel);

            var subjectModel = subjectService.findSubjectById(attendanceDTO1.getSubjectCode());
            attendanceModel.setSubject(subjectModel);

            var schoolDegreeModel = schoolDegreeService.findSchoolDegreeById(attendanceDTO1.getSchoolDegreeCode());
            attendanceModel.setSchoolDegree(schoolDegreeModel);

            attendanceRepository.save(attendanceModel);
            listAttendanceModelReturn.add(attendanceModel);
        }
        return listAttendanceModelReturn;
    }
    @Override
    public List<AttendanceModel> findAllAttendances() {
        return attendanceRepository.findAll();
    }
    @Override
    public Optional<AttendanceModel> findById(Long subjectSequenceNumber) {
        return attendanceRepository.findById(subjectSequenceNumber);
    }

    @Override
    public List<AttendanceModel> findAttendancesBetweenDate(LocalDate dateTimeStart, LocalDate dateTimeEnd, Long studentCode) {
        return attendanceRepository.findAttendancesBetweenDate(dateTimeStart, dateTimeEnd, studentCode);
    }

}
