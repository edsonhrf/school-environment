package com.school.student.model;

import com.school.general.model.PhysicalPerson;
import com.school.general.model.SchoolDegree;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "aluno", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Student {

    @Id
    @Column(name = "cd_aluno", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long studentCode;

    @Column(name = "dt_matricula", length = 45, nullable = false)
    private LocalDate enrollmentDate;

    @Column(name = "nr_matricula", length = 11, nullable = false)
    private Integer enrollmentNumber;

    //Um aluno possui um código de pessoa física
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cd_pessoa_fisica")
    private PhysicalPerson physicalPerson;

    //Um aluno possui possui uma série

}
