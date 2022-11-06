package com.school.services.servicesImpl;

import com.school.repositories.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradeServiceImpl {

    @Autowired
    GradeRepository gradeRepository;
}
