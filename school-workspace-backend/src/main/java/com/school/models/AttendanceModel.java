package com.school.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "falta", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceModel {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subjectSequenceNumber;

    @Column(name = "dt_registro", nullable = false)
    private LocalDate registerDate;

    @Column(name = "dt_falta", nullable = false)
    private LocalDate attendanceDate;

    @Column(name = "ds_motivo", length = 45)
    private String reasonDescription;

//  Várias faltas pertencem a um aluno
    @ManyToOne
    @JoinColumn(name = "cd_aluno", nullable = false)
    private StudentModel student;

//  Uma chamada recebe uma disciplina
    @ManyToOne
    @JoinColumn(name = "cd_disciplina", nullable = false)
    private SubjectModel subject;

//  Uma chamada recebe uma série
    @ManyToOne
    @JoinColumn(name = "cd_serie", nullable = false)
    private SchoolDegreeModel schoolDegree;
}

