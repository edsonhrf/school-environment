package com.school.general.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "disciplina_serie", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SubjectSchoolDegree {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long subjectSchoolDegreeSequenceNumber;

    @Column(name = "cd_disciplina", length = 11, nullable = false)
    private Long subjectCode;

    @Column(name = "cd_serie", length = 11, nullable = false)
    private Long schoolDegreeCode;


}
