package com.school.services.servicesImpl;

import com.school.repositories.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PositionServiceImpl {

    @Autowired
    PositionRepository positionRepository;
}

