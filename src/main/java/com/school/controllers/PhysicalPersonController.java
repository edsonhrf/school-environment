package com.school.controllers;

import com.school.services.PhysicalPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/physical-person")
public class PhysicalPersonController {

    @Autowired
    PhysicalPersonService physicalPersonService;
}
