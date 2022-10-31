package com.school.models;

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
@Data
public class AttendanceModel {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long subjectSequenceNumber;

    @Column(name = "dt_falta", nullable = false)
    private LocalDate attendanceDate;

    @Column(name = "ds_motivo", length = 45)
    private String reasonDescription;

    //Uma lista de chamada recebe uma lista de séries/turmas
    @OneToMany
    private List<SchoolDegreeModel> classes;

    //Uma lista de chamada recebe uma lista de alunos
    @OneToMany
    private List<StudentModel> students;

}

