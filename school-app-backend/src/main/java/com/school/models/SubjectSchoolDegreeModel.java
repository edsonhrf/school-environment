package com.school.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "disciplina_serie", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SubjectSchoolDegreeModel {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subjectSchoolDegreeSequenceNumber;

    @Column(name = "cd_disciplina", length = 11, nullable = false)
    private Long subjectCode;

    @Column(name = "cd_serie", length = 11, nullable = false)
    private Long schoolDegreeCode;


}
