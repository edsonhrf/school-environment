package com.school.controllers;

import com.school.dtos.PhysicalPersonDTO;
import com.school.models.PhysicalPersonModel;
import com.school.services.servicesImpl.PhysicalPersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/physical-person")
public class PhysicalPersonController {

    @Autowired
    PhysicalPersonServiceImpl physicalPersonService;

    @GetMapping("/findPhysicalPerson/{physicalPersonCode}")
    public ResponseEntity<Optional<PhysicalPersonModel>> findPhysicalPersonById(@PathVariable(value = "physicalPersonCode") Long physicalPersonCode) {
        return ResponseEntity.status(HttpStatus.OK).body(physicalPersonService.findById(physicalPersonCode));
    }

    @PutMapping("/updatePhysicalPerson/{physicalPersonCode}")
    public ResponseEntity<Optional<Object>> updatePhysicalPerson(@PathVariable(value = "physicalPersonCode") Long physicalPersonCode,
                                                       @RequestBody @Valid PhysicalPersonDTO physicalPersonDTO) {

        var updatedPhysicalPerson = physicalPersonService.updatePhysicalPerson(physicalPersonCode, physicalPersonDTO);
        return ResponseEntity.ok().body(updatedPhysicalPerson);

    }

}


