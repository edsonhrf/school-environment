package com.school.teacher.model;

import com.school.general.model.PhysicalPerson;
import com.school.general.model.Subject;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "professor_disciplina", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SubjectTeacher {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long subjectTeacherSequenceNumber;

    @Column(name = "cd_disciplina", length = 11, nullable = false)
    private Long subjectCode;

    @Column(name = "cd_funcionario", length = 11, nullable = false)
    private Long employeeCode;

}
