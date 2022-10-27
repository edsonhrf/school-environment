package com.school.general.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "falta", schema = "heroku_fdafa744b3499e8")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Attendance {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long subjectSequenceNumber;

    @Column(name = "dt_falta", nullable = false)
    private LocalDate attendanceDate;

    @Column(name = "ds_motivo", length = 45)
    private String reasonDescription;

    //Recebe como chave estrangeira o código do aluno

}

