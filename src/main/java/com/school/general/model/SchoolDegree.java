package com.school.general.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "serie", schema = "heroku_fdafa744b3499e8")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SchoolDegree {

    @Id
    @Column(name = "cd_serie", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long schoolDegreeCode;

    @Column(name = "ds_serie", nullable = false, length = 45)
    private String schoolDegreeDescription;

    @Column(name = "dt_registro", nullable = false)
    private LocalDate recordDate;

    @Column(name = "dt_atualizacao")
    private LocalDate updateDate;

}
