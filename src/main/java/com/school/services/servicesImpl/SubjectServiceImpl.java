package com.school.services.servicesImpl;

import com.school.models.SubjectModel;
import com.school.repositories.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectServiceImpl {

    @Autowired
    SubjectRepository subjectRepository;
    public SubjectModel findSubjectById(Long subjectCode){
        return subjectRepository.findById(subjectCode).orElse(null);
    }
}
