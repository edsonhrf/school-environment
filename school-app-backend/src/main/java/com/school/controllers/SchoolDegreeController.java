package com.school.controllers;

import com.school.services.servicesImpl.SchoolDegreeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/school-degree")
public class SchoolDegreeController {

    @Autowired
    SchoolDegreeServiceImpl schoolDegreeService;
}
