package com.school.models;

import com.school.services.SubjectService;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

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

    @Column(name = "dt_falta", nullable = false)
    private LocalDate attendanceDate;

    @Column(name = "ds_motivo", length = 45)
    private String reasonDescription;

//  Várias faltas pertencem a um aluno
    @ManyToOne
    @JoinColumn(name = "cd_aluno")
    private StudentModel student;

//  Uma chamada recebe uma disciplina
    @OneToOne
    @JoinColumn(name = "cd_disciplina")
    private SubjectModel subject;

//  Uma chamada recebe uma série
    @OneToOne
    @JoinColumn(name = "cd_serie")
    private SchoolDegreeModel schoolDegree;


}

