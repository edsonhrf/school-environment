package com.school.services.servicesImpl;

import com.school.repositories.PhysicalPersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhysicalPersonServiceImpl {

    @Autowired
    PhysicalPersonRepository physicalPersonRepository;
}
