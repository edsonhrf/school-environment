package com.school.services.servicesImpl;

import com.school.dtos.PhysicalPersonDTO;
import com.school.models.PhysicalPersonModel;
import com.school.repositories.PhysicalPersonRepository;
import com.school.services.PhysicalPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PhysicalPersonServiceImpl implements PhysicalPersonService {

    @Autowired
    PhysicalPersonRepository physicalPersonRepository;

    @Override
    public Optional<PhysicalPersonModel> findById(Long physicalPersonCode) {
        return physicalPersonRepository.findById(physicalPersonCode);
    }
    @Override
    public PhysicalPersonModel save(PhysicalPersonModel physicalPersonModel) {
        return physicalPersonRepository.save(physicalPersonModel);
    }

    @Override
    public Optional<Object> updatePhysicalPerson(Long physicalPersonCode, PhysicalPersonDTO physicalPersonDTO) {

        var physicalPersonModel = findById(physicalPersonCode);

//        physicalPersonDTO.setPhysicalPersonName(physicalPersonDTO.getPhysicalPersonName());
//        physicalPersonDTO.setEmail(physicalPersonDTO.getEmail());
//        physicalPersonDTO.setTelephoneNumber(physicalPersonDTO.getTelephoneNumber());
//        physicalPersonDTO.setGender(physicalPersonDTO.getGender());
//        physicalPersonDTO.setBirthDate(physicalPersonDTO.getBirthDate());
//
//        return save(physicalPersonModel);

        return physicalPersonModel.map(physicalPerson -> {
            physicalPerson.setPhysicalPersonName(Optional.ofNullable(physicalPersonDTO.getPhysicalPersonName()).orElse(physicalPersonModel.get().getPhysicalPersonName()));
            physicalPerson.setEmail(Optional.ofNullable(physicalPersonDTO.getEmail()).orElse(physicalPersonModel.get().getEmail()));
            physicalPerson.setAreaCodeNumber(Optional.ofNullable(physicalPersonDTO.getAreaCodeNumber()).orElse(physicalPersonModel.get().getAreaCodeNumber()));
            physicalPerson.setTelephoneNumber(Optional.ofNullable(physicalPersonDTO.getTelephoneNumber()).orElse(physicalPersonModel.get().getTelephoneNumber()));
            physicalPerson.setGender(Optional.ofNullable(physicalPersonDTO.getGender()).orElse(physicalPersonModel.get().getGender()));
            physicalPerson.setBirthDate(Optional.ofNullable(physicalPersonDTO.getBirthDate()).orElse(physicalPersonModel.get().getBirthDate()));
            return save(physicalPerson);
        });

    }

}
