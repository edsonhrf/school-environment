package com.school.services.servicesImpl;

import com.school.models.StudentModel;
import com.school.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl {

    @Autowired
    StudentRepository studentRepository;

    public StudentModel findStudentById(Long studentCode){
        return studentRepository.findById(studentCode).orElse(null);
    }
}
