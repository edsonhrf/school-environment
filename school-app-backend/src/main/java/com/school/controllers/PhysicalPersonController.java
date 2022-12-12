package com.school.controllers;

import com.school.dtos.PhysicalPersonDTO;
import com.school.models.PhysicalPersonModel;
import com.school.services.servicesImpl.PhysicalPersonServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@Api(value="API REST Physical Person")
@RequestMapping("/physical-person")
public class PhysicalPersonController {

    @Autowired
    PhysicalPersonServiceImpl physicalPersonService;

    @PreAuthorize("hasAnyRole('ROLE_STUDENT', 'ROLE_TEACHER')")
    @GetMapping("/findPhysicalPerson/{physicalPersonCode}")
    @ApiOperation(value="Return a physical person by id")
    public ResponseEntity<Optional<PhysicalPersonModel>> findPhysicalPersonById(@PathVariable(value = "physicalPersonCode") Long physicalPersonCode) {
        return ResponseEntity.status(HttpStatus.OK).body(physicalPersonService.findById(physicalPersonCode));
    }

    @PreAuthorize("hasAnyRole('ROLE_STUDENT', 'ROLE_TEACHER')")
    @PutMapping("/updatePhysicalPerson/{physicalPersonCode}")
    @ApiOperation(value="Update a physical person by id")
    public ResponseEntity<Optional<Object>> updatePhysicalPerson(@PathVariable(value = "physicalPersonCode") Long physicalPersonCode,
                                                       @RequestBody @Valid PhysicalPersonDTO physicalPersonDTO) {

        var updatedPhysicalPerson = physicalPersonService.updatePhysicalPerson(physicalPersonCode, physicalPersonDTO);
        return ResponseEntity.ok().body(updatedPhysicalPerson);

    }

}


