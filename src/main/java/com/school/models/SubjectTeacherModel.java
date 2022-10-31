package com.school.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "professor_disciplina", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SubjectTeacherModel {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long subjectTeacherSequenceNumber;

    @Column(name = "cd_disciplina", length = 11, nullable = false)
    private Long subjectCode;

    @Column(name = "cd_funcionario", length = 11, nullable = false)
    private Long employeeCode;

}
