package com.school.services.servicesImpl;

import com.school.models.SchoolDegreeModel;
import com.school.repositories.SchoolDegreeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SchoolDegreeServiceImpl {

    @Autowired
    SchoolDegreeRepository schoolDegreeRepository;
    public SchoolDegreeModel findSchoolDegreeById(Long schoolDegreeCode){
        return schoolDegreeRepository.findById(schoolDegreeCode).orElse(null);
    }
}
