package com.school.repositories;

import com.school.models.AttendanceModel;
import com.school.models.PhysicalPersonModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PhysicalPersonRepository extends JpaRepository<PhysicalPersonModel, Long> {

    Optional<PhysicalPersonModel> findByUsername(String username);

}
