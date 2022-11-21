package com.school.services;

import com.school.dtos.PhysicalPersonDTO;
import com.school.models.PhysicalPersonModel;

import java.util.Optional;

public interface PhysicalPersonService {

    Optional<PhysicalPersonModel> findById(Long physicalPersonCode);

    PhysicalPersonModel save(PhysicalPersonModel physicalPersonModel);

    Optional<Object> updatePhysicalPerson(Long physicalPersonCode, PhysicalPersonDTO physicalPersonDTO);

}
