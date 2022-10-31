package com.school.services;

import com.school.repositories.PhysicalPersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhysicalPersonService {

    @Autowired
    PhysicalPersonRepository physicalPersonRepository;
}
